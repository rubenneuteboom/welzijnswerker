#!/usr/bin/env python3
"""
RPA v4.0 - Fix Navigation
Voegt directe navigatie toe voor nieuwe screens
"""

INPUT = "positioneel.html"
OUTPUT = "positioneel.html"
BACKUP = f"positioneel-BACKUP-nav-fix.html"

import shutil

with open(INPUT, 'r', encoding='utf-8') as f:
    content = f.read()

# Backup
shutil.copy(INPUT, BACKUP)
print(f"📦 Backup: {BACKUP}")

# Voeg directe navigatie functie toe
direct_nav_function = '''
    // ====== RPA v4.0: DIRECTE NAVIGATIE voor nieuwe screens ======
    function goToScreenDirect(screenId) {
        console.log('🔹 goToScreenDirect aangeroepen voor:', screenId);
        
        // Verberg alle screens
        const allScreens = document.querySelectorAll('.screen');
        allScreens.forEach(s => {
            s.classList.remove('active');
            s.style.display = 'none';
        });
        
        // Toon target screen
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            targetScreen.style.display = 'block';
            window.scrollTo(0, 0);
            console.log('✅ Screen getoond:', screenId);
            return true;
        } else {
            console.error('❌ Screen niet gevonden:', screenId);
            return false;
        }
    }
'''

# Voeg toe voor de bestaande goToScreenById functie
insert_pos = content.find('function goToScreenById(id) {')
if insert_pos != -1:
    # Ga terug naar het begin van de regel
    while insert_pos > 0 and content[insert_pos-1] != '\n':
        insert_pos -= 1
    
    content = content[:insert_pos] + direct_nav_function + '\n        ' + content[insert_pos:]
    print("✅ Directe navigatie functie toegevoegd")
else:
    print("⚠️ Kon goToScreenById niet vinden")

# Update alle onclick handlers voor de nieuwe screens
replacements = [
    # Privacy scherm button
    ('onclick="goToScreenById(\'screen-financien-check\')"', 
     'onclick="goToScreenDirect(\'screen-financien-check\')"'),
    
    # Start button naar privacy
    ('onclick="goToScreenById(\'screen-privacy\')"',
     'onclick="goToScreenDirect(\'screen-privacy\')"'),
]

for old, new in replacements:
    if old in content:
        content = content.replace(old, new)
        print(f"✅ Updated: {old[:40]}...")

# Update financien check buttons
# Terug button
content = content.replace(
    'onclick="goToScreen(-1)" style="padding:12px 24px;">',
    'onclick="goToScreenDirect(\'screen-privacy\')" style="padding:12px 24px;">'
)

# Verder button - moet naar triage maar nu via directe functie
content = content.replace(
    'onclick="handleFinancienCheck()"',
    'onclick="handleFinancienCheckFixed()"'
)

# Update handleFinancienCheck functie
financien_fix = '''
    function handleFinancienCheckFixed() {
        if (state.financienCheck && state.financienCheck.roodVlag) {
            const bevestig = confirm(
                'Er zijn financiële signalen die prioriteit hebben.\\n\\n' +
                'Aanbeveling: eerst schuldhulpverlening inschakelen.\\n\\n' +
                'Wil je toch doorgaan met dit gesprek?'
            );
            if (bevestig) {
                // Gebruik de normale navigatie voor triage (die zit in config)
                const triageScreen = document.getElementById('screen-triage');
                if (triageScreen) {
                    goToScreenDirect('screen-triage');
                } else {
                    goToScreen(1); // Fallback naar eerste scherm in config
                }
            }
        } else {
            const triageScreen = document.getElementById('screen-triage');
            if (triageScreen) {
                goToScreenDirect('screen-triage');
            } else {
                goToScreen(1); // Fallback
            }
        }
    }
'''

# Voeg fixed functie toe
insert_pos = content.find('function handleFinancienCheck()')
if insert_pos != -1:
    # Zoek het einde van de originele functie
    brace_count = 0
    i = content.find('{', insert_pos)
    start = i
    i += 1
    while i < len(content):
        if content[i] == '{':
            brace_count += 1
        elif content[i] == '}':
            if brace_count == 0:
                # Einde van functie gevonden
                content = content[:i+1] + '\n' + financien_fix + content[i+1:]
                print("✅ handleFinancienCheckFixed toegevoegd")
                break
            brace_count -= 1
        i += 1

# Schrijf terug
with open(OUTPUT, 'w', encoding='utf-8') as f:
    f.write(content)

print("\n" + "="*50)
print("✅ NAVIGATIE FIX VOLTOOID")
print(f"📄 Output: {OUTPUT}")
print("\n🧪 TEST:")
print("   1. Hard refresh browser (Cmd+Shift+R)")
print("   2. Klik 'Start gesprek'")
print("   3. Privacy scherm zou moeten verschijnen")
print("")
