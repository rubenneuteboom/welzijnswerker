#!/usr/bin/env python3
"""
Verbeterde dropdown: Type (Pro/Col/Inf) + Wie + Rol
"""

INPUT = "positioneel.html"
OUTPUT = "positioneel.html"
BACKUP = "positioneel-BACKUP-uitgebreid.html"

import shutil

print("🔧 Uitgebreide dropdown: Type + Wie + Rol...")

shutil.copy(INPUT, BACKUP)
print(f"✅ Backup: {BACKUP}")

with open(INPUT, 'r', encoding='utf-8') as f:
    content = f.read()

# Zoek de bestaande template en vervang die
template_start = content.find('<!-- TEMPLATE voor domein dropdown')
template_end = content.find('</template>', template_start) + len('</template>')

if template_start != -1 and template_end > template_start:
    # Vervang de oude template met een uitgebreidere
    new_template = '''<!-- TEMPLATE voor domein dropdown (wordt gekopieerd per domein) -->
                    <template id="domein-dropdown-template">
                        <div class="domein-steun-dropdown">
                            <label style="font-size:0.85rem;margin-bottom:8px;display:block;">
                                <strong>Type steun:</strong>
                            </label>
                            <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
                                <label style="flex:1;min-width:100px;padding:8px;border:2px solid #e5e7eb;border-radius:6px;cursor:pointer;text-align:center;font-size:0.85rem;background:white;">
                                    <input type="radio" name="type-X" value="formeel" style="margin-right:4px;" onchange="updateDomeinSteunType(this)">
                                    🔵 Professioneel
                                </label>
                                <label style="flex:1;min-width:100px;padding:8px;border:2px solid #e5e7eb;border-radius:6px;cursor:pointer;text-align:center;font-size:0.85rem;background:white;">
                                    <input type="radio" name="type-X" value="collectief" style="margin-right:4px;" onchange="updateDomeinSteunType(this)">
                                    🟣 Collectief
                                </label>
                                <label style="flex:1;min-width:100px;padding:8px;border:2px solid #e5e7eb;border-radius:6px;cursor:pointer;text-align:center;font-size:0.85rem;background:white;">
                                    <input type="radio" name="type-X" value="informeel" style="margin-right:4px;" onchange="updateDomeinSteunType(this)">
                                    🟢 Informeel
                                </label>
                            </div>
                            
                            <div class="type-options" style="display:none;">
                                <label style="font-size:0.85rem;margin-bottom:6px;display:block;"><strong>Wie helpt?</strong></label>
                                
                                <!-- Professioneel opties -->
                                <select class="wie-select wie-formeel" style="width:100%;padding:8px;border:1px solid #f59e0b;border-radius:6px;font-size:0.85rem;background:white;margin-bottom:8px;display:none;" onchange="saveDomeinSteun(this)">
                                    <option value="">-- Selecteer --</option>
                                    <option value="ambulante-ggz">Ambulante GGZ</option>
                                    <option value="wijkverpleging">Wijkverpleging</option>
                                    <option value="thuiszorg">Thuiszorg</option>
                                    <option value="maatschappelijk-werk">Maatschappelijk werk</option>
                                    <option value="sociale-wijkteam">Sociaal wijkteam</option>
                                    <option value="budgetcoach">Budgetcoach</option>
                                    <option value="schuldhulpverlening">Schuldhulpverlening</option>
                                    <option value="werkcoach">Werkcoach</option>
                                    <option value="jobcoach">Jobcoach</option>
                                    <option value="huisarts">Huisarts</option>
                                </select>
                                
                                <!-- Collectief opties -->
                                <select class="wie-select wie-collectief" style="width:100%;padding:8px;border:1px solid #f59e0b;border-radius:6px;font-size:0.85rem;background:white;margin-bottom:8px;display:none;" onchange="saveDomeinSteun(this)">
                                    <option value="">-- Selecteer --</option>
                                    <option value="vrijwilligers">Vrijwilligersorganisatie</option>
                                    <option value="buurtcentrum">Buurtcentrum / Wijkcentrum</option>
                                    <option value="welzijnsorganisatie">Welzijnsorganisatie</option>
                                    <option value="kerk">Kerk / Moskee / Synagoge</option>
                                    <option value="sportclub">Sportvereniging</option>
                                    <option value="belangenvereniging">Belangenvereniging</option>
                                    <option value="zelfhulpgroep">Zelfhulpgroep</option>
                                </select>
                                
                                <!-- Informeel opties -->
                                <select class="wie-select wie-informeel" style="width:100%;padding:8px;border:1px solid #f59e0b;border-radius:6px;font-size:0.85rem;background:white;margin-bottom:8px;display:none;" onchange="saveDomeinSteun(this)">
                                    <option value="">-- Selecteer --</option>
                                    <option value="partner">Partner / echtgenoot</option>
                                    <option value="kind">Kind / kinderen</option>
                                    <option value="ouder">Ouder(s)</option>
                                    <option value="broer-zus">Broer / zus</option>
                                    <option value="andere-familie">Andere familie</option>
                                    <option value="vriend">Vriend(in)</option>
                                    <option value="buur">Buur / buren</option>
                                    <option value="bekende">Bekende</option>
                                </select>
                                
                                <label style="font-size:0.85rem;margin-bottom:6px;display:block;margin-top:8px;"><strong>Wat doet deze persoon/organisatie?</strong></label>
                                <input type="text" class="rol-input" placeholder="Bijv: Helpt met administratie, boodschappen doen, gezelschap..." 
                                       style="width:100%;padding:8px;border:1px solid #f59e0b;border-radius:6px;font-size:0.85rem;"
                                       onchange="saveDomeinSteun(this)">
                            </div>
                        </div>
                    </template>'''
    
    content = content[:template_start] + new_template + content[template_end:]
    print("✅ Template vervangen met uitgebreide versie")
