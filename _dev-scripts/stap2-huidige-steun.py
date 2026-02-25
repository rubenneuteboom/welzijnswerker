#!/usr/bin/env python3
"""
STAP 2: Huidige Steun blokje toevoegen bovenaan Focusgebieden
"""

INPUT = "positioneel-v4-clean.html"
OUTPUT = "positioneel-v4-clean.html"
BACKUP = "positioneel-v4-clean-BACKUP-stap2.html"

import shutil

print("🔧 STAP 2: Huidige Steun toevoegen aan Focusgebieden...")

# Backup
shutil.copy(INPUT, BACKUP)
print(f"✅ Backup: {BACKUP}")

with open(INPUT, 'r', encoding='utf-8') as f:
    content = f.read()

# ============================================
# 1. CSS TOEVOEGEN
# ============================================
print("\n🎨 CSS toevoegen...")

css = '''
        /* ========================================
           HUIDIGE STEUN KNOPPEN (v4.0)
           ======================================== */
        .steun-knoppen {
            display: flex;
            gap: 12px;
            justify-content: center;
            flex-wrap: wrap;
            margin: 16px 0 24px 0;
        }
        
        .steun-btn {
            flex: 1;
            min-width: 140px;
            max-width: 180px;
            padding: 16px;
            border: 3px solid #e5e7eb;
            border-radius: 12px;
            background: white;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 0.95rem;
            font-weight: 600;
            color: #374151;
            text-align: center;
        }
        
        .steun-btn:hover {
            border-color: #9ca3af;
        }
        
        .steun-btn.active-zelfstandig {
            border-color: #10b981;
            background: #d1fae5;
            color: #065f46;
        }
        
        .steun-btn.active-aanwezig {
            border-color: #f59e0b;
            background: #fef3c7;
            color: #92400e;
        }
        
        .steun-btn.active-nodig {
            border-color: #dc2626;
            background: #fee2e2;
            color: #991b1b;
        }
        
        .steun-dropdown {
            background: #fef3c7;
            border: 2px solid #f59e0b;
            border-radius: 10px;
            padding: 16px;
            margin: 16px 0 24px 0;
        }
        
        .steun-dropdown select {
            width: 100%;
            padding: 10px;
            border: 2px solid #f59e0b;
            border-radius: 8px;
            font-size: 0.95rem;
            background: white;
        }
'''

# Voeg CSS toe voor </style>
style_end = content.find('</style>')
if style_end != -1:
    content = content[:style_end] + '\n' + css + '\n    ' + content[style_end:]
    print("   ✅ CSS toegevoegd")

# ============================================
# 2. HTML TOEVOEGEN IN TRIAGE/FOCUSGEBIEDEN
# ============================================
print("\n📝 HTML toevoegen aan Focusgebieden scherm...")

# Zoek het triage/domains scherm
# Het kan heten: screen-triage, screen-domains, of iets anders
# Laten we zoeken naar "Waar speelt het" of focusgebieden

marker = 'id="screen-triage"'
pos = content.find(marker)

if pos == -1:
    marker = 'id="screen-domains"'
    pos = content.find(marker)

