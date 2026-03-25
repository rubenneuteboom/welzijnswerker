import re

with open('positioneel.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove excessive blank lines (more than 2 consecutive)
content = re.sub(r'\n{3,}', '\n\n', content)

# 2. Remove comments with REMOVED/DEPRECATED/DISABLED
content = re.sub(r'<!--[^>]*?(REMOVED|DEPRECATED|DISABLED|verwijderd)[^>]*?-->\n?', '', content, flags=re.IGNORECASE|re.DOTALL)

# 3. Remove trailing whitespace
content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)

# 4. Remove // REMOVED comments
content = re.sub(r'^\s*//\s*(REMOVED|DEPRECATED|DISABLED).*$\n?', '', content, flags=re.MULTILINE|re.IGNORECASE)

with open('positioneel.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Cleanup done!")
