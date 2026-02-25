#!/usr/bin/env python3
"""
SIMPEL: Voeg dropdown toe bij "Steun aanwezig" (net als notitie bij "Steun nodig")
"""

INPUT = "positioneel.html"
OUTPUT = "positioneel.html"
BACKUP = "positioneel-BACKUP-simpel.html"

import shutil

print("🔧 Simpele dropdown toevoegen...")

shutil.copy(INPUT, BACKUP)
print(f"✅ Backup: {BACKUP}")

with open(INPUT, 'r', encoding='utf-8') as f:
    content = f.read()

# Zoek het stuk waar de notitie bij "steun-nodig" wordt toegevoegd
# Dit is binnen renderStoplichtGrid functie

old_notitie_block = '''                    ${status === 'steun-nodig' ? `
                    <div style="background:#fff5f5;padding:6px 10px 8px 52px;border-top:1px solid #fecaca;">
                        <input type="text" placeholder="Korte toelichting (optioneel)..."
                            value="${notitie.replace(/"/g,'&quot;')}"
                            onchange="if(!state.triageNotities)state.triageNotities={};state.triageNotities['${d.id}']=this.value;saveState();"
                            style="width:100%;max-width:400px;padding:5px 8px;border:1px solid #fca5a5;border-radius:6px;font-size:0.8rem;background:white;box-sizing:border-box;">
                    </div>` : ''}'''

# Voeg een extra blok toe voor "steun-wenselijk"
new_blocks = '''                    ${status === 'steun-nodig' ? `
                    <div style="background:#fff5f5;padding:6px 10px 8px 52px;border-top:1px solid #fecaca;">
                        <input type="text" placeholder="Korte toelichting (optioneel)..."
                            value="${notitie.replace(/"/g,'&quot;')}"
                            onchange="if(!state.triageNotities)state.triageNotities={};state.triageNotities['${d.id}']=this.value;saveState();"
                            style="width:100%;max-width:400px;padding:5px 8px;border:1px solid #fca5a5;border-radius:6px;font-size:0.8rem;background:white;box-sizing:border-box;">
                    </div>` : ''}
                    ${status === 'steun-wenselijk' ? `
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

# Vervang
if old_notitie_block in content:
    content = content.replace(old_notitie_block, new_blocks)
    print("✅ Dropdown toegevoegd bij 'Steun aanwezig'")
else:
    print("⚠️  Kon notitie blok niet vinden")

# Schrijf
with open(OUTPUT, 'w', encoding='utf-8') as f:
    f.write(content)

print("\n✅ KLAAR!")
print("\n🧪 TEST:")
print("   1. Refresh (Cmd+Shift+R)")
print("   2. Bij een domein: klik '🟡 Steun aanwezig'")
print("   3. Verschijnt er ONDER dat domein een dropdown?")
print("")