if pos != -1:
    # Zoek de <div class="card"> binnen dit scherm
    card_start = content.find('<div class="card">', pos)
    
    if card_start != -1:
        # Zoek de eerste <h2> of content na de card
        insert_pos = content.find('>', card_start + 18) + 1  # Na <div class="card">
        
        huidige_steun_html = '''
                    <!-- HUIDIGE STEUN BLOKJE (v4.0) -->
                    <div style="background:#f0f9ff;border:2px solid #3b82f6;border-radius:12px;padding:20px;margin-bottom:24px;">
                        <h3 style="color:#1e40af;font-size:1.1rem;margin:0 0 8px 0;text-align:center;">
                            💼 Loopt er nu al ondersteuning?
                        </h3>
                        <p style="text-align:center;color:#1e3a8a;font-size:0.9rem;margin:0 0 16px;">
                            Klik hieronder wat nu van toepassing is:
                        </p>
                        
                        <div class="steun-knoppen">
                            <button type="button" class="steun-btn" id="steun-btn-zelfstandig" onclick="selectHuidigeSteun('zelfstandig')">
                                <div style="font-size:1.8rem;margin-bottom:6px;">🟢</div>
                                Zelfstandig
                            </button>
                            
                            <button type="button" class="steun-btn" id="steun-btn-aanwezig" onclick="selectHuidigeSteun('aanwezig')">
                                <div style="font-size:1.8rem;margin-bottom:6px;">🟡</div>
                                Steun aanwezig
                            </button>
                            
                            <button type="button" class="steun-btn" id="steun-btn-nodig" onclick="selectHuidigeSteun('nodig')">
                                <div style="font-size:1.8rem;margin-bottom:6px;">🔴</div>
                                Steun nodig
                            </button>
                        </div>
                        
                        <!-- Dropdown (verschijnt bij "Steun aanwezig") -->
                        <div id="steun-aanwezig-dropdown" class="steun-dropdown" style="display:none;">
                            <label style="font-weight:700;color:#92400e;display:block;margin-bottom:10px;">
                                Wie of wat helpt er nu?
                            </label>
                            <select id="steun-type-select" onchange="saveHuidigeSteunType()">
                                <option value="">-- Selecteer --</option>
                                <optgroup label="Professionele hulp">
                                    <option value="ambulante-ggz">Ambulante GGZ</option>
                                    <option value="wijkverpleging">Wijkverpleging</option>
                                    <option value="thuiszorg">Thuiszorg</option>
                                    <option value="maatschappelijk-werk">Maatschappelijk werk</option>
                                    <option value="sociale-wijkteam">Sociaal wijkteam</option>
                                </optgroup>
                                <optgroup label="Informele steun">
                                    <option value="partner">Partner</option>
                                    <option value="familie">Familie</option>
                                    <option value="mantelzorger">Mantelzorger</option>
                                    <option value="vrienden">Vrienden</option>
                                    <option value="buren">Buren</option>
                                </optgroup>
                                <option value="anders">Anders</option>
                            </select>
                        </div>
                    </div>
                    
'''
        
        content = content[:insert_pos] + '\n' + huidige_steun_html + content[insert_pos:]
        print("   ✅ HTML toegevoegd aan focusgebieden scherm")
    else:
        print("   ⚠️  Kon <div class='card'> niet vinden")
else:
    print("   ⚠️  Kon triage/domains scherm niet vinden")

# ============================================
# 3. JAVASCRIPT TOEVOEGEN
# ============================================
print("\n💻 JavaScript functies toevoegen...")

js = '''
        
        /* ========================================
           HUIDIGE STEUN FUNCTIES (v4.0)
           ======================================== */
        
        function selectHuidigeSteun(keuze) {
            // Reset alle buttons
            ['zelfstandig', 'aanwezig', 'nodig'].forEach(k => {
                const btn = document.getElementById('steun-btn-' + k);
                if (btn) {
                    btn.className = 'steun-btn';  // Reset classes
                }
            });
            
            // Activeer geselecteerde
            const btn = document.getElementById('steun-btn-' + keuze);
            if (btn) {
                btn.className = 'steun-btn active-' + keuze;
            }
            
            // Toon/verberg dropdown
            const dropdown = document.getElementById('steun-aanwezig-dropdown');
            if (dropdown) {
                dropdown.style.display = (keuze === 'aanwezig') ? 'block' : 'none';
            }
            
            // Bewaar in state
            if (!state.huidigeSteun) state.huidigeSteun = {};
            state.huidigeSteun.status = keuze;
            saveState();
            
            console.log('Huidige steun geselecteerd:', keuze);
        }
        
        function saveHuidigeSteunType() {
            const select = document.getElementById('steun-type-select');
            if (!select) return;
            
            if (!state.huidigeSteun) state.huidigeSteun = {};
            state.huidigeSteun.type = select.value;
            saveState();
            
            console.log('Steun type opgeslagen:', select.value);
        }
'''

script_end = content.rfind('</script>')
if script_end != -1:
    content = content[:script_end] + '\n' + js + '\n    ' + content[script_end:]
    print("   ✅ JavaScript toegevoegd")

# Schrijf
with open(OUTPUT, 'w', encoding='utf-8') as f:
    f.write(content)

print("\n" + "="*60)
print("✅ STAP 2 VOLTOOID!")
print(f"\n📄 Output: {OUTPUT}")
print(f"📦 Backup: {BACKUP}")

print("\n🧪 TEST STAP 2:")
print("   1. Refresh: https://...3458/positioneel-v4-clean.html")
print("   2. Klik 'Start gesprek'")
print("   3. Zie je BOVENAAN: '💼 Loopt er nu al ondersteuning?'")
print("   4. Klik op knoppen → Highlight werkt?")
print("   5. Klik 'Steun aanwezig' → Dropdown verschijnt?")
print("   6. Selecteer iets → Wordt opgeslagen?")
print("   7. Werkt de REST nog? (domeinen selecteren, etc)")
print("")
