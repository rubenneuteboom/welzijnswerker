import re

with open('positioneel.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

cleaned = []
blank_count = 0

for line in lines:
    # Skip if purely whitespace
    if line.strip() == '':
        blank_count += 1
        if blank_count <= 2:  # Max 2 blank lines
            cleaned.append(line)
    else:
        blank_count = 0
        # Remove trailing whitespace
        cleaned.append(line.rstrip() + '\n')

with open('positioneel.html', 'w', encoding='utf-8') as f:
    f.writelines(cleaned)

print(f"✅ Safe cleanup done! {len(lines)} → {len(cleaned)} lines")
