#!/usr/bin/env python3
"""
Voeg ROL dropdown toe naast WIE dropdown
"""

INPUT = "positioneel.html"
OUTPUT = "positioneel.html"
BACKUP = "positioneel-BACKUP-rol-dropdown.html"

import shutil

print("🔧 Rol dropdown toevoegen...")

shutil.copy(INPUT, BACKUP)
print(f"✅ Backup: {BACKUP}")

with open(INPUT, 'r', encoding='utf-8') as f:
    content = f.read()

# Zoek het stuk met "Wat doet deze persoon/organisatie?"
old_wat_section = '''                                <div style="margin-top:8px;">
                                    <div style="margin-bottom:6px;font-weight:600;color:#92400e;">Wat doet deze persoon/organisatie?</div>
                                    <input type="text" id="wat-${d.id}" placeholder="Bijv: helpt met administratie..."
                                        onchange="if(!state.steunDetails)state.steunDetails={};if(!state.steunDetails['${d.id}'])state.steunDetails['${d.id}']={};state.steunDetails['${d.id}'].wat=this.value;saveState();"
                                        style="width:100%;max-width:400px;padding:6px;border:1px solid #f59e0b;border-radius:6px;font-size:0.85rem;">
                                </div>'''

# Nieuwe versie met ROL dropdown
new_rol_section = '''                                <div style="margin-top:8px;">
                                    <div style="margin-bottom:6px;font-weight:600;color:#92400e;">Welke rol?</div>
                                    <select id="rol-${d.id}" 
                                        onchange="if(!state.steunDetails)state.steunDetails={};if(!state.steunDetails['${d.id}'])state.steunDetails['${d.id}']={};state.steunDetails['${d.id}'].rol=this.value;saveState();"
                                        style="width:100%;max-width:400px;padding:6px;border:1px solid #f59e0b;border-radius:6px;font-size:0.85rem;margin-bottom:8px;">
                                        <option value="">-- Selecteer rol --</option>
                                        <optgroup label="Praktische hulp">
                                            <option value="administratie">Helpt met administratie</option>
                                            <option value="boodschappen">Doet boodschappen</option>
                                            <option value="vervoer">Verzorgt vervoer</option>
                                            <option value="huishouden">Helpt met huishouden</option>
                                            <option value="koken">Helpt met koken</option>
                                        </optgroup>
                                        <optgroup label="Sociale steun">
                                            <option value="gezelschap">Biedt gezelschap</option>
                                            <option value="luisterend-oor">Luisterend oor</option>
                                            <option value="activiteiten">Doet samen activiteiten</option>
                                            <option value="uitje">Gaat samen op uitje</option>
                                        </optgroup>
                                        <optgroup label="Begeleiding">
                                            <option value="afspraken">Begeleidt naar afspraken</option>
                                            <option value="budgetbeheer">Helpt met budgetbeheer</option>
                                            <option value="formulieren">Helpt met formulieren</option>
                                            <option value="contact-instanties">Contact met instanties</option>
                                        </optgroup>
                                        <optgroup label="Behandeling/begeleiding">
                                            <option value="gesprekken">Voert gesprekken</option>
                                            <option value="medicatie">Begeleidt medicatie</option>
                                            <option value="dagstructuur">Helpt met dagstructuur</option>
                                            <option value="vaardigheden">Traint vaardigheden</option>
                                        </optgroup>
                                        <optgroup label="Anders">
                                            <option value="anders">Anders (zie notitie)</option>
                                        </optgroup>
                                    </select>
                                    
                                    <div id="rol-anders-${d.id}" style="display:none;">
                                        <input type="text" placeholder="Beschrijf de rol..."
                                            onchange="if(!state.steunDetails)state.steunDetails={};if(!state.steunDetails['${d.id}'])state.steunDetails['${d.id}']={};state.steunDetails['${d.id}'].rolAnders=this.value;saveState();"
                                            style="width:100%;max-width:400px;padding:6px;border:1px solid #f59e0b;border-radius:6px;font-size:0.85rem;">
                                    </div>
                                </div>'''

# Vervang
if old_wat_section in content:
    content = content.replace(old_wat_section, new_rol_section)
    print("✅ Wat tekstveld vervangen door Rol dropdown")
else:
    print("⚠️  Kon 'Wat doet...' sectie niet vinden")

# Voeg JavaScript toe voor "Anders" optie
js = '''
        
        // Toon/verberg "Anders" tekstveld bij rol
        document.addEventListener('change', function(e) {
            if (e.target.id && e.target.id.startsWith('rol-')) {
                const domeinId = e.target.id.replace('rol-', '');
                const andersDiv = document.getElementById('rol-anders-' + domeinId);
                if (andersDiv) {
                    andersDiv.style.display = (e.target.value === 'anders') ? 'block' : 'none';
                }
            }
        });
'''

script_end = content.rfind('</script>')
if script_end != -1:
    content = content[:script_end] + '\n' + js + '\n    ' + content[script_end:]
    print("✅ JavaScript toegevoegd")

# Schrijf
with open(OUTPUT, 'w', encoding='utf-8') as f:
    f.write(content)

print("\n✅ KLAAR!")
print("\n🧪 TEST:")
print("   1. Refresh (Cmd+Shift+R)")
print("   2. Bij domein: klik 'Steun aanwezig'")
print("   3. Kies type + wie")
print("   4. Zie je nu een 'Welke rol?' dropdown?")
print("")
