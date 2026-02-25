#!/usr/bin/env python3
"""
Uitgebreide dropdown: Type → Wie → Wat
RUSTIG, binnen de bestaande structuur
"""

INPUT = "positioneel.html"
OUTPUT = "positioneel.html"
BACKUP = "positioneel-BACKUP-uitgebreid-v2.html"

import shutil

print("🔧 Uitgebreide dropdown toevoegen (Type → Wie → Wat)...")

shutil.copy(INPUT, BACKUP)
print(f"✅ Backup: {BACKUP}")

with open(INPUT, 'r', encoding='utf-8') as f:
    content = f.read()

# Zoek het blok dat we net toevoegden
old_block = '''                    ${status === 'steun-wenselijk' ? `
                    <div style="background:#fefce8;padding:8px 10px;border-top:1px solid #fde68a;">
                        <div style="margin-left:42px;font-size:0.85rem;">
                            <div style="margin-bottom:6px;font-weight:600;color:#92400e;">Wie helpt hierbij?</div>
                            <select onchange="if(!state.steunDetails)state.steunDetails={};if(!state.steunDetails['${d.id}'])state.steunDetails['${d.id}']={};state.steunDetails['${d.id}'].wie=this.value;saveState();"
                                    style="width:100%;max-width:300px;padding:6px;border:1px solid #f59e0b;border-radius:6px;font-size:0.85rem;margin-bottom:8px;">
                                <option value="">-- Selecteer --</option>
                                <optgroup label="Professioneel">
                                    <option value="ambulante-ggz">Ambulante GGZ</option>
                                    <option value="wijkverpleging">Wijkverpleging</option>
                                    <option value="thuiszorg">Thuiszorg</option>
                                    <option value="maatschappelijk-werk">Maatschappelijk werk</option>
                                    <option value="budgetcoach">Budgetcoach</option>
                                </optgroup>
                                <optgroup label="Informeel">
                                    <option value="partner">Partner</option>
                                    <option value="familie">Familie</option>
                                    <option value="vrienden">Vrienden</option>
                                    <option value="buren">Buren</option>
                                </optgroup>
                                <optgroup label="Collectief">
                                    <option value="vrijwilligers">Vrijwilligers</option>
                                    <option value="buurtcentrum">Buurtcentrum</option>
                                </optgroup>
                            </select>
                            <input type="text" placeholder="Wat doet deze persoon/organisatie?"
                                onchange="if(!state.steunDetails)state.steunDetails={};if(!state.steunDetails['${d.id}'])state.steunDetails['${d.id}']={};state.steunDetails['${d.id}'].wat=this.value;saveState();"
                                style="width:100%;max-width:400px;padding:6px;border:1px solid #f59e0b;border-radius:6px;font-size:0.85rem;">
                        </div>
                    </div>` : ''}'''

