#!/usr/bin/env python3
"""
Verplaats "Huidige Steun" blokje naar ONDER de domeinen
"""

INPUT = "positioneel.html"
OUTPUT = "positioneel.html"
BACKUP = "positioneel-BACKUP-verplaats.html"

import shutil
import re

print("🔧 Verplaatsen 'Huidige Steun' naar onder domeinen...")

shutil.copy(INPUT, BACKUP)
print(f"✅ Backup: {BACKUP}")

with open(INPUT, 'r', encoding='utf-8') as f:
    content = f.read()

# Zoek het hele "HUIDIGE STEUN BLOKJE" (van <!-- tot </div>)
pattern = r'(\s+<!-- HUIDIGE STEUN BLOKJE \(v4\.0\) -->.*?</div>\s+</div>\s+)'
match = re.search(pattern, content, re.DOTALL)

if match:
    huidige_steun_blok = match.group(1)
    print(f"✅ Gevonden: Huidige Steun blokje ({len(huidige_steun_blok)} chars)")
    
    # Verwijder het van huidige positie
    content = content.replace(huidige_steun_blok, '\n')
    print("✅ Verwijderd van huidige positie")
    
    # Zoek de plek VOOR de teller of VOOR de btn-group
    # Laten we het plaatsen vlak VOOR de teller div
    marker = '<div id="triageCounter"'
    pos = content.find(marker)
    
    if pos != -1:
        # Voeg toe VOOR de teller
        content = content[:pos] + '\n' + huidige_steun_blok + '\n                    ' + content[pos:]
        print("✅ Toegevoegd VOOR de teller (onder domeinen)")
    else:
        print("⚠️  Kon teller niet vinden, probeer btn-group...")
        marker = '<div class="btn-group">'
        pos = content.find(marker)
        if pos != -1:
            content = content[:pos] + '\n' + huidige_steun_blok + '\n                    ' + content[pos:]
            print("✅ Toegevoegd VOOR de buttons (onder domeinen)")
else:
    print("⚠️  Kon Huidige Steun blokje niet vinden")

# Schrijf
with open(OUTPUT, 'w', encoding='utf-8') as f:
    f.write(content)

print("\n✅ KLAAR!")
print("🧪 Test: Refresh browser → 'Huidige Steun' staat nu ONDER de domeinen")
