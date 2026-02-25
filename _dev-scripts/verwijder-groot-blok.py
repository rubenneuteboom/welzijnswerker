#!/usr/bin/env python3
"""
Verwijder het grote "Huidige Steun" blok bovenaan
Behoud alleen de dropdown bij elk domein
"""

INPUT = "positioneel.html"
OUTPUT = "positioneel.html"
BACKUP = "positioneel-BACKUP-verwijder-groot.html"

import shutil
import re

print("🗑️  Verwijderen groot 'Huidige Steun' blok...")

shutil.copy(INPUT, BACKUP)
print(f"✅ Backup: {BACKUP}")

with open(INPUT, 'r', encoding='utf-8') as f:
    content = f.read()

# Zoek en verwijder het hele blok
# Van <!-- HUIDIGE STEUN BLOKJE tot </div> (vlak voor 🗺️)
pattern = r'\s*<!-- HUIDIGE STEUN BLOKJE \(v4\.0\) -->.*?</div>\s*\n\s*🗺️'

match = re.search(pattern, content, re.DOTALL)
if match:
    # Vervang met alleen de header
    content = re.sub(pattern, '\n🗺️', content, flags=re.DOTALL)
    print("✅ Groot blok verwijderd")
else:
    print("⚠️  Kon blok niet vinden")

# Schrijf
with open(OUTPUT, 'w', encoding='utf-8') as f:
    f.write(content)

print("\n✅ KLAAR!")
print("   Het grote blok is weg.")
print("   De dropdown bij elk domein blijft.")
print("\n🧪 Refresh en test!")
