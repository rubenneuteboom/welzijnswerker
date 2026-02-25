#!/usr/bin/env python3
"""
Fix onclick handlers - maak ze simpeler
"""

INPUT = "positioneel.html"
OUTPUT = "positioneel.html"
BACKUP = "positioneel-BACKUP-fix-onclick.html"

import shutil

print("🔧 Fix onclick handlers...")

shutil.copy(INPUT, BACKUP)
print(f"✅ Backup: {BACKUP}")

with open(INPUT, 'r', encoding='utf-8') as f:
    content = f.read()

# Zoek de complexe onclick en vervang met simpele versie
old_onclick = '''onclick="this.style.borderColor='#3b82f6';this.style.background='#dbeafe';document.querySelectorAll('[data-type-group=\\'${d.id}\\']').forEach(l=>l.style.borderColor='#e5e7eb');this.querySelector('input').checked=true;toggleSteunDropdown('${d.id}','formeel');"'''

new_onclick = '''onclick="selectTypeFormeel('${d.id}', this)"'''

content = content.replace(old_onclick, new_onclick)
print("✅ Formeel onclick vervangen")

# Collectief
old_onclick2 = '''onclick="this.style.borderColor='#a855f7';this.style.background='#f3e8ff';document.querySelectorAll('[data-type-group=\\'${d.id}\\']').forEach(l=>l.style.borderColor='#e5e7eb');this.querySelector('input').checked=true;toggleSteunDropdown('${d.id}','collectief');"'''

new_onclick2 = '''onclick="selectTypeCollectief('${d.id}', this)"'''

content = content.replace(old_onclick2, new_onclick2)
print("✅ Collectief onclick vervangen")

# Informeel
old_onclick3 = '''onclick="this.style.borderColor='#10b981';this.style.background='#d1fae5';document.querySelectorAll('[data-type-group=\\'${d.id}\\']').forEach(l=>l.style.borderColor='#e5e7eb');this.querySelector('input').checked=true;toggleSteunDropdown('${d.id}','informeel');"'''

new_onclick3 = '''onclick="selectTypeInformeel('${d.id}', this)"'''

content = content.replace(old_onclick3, new_onclick3)
print("✅ Informeel onclick vervangen")

# Voeg simpele functies toe
js = '''
        
        // Simpele type selectie functies
        function selectTypeFormeel(domeinId, label) {
            resetTypeButtons(domeinId);
            label.style.borderColor = '#3b82f6';
            label.style.background = '#dbeafe';
            label.querySelector('input').checked = true;
            toggleSteunDropdown(domeinId, 'formeel');
        }
        
        function selectTypeCollectief(domeinId, label) {
            resetTypeButtons(domeinId);
            label.style.borderColor = '#a855f7';
            label.style.background = '#f3e8ff';
            label.querySelector('input').checked = true;
            toggleSteunDropdown(domeinId, 'collectief');
        }
        
        function selectTypeInformeel(domeinId, label) {
            resetTypeButtons(domeinId);
            label.style.borderColor = '#10b981';
            label.style.background = '#d1fae5';
            label.querySelector('input').checked = true;
            toggleSteunDropdown(domeinId, 'informeel');
        }
        
        function resetTypeButtons(domeinId) {
            // Reset alle type labels van dit domein
            const labels = document.querySelectorAll('label input[name="type-' + domeinId + '"]');
            labels.forEach(input => {
                const label = input.parentElement;
                label.style.borderColor = '#e5e7eb';
                label.style.background = 'white';
            });
        }
'''

script_end = content.rfind('</script>')
if script_end != -1:
    content = content[:script_end] + '\n' + js + '\n    ' + content[script_end:]
    print("✅ Nieuwe functies toegevoegd")

# Schrijf
with open(OUTPUT, 'w', encoding='utf-8') as f:
    f.write(content)

print("\n✅ KLAAR!")
print("   Onclick handlers zijn nu simpel en zouden moeten werken")
print("\n🧪 Refresh en test!")
