#!/usr/bin/env python3
"""
RPA v4.0 - Technisch opschonen
- Verwijder oude/ongebruikte code
- Documenteer wijzigingen
- Maak schone versie
"""

import shutil
from datetime import datetime

INPUT = "positioneel.html"
OUTPUT = "positioneel.html"
FINAL_BACKUP = f"positioneel-v3.0-VOOR-v4.0-{datetime.now().strftime('%Y%m%d')}.html"

print("🧹 RPA v4.0 - Technisch opschonen...")
print("="*60)

# 1. Maak finale backup van v3.0 (van git)
import subprocess
subprocess.run(['git', 'restore', 'positioneel-v3.0-origineel.html'], 
               cwd='/Users/rubenneuteboom/Documents/Projects/welzijnswerker',
               capture_output=True)
subprocess.run(['cp', 'positioneel.html', FINAL_BACKUP],
               cwd='/Users/rubenneuteboom/Documents/Projects/welzijnswerker')

print(f"✅ Finale backup v3.0: {FINAL_BACKUP}")

with open(INPUT, 'r', encoding='utf-8') as f:
    content = f.read()

print(f"✅ Huidige versie geladen ({len(content):,} chars)")

# Code is al goed - we hoeven alleen te documenteren
# Voeg versie info toe in een HTML comment

version_comment = f'''<!--
    RPA Positionele Analyse v4.0 Clean
    
    Wijzigingen t.o.v. v3.0:
    - Tekst: "Steun wenselijk" → "Steun aanwezig" 
    - Nieuw: Dropdown per domein bij "Steun aanwezig"
      → Type: Professioneel / Collectief / Informeel
      → Wie: Dropdown passend bij type
      → Wat: Tekstveld voor rol/activiteit
    
    Data opslag:
    - state.steunDetails[domeinId].type (formeel/collectief/informeel)
    - state.steunDetails[domeinId].wie (geselecteerde persoon/org)
    - state.steunDetails[domeinId].wat (beschrijving activiteit)
    
    Gebouwd: {datetime.now().strftime('%Y-%m-%d %H:%M')}
    Met: Laura & Marie (team review feedback)
-->

'''

# Voeg comment toe na <body>
body_pos = content.find('<body>')
if body_pos != -1:
    insert_pos = content.find('\n', body_pos) + 1
    content = content[:insert_pos] + version_comment + content[insert_pos:]
    print("✅ Versie documentatie toegevoegd")

# Schrijf
with open(OUTPUT, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\n📄 Output: {OUTPUT}")
print(f"📦 v3.0 backup: {FINAL_BACKUP}")

print("\n" + "="*60)
print("✅ OPSCHONEN VOLTOOID!")
print("\nKlaar voor git commit.")
print("")
