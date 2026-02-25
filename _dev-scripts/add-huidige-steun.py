#!/usr/bin/env python3
"""
RPA v4.0 - Toevoegen "Huidige Steun" scherm
Met 3-knops systeem: Zelfstandig / Steun aanwezig / Steun nodig
"""

import re

INPUT = "positioneel.html"
OUTPUT = "positioneel.html"
BACKUP = "positioneel-BACKUP-voor-huidige-steun.html"

import shutil

print("🔧 Toevoegen 'Huidige Steun' scherm...")

# Backup
shutil.copy(INPUT, BACKUP)
print(f"✅ Backup: {BACKUP}")

with open(INPUT, 'r', encoding='utf-8') as f:
    content = f.read()

# Nieuw scherm toevoegen NA financiën check, VOOR hulpvraag/triage
huidige_steun_screen = '''
    <!-- ========================================
         RPA v4.0: HUIDIGE STEUN SCHERM
         ======================================== -->
    <div class="screen" id="screen-huidige-steun" style="display:none;">
        <div class="card">
            <h2 style="color:#374151;text-align:center;margin-bottom:8px;font-size:1.6rem;">
                💼 Huidige ondersteuning
            </h2>
            
            <p style="text-align:center;color:#6b7280;margin-bottom:32px;font-size:1rem;">
                Voordat we verder gaan: loopt er nu al ondersteuning?
            </p>
            
            <!-- 3-knops keuze (zelfde stijl als triage) -->
            <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-bottom:32px;">
                <button onclick="selectHuidigeSteun('zelfstandig')" 
                        id="btn-steun-zelfstandig"
                        style="flex:1;min-width:150px;max-width:200px;padding:20px;border:3px solid #e5e7eb;border-radius:12px;background:white;cursor:pointer;transition:all 0.2s;font-size:1rem;font-weight:600;color:#374151;">
                    <div style="font-size:2rem;margin-bottom:8px;">🟢</div>
                    Zelfstandig
                </button>
                
                <button onclick="selectHuidigeSteun('aanwezig')" 
                        id="btn-steun-aanwezig"
                        style="flex:1;min-width:150px;max-width:200px;padding:20px;border:3px solid #e5e7eb;border-radius:12px;background:white;cursor:pointer;transition:all 0.2s;font-size:1rem;font-weight:600;color:#374151;">
                    <div style="font-size:2rem;margin-bottom:8px;">🟡</div>
                    Steun aanwezig
                </button>
                
                <button onclick="selectHuidigeSteun('nodig')" 
                        id="btn-steun-nodig"
                        style="flex:1;min-width:150px;max-width:200px;padding:20px;border:3px solid #e5e7eb;border-radius:12px;background:white;cursor:pointer;transition:all 0.2s;font-size:1rem;font-weight:600;color:#374151;">
                    <div style="font-size:2rem;margin-bottom:8px;">🔴</div>
                    Steun nodig
                </button>
            </div>
            
            <!-- Dropdown: verschijnt alleen bij "Steun aanwezig" -->
            <div id="steun-aanwezig-detail" style="display:none;background:#fef3c7;border:2px solid #f59e0b;border-radius:12px;padding:20px;margin-bottom:24px;">
                <label style="font-weight:700;color:#92400e;display:block;margin-bottom:12px;font-size:1rem;">
                    Wie of wat biedt nu ondersteuning?
                </label>
                
                <select id="steun-type" onchange="saveHuidigeSteunType()" 
                        style="width:100%;padding:12px;border:2px solid #f59e0b;border-radius:8px;font-size:1rem;background:white;">
                    <option value="">-- Selecteer --</option>
                    <optgroup label="Professionele hulp">
                        <option value="ambulante-ggz">Ambulante GGZ</option>
                        <option value="wijkverpleging">Wijkverpleging</option>
                        <option value="thuiszorg">Thuiszorg</option>
                        <option value="maatschappelijk-werk">Maatschappelijk werk</option>
                        <option value="sociale-wijkteam">Sociaal wijkteam</option>
                        <option value="verslavingszorg">Verslavingszorg</option>
                        <option value="jeugdzorg">Jeugdzorg</option>
                        <option value="woonbegeleiding">Woonbegeleiding</option>
                    </optgroup>
                    <optgroup label="Informele steun">
                        <option value="partner">Partner</option>
                        <option value="familie">Familie (ouders, kinderen, broers/zussen)</option>
                        <option value="mantelzorger">Mantelzorger</option>
                        <option value="vrienden">Vrienden</option>
                        <option value="buren">Buren</option>
                    </optgroup>
                    <optgroup label="Collectieve voorzieningen">
                        <option value="vrijwilligers">Vrijwilligersorganisatie</option>
                        <option value="buurtcentrum">Buurtcentrum / Welzijn</option>
                        <option value="kerk">Kerk / Geloofsgemeenschap</option>
                        <option value="sportclub">Sportvereniging</option>
                    </optgroup>
                    <option value="anders">Anders</option>
                </select>
                
                <div id="steun-anders-veld" style="display:none;margin-top:12px;">
                    <input type="text" id="steun-anders-tekst" placeholder="Omschrijf de ondersteuning..." 
                           style="width:100%;padding:12px;border:2px solid #f59e0b;border-radius:8px;font-size:1rem;">
                </div>
                
                <p style="font-size:0.85rem;color:#92400e;margin-top:12px;line-height:1.6;">
                    💡 Deze informatie helpt om te zien wat er al loopt en waar eventueel nog gaten zitten.
                </p>
            </div>
            
            <div style="text-align:center;margin-top:24px;display:flex;gap:16px;justify-content:center;">
                <button class="btn" onclick="goToScreenDirect('screen-financien-check')" style="padding:12px 24px;">
                    ← Terug
                </button>
                <button class="btn btn-primary" id="btn-huidige-steun-verder" onclick="naHuidigeSteun()" 
                        style="padding:12px 32px;" disabled>
                    Verder →
                </button>
            </div>
        </div>
    </div>
'''