# Nieuwe uitgebreide versie
new_block = '''                    ${status === 'steun-wenselijk' ? `
                    <div style="background:#fefce8;padding:10px;border-top:1px solid #fde68a;">
                        <div style="margin-left:42px;font-size:0.85rem;">
                            <div style="margin-bottom:8px;font-weight:600;color:#92400e;">Type steun:</div>
                            <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
                                <label style="flex:1;min-width:90px;padding:6px 8px;border:2px solid #e5e7eb;border-radius:6px;cursor:pointer;text-align:center;font-size:0.8rem;background:white;transition:all 0.15s;"
                                       onclick="this.style.borderColor='#3b82f6';this.style.background='#dbeafe';document.querySelectorAll('[data-type-group=\\\'${d.id}\\\']').forEach(l=>l.style.borderColor='#e5e7eb');this.querySelector('input').checked=true;toggleSteunDropdown('${d.id}','formeel');">
                                    <input type="radio" name="type-${d.id}" value="formeel" style="margin-right:4px;pointer-events:none;" data-type-group="${d.id}">
                                    🔵 Professioneel
                                </label>
                                <label style="flex:1;min-width:90px;padding:6px 8px;border:2px solid #e5e7eb;border-radius:6px;cursor:pointer;text-align:center;font-size:0.8rem;background:white;transition:all 0.15s;"
                                       onclick="this.style.borderColor='#a855f7';this.style.background='#f3e8ff';document.querySelectorAll('[data-type-group=\\\'${d.id}\\\']').forEach(l=>l.style.borderColor='#e5e7eb');this.querySelector('input').checked=true;toggleSteunDropdown('${d.id}','collectief');">
                                    <input type="radio" name="type-${d.id}" value="collectief" style="margin-right:4px;pointer-events:none;" data-type-group="${d.id}">
                                    🟣 Collectief
                                </label>
                                <label style="flex:1;min-width:90px;padding:6px 8px;border:2px solid #e5e7eb;border-radius:6px;cursor:pointer;text-align:center;font-size:0.8rem;background:white;transition:all 0.15s;"
                                       onclick="this.style.borderColor='#10b981';this.style.background='#d1fae5';document.querySelectorAll('[data-type-group=\\\'${d.id}\\\']').forEach(l=>l.style.borderColor='#e5e7eb');this.querySelector('input').checked=true;toggleSteunDropdown('${d.id}','informeel');">
                                    <input type="radio" name="type-${d.id}" value="informeel" style="margin-right:4px;pointer-events:none;" data-type-group="${d.id}">
                                    🟢 Informeel
                                </label>
                            </div>
                            
                            <div id="dropdown-${d.id}" style="display:none;">
                                <div style="margin-bottom:8px;font-weight:600;color:#92400e;">Wie helpt?</div>
                                
                                <select id="wie-formeel-${d.id}" class="wie-select-${d.id}" style="display:none;width:100%;max-width:300px;padding:6px;border:1px solid #f59e0b;border-radius:6px;font-size:0.85rem;margin-bottom:8px;"
                                        onchange="saveSteunDetail('${d.id}','formeel',this.value)">
                                    <option value="">-- Selecteer --</option>
                                    <option value="ambulante-ggz">Ambulante GGZ</option>
                                    <option value="wijkverpleging">Wijkverpleging</option>
                                    <option value="thuiszorg">Thuiszorg</option>
                                    <option value="maatschappelijk-werk">Maatschappelijk werk</option>
                                    <option value="budgetcoach">Budgetcoach</option>
                                    <option value="schuldhulp">Schuldhulpverlening</option>
                                    <option value="werkcoach">Werkcoach</option>
                                </select>
                                
                                <select id="wie-collectief-${d.id}" class="wie-select-${d.id}" style="display:none;width:100%;max-width:300px;padding:6px;border:1px solid #f59e0b;border-radius:6px;font-size:0.85rem;margin-bottom:8px;"
                                        onchange="saveSteunDetail('${d.id}','collectief',this.value)">
                                    <option value="">-- Selecteer --</option>
                                    <option value="vrijwilligers">Vrijwilligersorganisatie</option>
                                    <option value="buurtcentrum">Buurtcentrum</option>
                                    <option value="welzijn">Welzijnsorganisatie</option>
                                    <option value="kerk">Kerk/Moskee</option>
                                    <option value="sportclub">Sportvereniging</option>
                                </select>
                                
                                <select id="wie-informeel-${d.id}" class="wie-select-${d.id}" style="display:none;width:100%;max-width:300px;padding:6px;border:1px solid #f59e0b;border-radius:6px;font-size:0.85rem;margin-bottom:8px;"
                                        onchange="saveSteunDetail('${d.id}','informeel',this.value)">
                                    <option value="">-- Selecteer --</option>
                                    <option value="partner">Partner</option>
                                    <option value="kind">Kind/kinderen</option>
                                    <option value="ouder">Ouder(s)</option>
                                    <option value="familie">Andere familie</option>
                                    <option value="vriend">Vriend(in)</option>
                                    <option value="buur">Buur</option>
                                </select>
                                
                                <div style="margin-top:8px;">
                                    <div style="margin-bottom:6px;font-weight:600;color:#92400e;">Wat doet deze persoon/organisatie?</div>
                                    <input type="text" id="wat-${d.id}" placeholder="Bijv: helpt met administratie..."
                                        onchange="if(!state.steunDetails)state.steunDetails={};if(!state.steunDetails['${d.id}'])state.steunDetails['${d.id}']={};state.steunDetails['${d.id}'].wat=this.value;saveState();"
                                        style="width:100%;max-width:400px;padding:6px;border:1px solid #f59e0b;border-radius:6px;font-size:0.85rem;">
                                </div>
                            </div>
                        </div>
                    </div>` : ''}'''

# Vervang
if old_block in content:
    content = content.replace(old_block, new_block)
    print("✅ Uitgebreide dropdown toegevoegd")
else:
    print("⚠️  Kon oude blok niet vinden - misschien al aangepast?")

# Voeg JavaScript functies toe
js = '''
        
        // Toggle dropdown based on type
        function toggleSteunDropdown(domeinId, type) {
            const container = document.getElementById('dropdown-' + domeinId);
            if (!container) return;
            
            container.style.display = 'block';
            
            // Verberg alle dropdowns van dit domein
            document.querySelectorAll('.wie-select-' + domeinId).forEach(s => s.style.display = 'none');
            
            // Toon de juiste
            const select = document.getElementById('wie-' + type + '-' + domeinId);
            if (select) select.style.display = 'block';
            
            // Bewaar type
            if (!state.steunDetails) state.steunDetails = {};
            if (!state.steunDetails[domeinId]) state.steunDetails[domeinId] = {};
            state.steunDetails[domeinId].type = type;
            saveState();
        }
        
        function saveSteunDetail(domeinId, type, wie) {
            if (!state.steunDetails) state.steunDetails = {};
            if (!state.steunDetails[domeinId]) state.steunDetails[domeinId] = {};
            state.steunDetails[domeinId].type = type;
            state.steunDetails[domeinId].wie = wie;
            saveState();
        }
'''

script_end = content.rfind('</script>')
if script_end != -1:
    content = content[:script_end] + '\n' + js + '\n    ' + content[script_end:]
    print("✅ JavaScript functies toegevoegd")

# Schrijf
with open(OUTPUT, 'w', encoding='utf-8') as f:
    f.write(content)

print("\n" + "="*60)
print("✅ UITGEBREIDE DROPDOWN KLAAR!")
print(f"\n📄 Output: {OUTPUT}")
print(f"📦 Backup: {BACKUP}")

print("\n🧪 TEST:")
print("   1. Refresh (Cmd+Shift+R)")
print("   2. Bij domein: klik '🟡 Steun aanwezig'")
print("   3. Zie je 3 knoppen: Professioneel/Collectief/Informeel?")
print("   4. Klik op een type → Verschijnt dropdown?")
print("   5. Selecteer iets → Verschijnt 'Wat doet...' veld?")
print("")
