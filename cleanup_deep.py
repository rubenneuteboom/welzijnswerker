import re

with open('positioneel.html', 'r', encoding='utf-8') as f:
    content = f.read()

original_lines = content.count('\n')

# 1. Remove HTML comments (behalve belangrijke docstrings)
content = re.sub(r'<!--[^>]*?v\d+\.\d+[^>]*?-->', '', content, flags=re.DOTALL)  # Version comments
content = re.sub(r'<!--\s*Wijzigingen.*?-->', '', content, flags=re.DOTALL)
content = re.sub(r'<!--\s*Screen \d+:.*?DEPRECATED.*?-->', '', content, flags=re.DOTALL | re.IGNORECASE)

# 2. Remove excessive blank lines (max 2)
content = re.sub(r'\n{4,}', '\n\n\n', content)

# 3. Remove trailing whitespace
content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)

# 4. Remove empty console.log statements (debugging leftovers)
content = re.sub(r'^\s*console\.log\(\s*["\'].*?["\']\s*\);\s*$\n?', '', content, flags=re.MULTILINE)

new_lines = content.count('\n')

with open('positioneel.html', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"✅ Cleanup: {original_lines} → {new_lines} lines (saved {original_lines - new_lines})")