# Voeg toe voor hulpvraag/triage
marker = 'id="screen-hulpvraag"'
pos = content.find(marker)

if pos == -1:
    marker = 'id="screen-triage"'
    pos = content.find(marker)

if pos != -1:
    # Ga terug naar begin van regel
    while pos > 0 and content[pos-1] != '\n':
        pos -= 1
    
    content = content[:pos] + huidige_steun_screen + '\n    ' + content[pos:]
    print("✅ Huidige Steun scherm toegevoegd")
else:
    print("⚠️  Kon geen scherm vinden om voor in te voegen")

# JavaScript functies toevoegen
js_additions = '''
        
        // ========================================
        // HUIDIGE STEUN SELECTIE
        // ========================================
        
        function selectHuidigeSteun(keuze) {
            // Reset alle buttons
            ['zelfstandig', 'aanwezig', 'nodig'].forEach(k => {
                const btn = document.getElementById('btn-steun-' + k);
                if (btn) {
                    btn.style.border = '3px solid #e5e7eb';
                    btn.style.background = 'white';
                }
            });
            
            // Highlight geselecteerde button
            const selectedBtn = document.getElementById('btn-steun-' + keuze);
            if (selectedBtn) {
                if (keuze === 'zelfstandig') {
                    selectedBtn.style.border = '3px solid #10b981';
                    selectedBtn.style.background = '#d1fae5';
                } else if (keuze === 'aanwezig') {
                    selectedBtn.style.border = '3px solid #f59e0b';
                    selectedBtn.style.background = '#fef3c7';
                } else if (keuze === 'nodig') {
                    selectedBtn.style.border = '3px solid #dc2626';
                    selectedBtn.style.background = '#fee2e2';
                }
            }
            
            // Toon/verberg dropdown
            const detailDiv = document.getElementById('steun-aanwezig-detail');
            if (keuze === 'aanwezig') {
                detailDiv.style.display = 'block';
                // Verder button pas enabled als dropdown is ingevuld
                document.getElementById('btn-huidige-steun-verder').disabled = true;
            } else {
                detailDiv.style.display = 'none';
                // Verder button direct enabled
                document.getElementById('btn-huidige-steun-verder').disabled = false;
            }
            
            // Bewaar keuze
            if (!state.batch1) state.batch1 = {};
            state.batch1.huidigeSteun = keuze;
            saveState();
        }
        
        function saveHuidigeSteunType() {
            const select = document.getElementById('steun-type');
            const andersVeld = document.getElementById('steun-anders-veld');
            
            if (select.value === 'anders') {
                andersVeld.style.display = 'block';
            } else {
                andersVeld.style.display = 'none';
            }
            
            // Enable verder button als er iets is gekozen
            if (select.value) {
                document.getElementById('btn-huidige-steun-verder').disabled = false;
            }
            
            // Bewaar
            if (!state.batch1) state.batch1 = {};
            state.batch1.huidigeSteunType = select.value;
            
            const andersTekst = document.getElementById('steun-anders-tekst');
            if (andersTekst && andersTekst.value) {
                state.batch1.huidigeSteunAnders = andersTekst.value;
            }
            
            saveState();
        }
        
        function naHuidigeSteun() {
            // Ga door naar hulpvraag of triage
            const hulpvraag = document.getElementById('screen-hulpvraag');
            const triage = document.getElementById('screen-triage');
            
            if (hulpvraag) {
                goToScreenDirect('screen-hulpvraag');
            } else if (triage) {
                goToScreenDirect('screen-triage');
            } else {
                goToScreen(1); // Fallback
            }
        }
'''

