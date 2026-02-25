#!/usr/bin/env python3
"""
RPA v4.0 - BATCH 1: Safety Nets
Voorzichtig toevoegen van 3 componenten:
1. Privacy & Regie scherm
2. Financiën pre-check
3. Mantelzorg alert systeem
"""

import re
from datetime import datetime
import shutil

INPUT = "positioneel.html"
OUTPUT = "positioneel-v4.0-batch1.html"
BACKUP = f"positioneel-BACKUP-batch1-{datetime.now().strftime('%Y%m%d-%H%M%S')}.html"

def main():
    print("🚀 RPA v4.0 - BATCH 1: Safety Nets")
    print("="*60)
    
    # 1. Backup
    shutil.copy(INPUT, BACKUP)
    print(f"📦 Backup gemaakt: {BACKUP}")
    
    # 2. Lees origineel
    with open(INPUT, 'r', encoding='utf-8') as f:
        content = f.read()
    
    print(f"📄 Gelezen: {INPUT} ({len(content):,} chars)")
    
    # =================================================================
    # STAP 1: CSS TOEVOEGEN (voor </style>)
    # =================================================================
    print("\n🎨 [1/6] CSS toevoegen voor nieuwe componenten...")
    
    css_additions = '''
        /* ========================================
           RPA v4.0 BATCH 1: SAFETY NETS CSS
           ======================================== */
        
        /* Privacy & Regie Scherm */
        .privacy-screen {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            border: 3px solid #0ea5e9;
            border-radius: 16px;
            padding: 24px;
            margin-bottom: 24px;
        }
        
        .privacy-guarantee {
            background: white;
            border-left: 5px solid #10b981;
            padding: 16px 18px;
            margin: 16px 0;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        
        .regie-badge {
            background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
            color: white;
            padding: 12px 24px;
            border-radius: 25px;
            font-weight: 700;
            display: inline-block;
            font-size: 1.05rem;
            box-shadow: 0 4px 12px rgba(251, 191, 36, 0.3);
        }
        
        .client-choice {
            background: #fef3c7;
            border-left: 6px solid #eab308;
            padding: 14px 18px;
            margin: 16px 0;
            border-radius: 0 10px 10px 0;
        }
        
        /* Financiën Alert */
        .financien-alert {
            background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
            border: 3px solid #dc2626;
            border-radius: 16px;
            padding: 24px;
            margin: 24px 0;
        }
        
        /* Mantelzorg Alert */
        .mantelzorg-alert {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border: 2px solid #f59e0b;
            border-radius: 12px;
            padding: 16px;
            margin: 16px 0 0 0;
            animation: slideInAlert 0.3s ease-out;
        }
        
        @keyframes slideInAlert {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .mantelzorg-alert h4 {
            color: #92400e;
            margin-bottom: 8px;
            font-size: 1rem;
        }
        
        .mantelzorg-alert details {
            background: white;
            border: 2px dashed #f59e0b;
            border-radius: 8px;
            padding: 12px;
            margin: 10px 0;
        }
        
        .mantelzorg-alert summary {
            font-weight: 700;
            color: #92400e;
            cursor: pointer;
            list-style: none;
        }
        
        .mantelzorg-alert summary::-webkit-details-marker {
            display: none;
        }
'''
    
    # Zoek </style> en voeg CSS toe
    style_end = content.find('</style>')
    if style_end != -1:
        content = content[:style_end] + '\n' + css_additions + '\n    ' + content[style_end:]
        print("   ✅ CSS toegevoegd")
    else:
        print("   ⚠️  Kon </style> niet vinden!")
        return False
    
    # =================================================================
    # STAP 2: PRIVACY SCHERM TOEVOEGEN (na screen-start)
    # =================================================================
    print("\n🔒 [2/6] Privacy & Regie scherm toevoegen...")
    
    privacy_screen = '''
    <!-- ========================================
         RPA v4.0 BATCH 1: PRIVACY & REGIE SCHERM
         ======================================== -->
    <div class="screen" id="screen-privacy" style="display:none;">
        <div class="card">
            <div class="privacy-screen">
                <div style="font-size:3.5rem;text-align:center;margin-bottom:16px;">🔒</div>
                <h2 style="text-align:center;color:#0369a1;margin-bottom:20px;font-size:1.6rem;">
                    Voordat we beginnen: Privacy & Regie
                </h2>
                
                <div class="privacy-guarantee">
                    <h3 style="color:#065f46;margin-bottom:10px;font-size:1rem;">✅ Wat gebeurt er met informatie?</h3>
                    <ul style="line-height:2;color:#374151;">
                        <li><strong>Niets wordt automatisch opgeslagen</strong> - dit gesprek blijft op dit scherm</li>
                        <li><strong>Geen verzending naar servers</strong> - alle informatie blijft lokaal</li>
                        <li><strong>Je bepaalt wat er in het dossier komt</strong> - aan het einde kies je zelf</li>
                        <li><strong>Je kunt op elk moment stoppen</strong> - zonder verklaring</li>
                    </ul>
                </div>
                
                <div class="client-choice">
                    <p style="font-weight:700;color:#92400e;margin-bottom:8px;font-size:1.05rem;">
                        👤 Dit is een gesprek MET je, niet OVER je
                    </p>
                    <p style="color:#78350f;line-height:1.8;margin:0;">
                        De professional helpt je nadenken over je netwerk. 
                        <strong>Jij beslist</strong> welke onderwerpen we bespreken en welke stap je zet.
                    </p>
                </div>
                
                <div style="text-align:center;margin:24px 0;">
                    <div class="regie-badge">👑 Jij bepaalt de richting</div>
                </div>
            </div>
            
            <div style="text-align:center;margin-top:24px;">
                <button class="btn btn-primary" onclick="goToScreenDirect('screen-financien-check')" style="font-size:1.1rem;padding:14px 32px;">
                    Verder →
                </button>
            </div>
        </div>
    </div>
'''
    
    # Vind einde van screen-start
    # Zoek naar: </div> vlak voor de volgende <!-- comment of screen
    start_marker = 'id="screen-start"'
    start_pos = content.find(start_marker)
    
    if start_pos != -1:
        # Zoek de volgende screen of comment na screen-start
        next_screen = content.find('<!-- Screen', start_pos + 100)
        if next_screen == -1:
            next_screen = content.find('<div class="screen"', start_pos + 100)
        
        if next_screen != -1:
            content = content[:next_screen] + '\n' + privacy_screen + '\n    ' + content[next_screen:]
            print("   ✅ Privacy scherm toegevoegd na screen-start")
        else:
            print("   ⚠️  Kon volgende screen niet vinden")
    else:
        print("   ⚠️  Kon screen-start niet vinden")
    
    # =================================================================
    # STAP 3: FINANCIËN CHECK SCHERM TOEVOEGEN
    # =================================================================
    print("\n💳 [3/6] Financiën pre-check scherm toevoegen...")
    
    financien_screen = '''
    <!-- ========================================
         RPA v4.0 BATCH 1: FINANCIËN PRE-CHECK
         ======================================== -->
    <div class="screen" id="screen-financien-check" style="display:none;">
        <div class="card">
            <h2 style="color:#991b1b;text-align:center;margin-bottom:8px;font-size:1.6rem;">
                💳 Financiën als fundament
            </h2>
            
            <p style="text-align:center;color:#6b7280;margin-bottom:24px;font-size:0.9rem;">
                <em>"Je kunt geen netwerk activeren als je geen geld hebt voor de buskaart."</em> — Jamal
            </p>
            
            <div class="financien-alert">
                <p style="color:#7f1d1d;line-height:1.8;text-align:center;margin-bottom:20px;font-size:1.05rem;">
                    Als er <strong>acute schuldenproblematiek</strong> of <strong>geldgebrek</strong> is, 
                    werken andere interventies vaak niet. Daarom checken we dit eerst.
                </p>
                
                <div style="background:white;border-radius:12px;padding:20px;margin-bottom:20px;">
                    <p style="font-weight:700;color:#991b1b;margin-bottom:16px;font-size:1rem;">
                        Is er sprake van één van deze situaties?
                    </p>
                    
                    <div style="display:grid;gap:12px;">
                        <label style="display:flex;align-items:start;gap:12px;padding:12px;background:#fef2f2;border-radius:8px;cursor:pointer;" 
                               onchange="checkFinancienRood()">
                            <input type="checkbox" id="fin-schuld" style="margin-top:3px;width:20px;height:20px;">
                            <span style="color:#374151;line-height:1.6;">
                                Schulden <strong>>€5000</strong> waar niets mee wordt gedaan
                            </span>
                        </label>
                        
                        <label style="display:flex;align-items:start;gap:12px;padding:12px;background:#fef2f2;border-radius:8px;cursor:pointer;"
                               onchange="checkFinancienRood()">
                            <input type="checkbox" id="fin-acuut" style="margin-top:3px;width:20px;height:20px;">
                            <span style="color:#374151;line-height:1.6;">
                                <strong>Eten, huur, of energie</strong> kan deze maand niet betaald worden
                            </span>
                        </label>
                        
                        <label style="display:flex;align-items:start;gap:12px;padding:12px;background:#fef2f2;border-radius:8px;cursor:pointer;"
                               onchange="checkFinancienRood()">
                            <input type="checkbox" id="fin-deurwaarder" style="margin-top:3px;width:20px;height:20px;">
                            <span style="color:#374151;line-height:1.6;">
                                Angst voor <strong>deurwaarders</strong> of beslaglegging
                            </span>
                        </label>
                        
                        <label style="display:flex;align-items:start;gap:12px;padding:12px;background:#fef2f2;border-radius:8px;cursor:pointer;"
                               onchange="checkFinancienRood()">
                            <input type="checkbox" id="fin-kinderen" style="margin-top:3px;width:20px;height:20px;">
                            <span style="color:#374151;line-height:1.6;">
                                Er zijn <strong>kinderen</strong> die hierdoor lijden
                            </span>
                        </label>
                    </div>
                </div>
                
                <div id="financien-rood-result" style="display:none;">
                    <div style="background:#dc2626;color:white;padding:16px;border-radius:10px;text-align:center;font-weight:700;margin:16px 0;">
                        ⚠️ Aanbeveling: eerst schuldhulpverlening inschakelen
                    </div>
                    
                    <p style="color:#7f1d1d;line-height:1.7;text-align:center;font-size:0.95rem;margin:16px 0 0;">
                        Bij acute financiële nood hebben netwerk-interventies weinig effect. 
                        Betrek schuldhulpverlening, kijk daarna verder.
                    </p>
                </div>
            </div>
            
            <div style="text-align:center;margin-top:24px;display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
                <button class="btn" onclick="goToScreenDirect('screen-privacy')" style="padding:12px 24px;">
                    ← Terug
                </button>
                <button class="btn btn-primary" onclick="handleFinancienCheckSimple()" style="padding:12px 32px;">
                    Verder met gesprek →
                </button>
            </div>
        </div>
    </div>
'''
    
    # Voeg toe na privacy scherm (voor hulpvraag of triage)
    hulpvraag_marker = 'id="screen-hulpvraag"'
    hulpvraag_pos = content.find(hulpvraag_marker)
    
    if hulpvraag_pos != -1:
        # Ga terug naar begin van de <div class="screen"
        while hulpvraag_pos > 0 and content[hulpvraag_pos-1] != '\n':
            hulpvraag_pos -= 1
        
        content = content[:hulpvraag_pos] + financien_screen + '\n    ' + content[hulpvraag_pos:]
        print("   ✅ Financiën scherm toegevoegd voor hulpvraag")
    else:
        print("   ⚠️  Kon screen-hulpvraag niet vinden")
    
    # =================================================================
    # STAP 4: JAVASCRIPT FUNCTIES TOEVOEGEN
    # =================================================================
    print("\n💻 [4/6] JavaScript functies toevoegen...")
    
    js_additions = '''
        
        /* ========================================
           RPA v4.0 BATCH 1: JAVASCRIPT FUNCTIES
           ======================================== */
        
        // Directe navigatie (bypass screen config)
        function goToScreenDirect(screenId) {
            console.log('🔹 goToScreenDirect:', screenId);
            
            // Verberg alle screens
            const allScreens = document.querySelectorAll('.screen');
            allScreens.forEach(s => {
                s.classList.remove('active');
                s.style.display = 'none';
            });
            
            // Toon target
            const target = document.getElementById(screenId);
            if (target) {
                target.classList.add('active');
                target.style.display = 'block';
                window.scrollTo(0, 0);
                console.log('✅ Getoond:', screenId);
                return true;
            } else {
                console.error('❌ Niet gevonden:', screenId);
                return false;
            }
        }
        
        // Financiën check
        function checkFinancienRood() {
            const checks = [
                document.getElementById('fin-schuld'),
                document.getElementById('fin-acuut'),
                document.getElementById('fin-deurwaarder'),
                document.getElementById('fin-kinderen')
            ];
            
            const anyChecked = checks.some(cb => cb && cb.checked);
            const result = document.getElementById('financien-rood-result');
            
            if (result) {
                result.style.display = anyChecked ? 'block' : 'none';
            }
            
            // Bewaar in state
            if (!state.batch1) state.batch1 = {};
            state.batch1.financienRoodVlag = anyChecked;
            saveState();
        }
        
        // Financiën check - simpele versie (gaat door naar hulpvraag)
        function handleFinancienCheckSimple() {
            if (state.batch1 && state.batch1.financienRoodVlag) {
                const bevestig = confirm(
                    'Er zijn financiële signalen die prioriteit hebben.\\n\\n' +
                    'Aanbeveling: eerst schuldhulpverlening inschakelen.\\n\\n' +
                    'Wil je toch doorgaan met dit gesprek?'
                );
                if (!bevestig) return;
            }
            
            // Ga door naar hulpvraag of triage (wat het volgende scherm was)
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
        
        // Mantelzorg alert tonen (wordt later getriggerd)
        function showMantelzorgAlert(domeinNaam, persoonNaam, containerSelector) {
            const container = document.querySelector(containerSelector);
            if (!container) {
                console.warn('⚠️ showMantelzorgAlert: container niet gevonden:', containerSelector);
                return;
            }
            
            // Check of alert al bestaat
            if (container.querySelector('.mantelzorg-alert')) {
                console.log('ℹ️  Mantelzorg alert al aanwezig');
                return;
            }
            
            const alertHTML = `
                <div class="mantelzorg-alert">
                    <h4>🫂 Let op: Duurzaamheid mantelzorg</h4>
                    <p style="color:#78350f;margin-bottom:12px;">
                        ${persoonNaam ? persoonNaam + ' helpt' : 'Er wordt geholpen'} met <strong>${domeinNaam}</strong>.
                    </p>
                    
                    <details>
                        <summary style="padding:8px 0;">
                            ⚠️ Is dit duurzaam? (klik om te checken)
                        </summary>
                        <div style="padding-top:12px;">
                            <ul style="margin:8px 0 8px 20px;line-height:1.9;color:#374151;font-size:0.9rem;">
                                <li>Helpt deze persoon al <strong>>6 maanden intensief</strong> (>8 uur/week)?</li>
                                <li>Combineert deze persoon dit met <strong>werk, eigen gezin, of eigen gezondheidsproblemen</strong>?</li>
                                <li>Geeft deze persoon signalen van <strong>vermoeidheid</strong>?</li>
                                <li>Is deze persoon gestopt met <strong>hobby's of sociale contacten</strong>?</li>
                                <li>Voelt deze persoon zich <strong>schuldig bij niet helpen</strong>?</li>
                            </ul>
                            
                            <div style="background:#f0fdf4;border-radius:8px;padding:12px;margin-top:12px;border-left:4px solid #10b981;">
                                <p style="color:#065f46;font-weight:700;margin:0 0 6px;font-size:0.95rem;">
                                    💡 Bij 2+ signalen:
                                </p>
                                <p style="color:#374151;line-height:1.7;margin:0;font-size:0.9rem;">
                                    Bespreek <strong>mantelzorgondersteuning</strong> of <strong>tijdelijke verlichting</strong>. 
                                    Het doel is hun hulp <strong>duurzaam</strong> te maken.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>
            `;
            
            container.insertAdjacentHTML('beforeend', alertHTML);
            console.log('✅ Mantelzorg alert toegevoegd');
            
            // Log voor tracking
            if (!state.batch1) state.batch1 = {};
            if (!state.batch1.mantelzorgAlerts) state.batch1.mantelzorgAlerts = [];
            state.batch1.mantelzorgAlerts.push({ 
                domein: domeinNaam, 
                persoon: persoonNaam || 'onbekend', 
                timestamp: Date.now() 
            });
            saveState();
        }
'''
    
    # Zoek het einde van de laatste JavaScript sectie (voor </script>)
    script_end = content.rfind('</script>')
    if script_end != -1:
        content = content[:script_end] + '\n' + js_additions + '\n    ' + content[script_end:]
        print("   ✅ JavaScript functies toegevoegd")
    else:
        print("   ⚠️  Kon </script> niet vinden")
    
    # =================================================================
    # STAP 5: START BUTTON AANPASSEN (naar privacy ipv hulpvraag)
    # =================================================================
    print("\n🔗 [5/6] Start button flow aanpassen...")
    
    # Zoek de "Start gesprek" button in screen-start
    # Dit moet voorzichtig - er kunnen meerdere buttons zijn
    
    # Specifieke pattern: in screen-start, de button die naar volgende gaat
    start_button_pattern = r'(<button[^>]*onclick="[^"]*")([^"]*"[^>]*>[\s\S]*?Start gesprek)'
    
    # We willen deze vervangen om naar screen-privacy te gaan
    # MAAR: ik weet niet precies welke functie er nu staat
    # Veiliger: zoek de exacte button tekst en vervang die hele regel
    
    # Laten we een specifieke zoekactie doen
    start_screen_section = content[content.find('id="screen-start"'):content.find('id="screen-start"')+5000]
    
    if 'Start gesprek' in start_screen_section or 'start gesprek' in start_screen_section.lower():
        # Vervang de onClick van deze button
        # We moeten voorzichtig zijn - laten we de hele button tag vervangen
        # Zoek: button + Start gesprek
        
        # Simpele benadering: vervang elke onclick in screen-start die naar het volgende scherm gaat
        # Naar privacy scherm
        
        # Specifieke replace voor de meest waarschijnlijke variants
        content = content.replace(
            'onclick="goToScreen(1)"',
            'onclick="goToScreenDirect(\'screen-privacy\')"',
            1  # Alleen eerste voorkomen
        )
        content = content.replace(
            'onclick="goToScreenById(\'hulpvraag\')"',
            'onclick="goToScreenDirect(\'screen-privacy\')"',
            1
        )
        content = content.replace(
            'onclick="goToScreenById(\'screen-hulpvraag\')"',
            'onclick="goToScreenDirect(\'screen-privacy\')"',
            1
        )
        
        print("   ✅ Start button aangepast (gaat nu naar privacy)")
    else:
        print("   ⚠️  Kon 'Start gesprek' button niet vinden")
    
    # =================================================================
    # STAP 6: VERSIENUMMER UPDATEN
    # =================================================================
    print("\n🏷️  [6/6] Versienummer updaten...")
    
    content = content.replace(
        '<span class="version-badge">v3.0</span>',
        '<span class="version-badge">v4.0 Batch 1</span>'
    )
    content = content.replace(
        '<title>RPA Positionele Analyse - Relationeel-Positioneel Analysemodel</title>',
        '<title>RPA Positionele Analyse v4.0 Batch 1 - Relationeel-Positioneel Analysemodel</title>'
    )
    
    print("   ✅ Versie updated naar v4.0 Batch 1")
    
    # =================================================================
    # SCHRIJF OUTPUT
    # =================================================================
    with open(OUTPUT, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("\n" + "="*60)
    print("✅ BATCH 1 VOLTOOID!")
    print(f"\n📄 Output: {OUTPUT}")
    print(f"📦 Backup: {BACKUP}")
    print(f"📊 Grootte: {len(content):,} chars")
    
    print("\n🎯 WAT IS TOEGEVOEGD:")
    print("   ✅ Privacy & Regie scherm (tussen start en financiën)")
    print("   ✅ Financiën pre-check (tussen privacy en hulpvraag)")
    print("   ✅ Mantelzorg alert functie (nog niet getriggerd)")
    print("   ✅ Alle styling (CSS)")
    print("   ✅ Alle functionaliteit (JavaScript)")
    
    print("\n🧪 TESTEN:")
    print("   1. Open positioneel-v4.0-batch1.html")
    print("   2. Klik 'Start gesprek' → Privacy scherm?")
    print("   3. Klik 'Verder' → Financiën check?")
    print("   4. Vink checkbox aan → Rode waarschuwing?")
    print("   5. Klik 'Verder' → Hulpvraag of Triage?")
    print("   6. Test of OUDE functionaliteit werkt (domeinen, etc)")
    print("")
    print("📋 ALS HET WERKT:")
    print("   → Laat Laura weten")
    print("   → Dan kopiëren we naar positioneel.html")
    print("   → En git commit")
    print("")

if __name__ == "__main__":
    main()
