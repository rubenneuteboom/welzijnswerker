#!/usr/bin/env python3
"""
RPA v2.1 Integratie Script
Injecteert nieuwe componenten in positioneel.html
"""

import re
from datetime import datetime
import shutil

ORIGINAL = "positioneel.html"
OUTPUT = "positioneel-v2.1.html"

def main():
    print("🚀 RPA v2.1 Integratie Gestart")
    print("=" * 40)
    
    # 1. Backup
    backup_name = f"positioneel-BACKUP-v2.1-{datetime.now().strftime('%Y%m%d-%H%M%S')}.html"
    shutil.copy(ORIGINAL, backup_name)
    print(f"📦 Backup: {backup_name}")
    
    # 2. Lees origineel
    with open(ORIGINAL, 'r', encoding='utf-8') as f:
        content = f.read()
    
    print("📄 Origineel gelezen (15301 regels)")
    
    # 3. Inject CSS
    print("🎨 CSS componenten toevoegen...")
    css_addition = """
/* ====== RPA v2.1 ADDITIONS ====== */
.evidence-badge {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: 600;
    margin-left: 6px;
    vertical-align: middle;
}

.evidence-badge.evidence-based {
    background: #dbeafe;
    color: #1e40af;
    border: 1px solid #3b82f6;
}

.evidence-badge.clinical {
    background: #fef3c7;
    color: #92400e;
    border: 1px solid #f59e0b;
}

.evidence-badge.ethical {
    background: #e0e7ff;
    color: #3730a3;
    border: 1px solid #6366f1;
}

.mantelzorg-alert {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    border: 2px solid #f59e0b;
    border-radius: 12px;
    padding: 16px;
    margin: 16px 0;
}

.financien-alert {
    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    border: 3px solid #dc2626;
    border-radius: 16px;
    padding: 24px;
    margin: 24px 0;
}

.privacy-screen {
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    border: 3px solid #0ea5e9;
    border-radius: 16px;
    padding: 24px;
}

.privacy-guarantee {
    background: white;
    border-left: 5px solid #10b981;
    padding: 16px 18px;
    margin: 16px 0;
    border-radius: 8px;
}

.regie-badge {
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    color: white;
    padding: 12px 24px;
    border-radius: 25px;
    font-weight: 700;
    display: inline-block;
}

.client-choice {
    background: #fef3c7;
    border-left: 6px solid #eab308;
    padding: 14px 18px;
    margin: 16px 0;
    border-radius: 0 10px 10px 0;
}
"""
    
    # Inject CSS voor </style>
    content = content.replace('</style>', css_addition + '\n    </style>')
    print("   ✅ CSS toegevoegd")
    
    # 4. Update title
    content = content.replace(
        '<title>RPA Positionele Analyse - Relationeel-Positioneel Analysemodel</title>',
        '<title>RPA Positionele Analyse v2.1 - Relationeel-Positioneel Analysemodel</title>'
    )
    print("   ✅ Title updated")
    
    # 5. Voeg version badge toe in header
    header_pattern = r'(<header>.*?<h1[^>]*>.*?)(</h1>)'
    replacement = r'\1<span class="version-badge" style="background:rgba(255,255,255,0.25);padding:5px 14px;border-radius:20px;font-size:0.75rem;margin-left:10px;">v2.1 Pilot</span>\2'
    content = re.sub(header_pattern, replacement, content, flags=re.DOTALL)
    print("   ✅ Version badge in header")
    
    # 6. Inject Privacy Screen (na screen-start)
    privacy_screen = '''
    <!-- RPA v2.1: PRIVACY & REGIE SCHERM -->
    <div class="screen" id="screen-privacy" style="display:none;">
        <div class="card">
            <div class="privacy-screen">
                <div style="font-size:3.5rem;text-align:center;margin-bottom:16px;">🔒</div>
                <h2 style="text-align:center;color:#0369a1;margin-bottom:20px;font-size:1.6rem;">
                    Voordat we beginnen: Jouw Privacy & Regie
                </h2>
                
                <div class="privacy-guarantee">
                    <h3 style="color:#065f46;margin-bottom:10px;font-size:1rem;">✅ Wat gebeurt er met jouw informatie?</h3>
                    <ul style="line-height:2;color:#374151;">
                        <li><strong>Niets wordt automatisch opgeslagen</strong> - dit gesprek blijft op dit scherm</li>
                        <li><strong>Geen verzending naar servers</strong> - alle informatie blijft lokaal</li>
                        <li><strong>Jij bepaalt wat er in het dossier komt</strong> - aan het einde kies jij of je de samenvatting deelt</li>
                        <li><strong>Je kunt op elk moment stoppen</strong> - zonder verklaring</li>
                    </ul>
                </div>
                
                <div class="client-choice">
                    <p style="font-weight:700;color:#92400e;margin-bottom:8px;font-size:1.05rem;">👤 Dit is JOUW gesprek</p>
                    <p style="color:#78350f;line-height:1.8;margin:0;">
                        De professional is er om <strong>jou te helpen nadenken</strong>, niet om jou te beoordelen. 
                        <strong>Jij beslist</strong> welke onderwerpen we bespreken en hoe diep we ingaan.
                    </p>
                </div>
                
                <div style="text-align:center;margin:24px 0;">
                    <div class="regie-badge">👑 Jij hebt de regie - altijd</div>
                </div>
            </div>
            
            <div style="text-align:center;margin-top:24px;">
                <button class="btn btn-primary" onclick="goToScreenById('triage')" style="font-size:1.1rem;padding:14px 32px;">
                    Ik begrijp het, ga verder →
                </button>
            </div>
        </div>
    </div>
'''
    
    # Zoek de locatie van het einde van screen-start
    start_screen_end = content.find('<!-- Screen 1: Start -->')
    if start_screen_end != -1:
        # Zoek het einde van die screen (volgende <!-- comment of volgende screen div)
        next_screen = content.find('<!-- Screen', start_screen_end + 30)
        if next_screen != -1:
            content = content[:next_screen] + privacy_screen + '\n\n    ' + content[next_screen:]
            print("   ✅ Privacy scherm toegevoegd")
    
    # 7. Update button in screen-start om naar privacy te gaan
    content = content.replace(
        'onclick="goToScreenById(\'triage\')" style="font-size: 1.1rem; padding: 14px 28px;">Start gesprek',
        'onclick="goToScreenById(\'screen-privacy\')" style="font-size: 1.1rem; padding: 14px 28px;">Start gesprek'
    )
    print("   ✅ Start button updated")
    
    # 8. Schrijf output
    with open(OUTPUT, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("\n" + "=" * 40)
    print(f"✅ INTEGRATIE VOLTOOID")
    print(f"\n📄 Output: {OUTPUT}")
    print(f"📦 Backup: {backup_name}")
    print("\n💡 VOLGENDE STAPPEN:")
    print("   1. Open positioneel-v2.1.html in browser")
    print("   2. Test de nieuwe privacy scherm flow")
    print("   3. Voeg handmatig financiën-check toe (zie v2.1-componenten.html)")
    print("   4. Voeg mantelzorg-alerts toe bij domein vragen")
    print("")

if __name__ == "__main__":
    main()