script_end = content.rfind('</script>')
if script_end != -1:
    content = content[:script_end] + js_additions + '\n    ' + content[script_end:]
    print("✅ JavaScript toegevoegd")

# Update financiën verder button om naar huidige-steun te gaan
content = content.replace(
    "function handleFinancienCheckSimple() {",
    "function handleFinancienCheckSimple() {\n" +
    "            // Eerst naar huidige steun scherm\n" +
    "            const huidigeSteunScreen = document.getElementById('screen-huidige-steun');\n" +
    "            if (huidigeSteunScreen) {\n" +
    "                // Check financiën rode vlag alleen voor waarschuwing\n"
)

# Vervang de goToScreenDirect in handleFinancienCheckSimple
content = content.replace(
    "if (hulpvraag) {\n                goToScreenDirect('screen-hulpvraag');",
    "if (huidigeSteunScreen) {\n                    goToScreenDirect('screen-huidige-steun');\n                    return;\n                }\n            }\n            \n            // Fallback: direct naar hulpvraag/triage\n            if (hulpvraag) {\n                goToScreenDirect('screen-hulpvraag');"
)

print("✅ Flow aangepast: Financiën → Huidige Steun → Hulpvraag/Triage")

# Schrijf
with open(OUTPUT, 'w', encoding='utf-8') as f:
    f.write(content)

print("\n" + "="*60)
print("✅ HUIDIGE STEUN SCHERM TOEGEVOEGD!")
print(f"\n📄 Output: {OUTPUT}")
print(f"📦 Backup: {BACKUP}")

print("\n🎯 NIEUWE FLOW:")
print("   Start → Privacy → Financiën → **Huidige Steun** → Hulpvraag/Triage")

print("\n🧪 TEST:")
print("   1. Hard refresh (Cmd+Shift+R)")
print("   2. Klik door privacy & financiën")
print("   3. Zie je '💼 Huidige ondersteuning' scherm?")
print("   4. Klik op knoppen → Highlight werkt?")
print("   5. Klik 'Steun aanwezig' → Dropdown verschijnt?")
print("   6. Selecteer iets → 'Verder' button enabled?")
print("")
