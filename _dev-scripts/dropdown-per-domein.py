#!/usr/bin/env python3
"""
Voeg dropdown toe bij elk domein als "Steun aanwezig" wordt aangeklikt
"""

INPUT = "positioneel.html"
OUTPUT = "positioneel.html"
BACKUP = "positioneel-BACKUP-dropdown.html"

import shutil

print("🔧 Dropdown per domein toevoegen...")

shutil.copy(INPUT, BACKUP)
print(f"✅ Backup: {BACKUP}")

with open(INPUT, 'r', encoding='utf-8') as f:
    content = f.read()

# ============================================
# 1. CSS TOEVOEGEN voor domein-dropdown
# ============================================
print("\n🎨 CSS toevoegen...")

css = '''
        /* Dropdown per domein (verschijnt bij "Steun aanwezig") */
        .domein-steun-dropdown {
            background: #fef3c7;
            border: 2px solid #f59e0b;
            border-radius: 8px;
            padding: 12px;
            margin-top: 8px;
            display: none;
        }
        
        .domein-steun-dropdown select {
            width: 100%;
            padding: 8px;
            border: 1px solid #f59e0b;
            border-radius: 6px;
            font-size: 0.9rem;
            background: white;
        }
        
        .domein-steun-dropdown label {
            display: block;
            font-weight: 600;
            color: #92400e;
            margin-bottom: 6px;
            font-size: 0.85rem;
        }
'''

style_end = content.find('</style>')
if style_end != -1:
    content = content[:style_end] + '\n' + css + '\n    ' + content[style_end:]
    print("   ✅ CSS toegevoegd")

# ============================================
# 2. JAVASCRIPT AANPASSEN
# ============================================
print("\n💻 JavaScript toevoegen...")

# We moeten de bestaande stoplicht-selectie functie aanpassen
# Zoek de renderStoplichtGrid functie of waar de stoplicht buttons worden gemaakt

js = '''
        
        // ========================================
        // DROPDOWN PER DOMEIN (v4.0)
        // ========================================
        
        function toggleDomeinDropdown(domeinId, status) {
            const dropdown = document.getElementById('dropdown-' + domeinId);
            if (!dropdown) return;
            
            if (status === 'aanwezig') {
                dropdown.style.display = 'block';
            } else {
                dropdown.style.display = 'none';
            }
        }
        
        function saveDomeinSteun(domeinId) {
            const select = document.getElementById('steun-select-' + domeinId);
            if (!select) return;
            
            if (!state.domeinSteun) state.domeinSteun = {};
            state.domeinSteun[domeinId] = select.value;
            saveState();
            
            console.log('Domein steun opgeslagen:', domeinId, select.value);
        }
'''

script_end = content.rfind('</script>')
if script_end != -1:
    content = content[:script_end] + '\n' + js + '\n    ' + content[script_end:]
    print("   ✅ JavaScript toegevoegd")

# ============================================
# 3. AANPASSEN renderStoplichtGrid FUNCTIE
# ============================================
print("\n🔧 renderStoplichtGrid aanpassen...")

# Zoek de functie
render_start = content.find('function renderStoplichtGrid()')
if render_start != -1:
    # Dit is complex - we moeten binnen de functie de HTML aanpassen
    # Laten we een simpelere aanpak doen: voeg de dropdown toe in de HTML die gegenereerd wordt
    
    # Zoek waar de stoplicht buttons worden gemaakt
    # Dit is waarschijnlijk dynamisch gegenereerd
    # We moeten de template aanpassen
    
    # Zoek naar de plaats waar de domein-row wordt gemaakt
    # Meestal iets met: innerHTML of appendChild
    
    # Alternatief: pas de generateDomeinRow functie aan als die bestaat
    
    # Voor nu: voeg een note toe dat we dit handmatig moeten doen
    print("   ⚠️  renderStoplichtGrid is dynamisch - handmatige aanpassing vereist")
    print("   → We voegen een wrapper functie toe")

# Voeg een wrapper toe voor de stoplicht klik
wrapper_js = '''
        
        // Wrapper voor stoplicht klik (onderschept "aanwezig" klik)
        const originalSelectTriageStatus = window.selectTriageStatus;
        window.selectTriageStatus = function(domeinId, status) {
            // Roep originele functie aan
            if (originalSelectTriageStatus) {
                originalSelectTriageStatus(domeinId, status);
            }
            
            // Toggle dropdown bij "aanwezig"
            toggleDomeinDropdown(domeinId, status);
        };
'''

script_end = content.rfind('</script>')
if script_end != -1:
    content = content[:script_end] + '\n' + wrapper_js + '\n    ' + content[script_end:]
    print("   ✅ Wrapper functie toegevoegd")

# ============================================
# 4. TEMPLATE VOOR DROPDOWN TOEVOEGEN
# ============================================
print("\n📝 Dropdown template toevoegen...")

# We moeten dit in de HTML injecteren waar de stoplicht grid wordt gegenereerd
# Zoek een plek in de triage screen waar we een template kunnen toevoegen