else:
    print("⚠️  Kon template niet vinden")

# JavaScript functie toevoegen
js_update = '''
        
        function updateDomeinSteunType(radio) {
            const dropdown = radio.closest('.domein-steun-dropdown');
            if (!dropdown) return;
            
            const typeOptions = dropdown.querySelector('.type-options');
            const selects = dropdown.querySelectorAll('.wie-select');
            
            // Toon de type-options div
            typeOptions.style.display = 'block';
            
            // Verberg alle selects
            selects.forEach(s => s.style.display = 'none');
            
            // Toon de juiste select
            const type = radio.value;
            const relevantSelect = dropdown.querySelector('.wie-' + type);
            if (relevantSelect) {
                relevantSelect.style.display = 'block';
            }
            
            // Bewaar type
            const domeinId = dropdown.dataset.domein;
            if (!state.domeinSteun) state.domeinSteun = {};
            if (!state.domeinSteun[domeinId]) state.domeinSteun[domeinId] = {};
            state.domeinSteun[domeinId].type = type;
            saveState();
            
            console.log('Type geselecteerd:', domeinId, type);
        }
'''

# Zoek saveDomeinSteun functie en vervang die
save_function_start = content.find('function saveDomeinSteun(')
if save_function_start != -1:
    # Zoek het einde van de functie
    brace_count = 0
    i = content.find('{', save_function_start)
    start_brace = i
    i += 1
    while i < len(content):
        if content[i] == '{':
            brace_count += 1
        elif content[i] == '}':
            if brace_count == 0:
                # Einde gevonden
                # Vervang de hele functie
                new_save_function = '''function saveDomeinSteun(element) {
            const dropdown = element.closest('.domein-steun-dropdown');
            if (!dropdown) return;
            
            const domeinId = dropdown.dataset.domein;
            const select = dropdown.querySelector('.wie-select:not([style*="display: none"])');
            const rolInput = dropdown.querySelector('.rol-input');
            
            if (!state.domeinSteun) state.domeinSteun = {};
            if (!state.domeinSteun[domeinId]) state.domeinSteun[domeinId] = {};
            
            if (select && select.value) {
                state.domeinSteun[domeinId].wie = select.value;
            }
            if (rolInput && rolInput.value) {
                state.domeinSteun[domeinId].rol = rolInput.value;
            }
            
            saveState();
            console.log('Domein steun opgeslagen:', domeinId, state.domeinSteun[domeinId]);
        }'''
                
                content = content[:save_function_start] + new_save_function + content[i+1:]
                print("✅ saveDomeinSteun functie vervangen")
                break
            brace_count -= 1
        i += 1

# Voeg updateDomeinSteunType toe
script_end = content.rfind('</script>')
if script_end != -1:
    content = content[:script_end] + '\n' + js_update + '\n    ' + content[script_end:]
    print("✅ updateDomeinSteunType toegevoegd")

# Update injectDomeinDropdowns om radio names uniek te maken
inject_update = content.find('const clone = template.content.cloneNode(true);')
if inject_update != -1:
    # Zoek de regels na deze
    next_line = content.find('\n', inject_update)
    insert_code = '''
                
                // Maak radio names uniek per domein
                const radios = clone.querySelectorAll('input[type="radio"]');
                radios.forEach(r => {
                    r.name = 'type-' + domeinId;
                });
'''
    content = content[:next_line] + insert_code + content[next_line:]
    print("✅ Radio name uniqueness toegevoegd")

# Schrijf
with open(OUTPUT, 'w', encoding='utf-8') as f:
    f.write(content)

print("\n" + "="*60)
print("✅ UITGEBREIDE DROPDOWN KLAAR!")
print(f"\n📄 Output: {OUTPUT}")
print(f"📦 Backup: {BACKUP}")

print("\n🧪 TEST:")
print("   1. Refresh (Cmd+Shift+R)")
print("   2. Bij een domein: klik '🟡 Steun aanwezig'")
print("   3. Zie je: Type steun (Pro/Col/Inf)?")
print("   4. Klik bijv. 'Professioneel'")
print("   5. Verschijnt dropdown met professionele opties?")
print("   6. Verschijnt veld 'Wat doet deze persoon?'")
print("")