triage_screen = content.find('id="screen-triage"')
if triage_screen != -1:
    # Zoek het einde van stoplichtGrid div
    grid_end = content.find('<!-- Gevuld door renderStoplichtGrid() -->', triage_screen)
    
    if grid_end != -1:
        # Voeg template toe NA de grid
        template = '''
                    
                    <!-- TEMPLATE voor domein dropdown (wordt gekopieerd per domein) -->
                    <template id="domein-dropdown-template">
                        <div class="domein-steun-dropdown">
                            <label>Wie helpt hierbij?</label>
                            <select onchange="saveDomeinSteun(this.closest('.domein-steun-dropdown').dataset.domein)">
                                <option value="">-- Selecteer --</option>
                                <optgroup label="Professioneel">
                                    <option value="ambulante-ggz">Ambulante GGZ</option>
                                    <option value="wijkverpleging">Wijkverpleging</option>
                                    <option value="thuiszorg">Thuiszorg</option>
                                    <option value="maatschappelijk-werk">Maatschappelijk werk</option>
                                    <option value="sociale-wijkteam">Sociaal wijkteam</option>
                                    <option value="budgetcoach">Budgetcoach</option>
                                    <option value="schuldhulpverlening">Schuldhulpverlening</option>
                                </optgroup>
                                <optgroup label="Informeel">
                                    <option value="partner">Partner</option>
                                    <option value="familie">Familie/kinderen</option>
                                    <option value="ouders">Ouders</option>
                                    <option value="mantelzorger">Mantelzorger</option>
                                    <option value="vrienden">Vrienden</option>
                                    <option value="buren">Buren</option>
                                </optgroup>
                                <optgroup label="Collectief">
                                    <option value="vrijwilligers">Vrijwilligersorganisatie</option>
                                    <option value="buurtcentrum">Buurtcentrum</option>
                                    <option value="kerk">Kerk/moskee</option>
                                </optgroup>
                                <option value="anders">Anders</option>
                            </select>
                        </div>
                    </template>
'''
        
        insert_pos = grid_end + len('<!-- Gevuld door renderStoplichtGrid() -->')
        content = content[:insert_pos] + template + content[insert_pos:]
        print("   ✅ Dropdown template toegevoegd")

# ============================================
# 5. INJECTIE CODE VOOR DYNAMISCHE RENDERING
# ============================================
print("\n🔨 Dynamische injectie code toevoegen...")

inject_js = '''
        
        // Injecteer dropdowns in bestaande domein rows
        function injectDomeinDropdowns() {
            const template = document.getElementById('domein-dropdown-template');
            if (!template) {
                console.warn('Dropdown template niet gevonden');
                return;
            }
            
            // Voor elk domein, voeg dropdown toe
            const domeinen = [
                'financien', 'dagbesteding', 'huisvesting', 'huiselijke-relaties',
                'geestelijke-gezondheid', 'lichamelijke-gezondheid', 'verslaving',
                'adl', 'sociaal-netwerk', 'participatie', 'justitie'
            ];
            
            domeinen.forEach(domeinId => {
                const domeinRow = document.querySelector(`[data-domein="${domeinId}"]`);
                if (!domeinRow) return;
                
                // Check of dropdown al bestaat
                if (domeinRow.querySelector('.domein-steun-dropdown')) return;
                
                // Clone template
                const clone = template.content.cloneNode(true);
                const dropdown = clone.querySelector('.domein-steun-dropdown');
                dropdown.id = 'dropdown-' + domeinId;
                dropdown.dataset.domein = domeinId;
                
                // Pas select ID aan
                const select = dropdown.querySelector('select');
                select.id = 'steun-select-' + domeinId;
                
                // Voeg toe aan domein row
                domeinRow.appendChild(dropdown);
            });
            
            console.log('Domein dropdowns geïnjecteerd');
        }
        
        // Roep aan na het renderen van het grid
        const originalRenderStoplichtGrid = window.renderStoplichtGrid;
        if (originalRenderStoplichtGrid) {
            window.renderStoplichtGrid = function() {
                originalRenderStoplichtGrid();
                setTimeout(injectDomeinDropdowns, 100); // Kleine delay voor render
            };
        }
'''

script_end = content.rfind('</script>')
if script_end != -1:
    content = content[:script_end] + '\n' + inject_js + '\n    ' + content[script_end:]
    print("   ✅ Injectie code toegevoegd")

# Schrijf
with open(OUTPUT, 'w', encoding='utf-8') as f:
    f.write(content)

print("\n" + "="*60)
print("✅ DROPDOWN PER DOMEIN TOEGEVOEGD!")
print(f"\n📄 Output: {OUTPUT}")
print(f"📦 Backup: {BACKUP}")

print("\n🧪 TEST:")
print("   1. Refresh browser (Cmd+Shift+R)")
print("   2. Klik 'Start gesprek'")
print("   3. Bij een domein: klik '🟡 Steun aanwezig'")
print("   4. Verschijnt er een dropdown 'Wie helpt hierbij?'")
print("   5. Selecteer iets → Wordt opgeslagen?")
print("")
