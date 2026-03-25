#!/usr/bin/env python3

with open('positioneel.html', 'r') as f:
    lines = f.readlines()

# Find the optional fields section (lines 4151-4269, 0-indexed: 4150-4268)
optional_start = 4150  # Line 4151
optional_end = 4269    # Line 4270 (exclusive)

# Extract the optional fields section
optional_section = lines[optional_start:optional_end]

# Remove from current position
del lines[optional_start:optional_end]

# Find where to insert: after "Naam cliënt" div (around line 4084+15 = 4099)
# Search for the closing </div> after clientNaam input
insert_index = None
for i in range(4084, 4120):
    if i < len(lines) and '</div>' in lines[i] and 'Naam cliënt' in ''.join(lines[max(0,i-15):i]):
        insert_index = i + 1
        break

if insert_index is None:
    # Fallback: insert after line with clientNaam input
    for i in range(4084, 4120):
        if i < len(lines) and 'id="clientNaam"' in lines[i]:
            # Find next </div>
            for j in range(i, min(i+10, len(lines))):
                if '</div>' in lines[j]:
                    insert_index = j + 1
                    break
            break

if insert_index:
    # Insert with a blank line before
    lines.insert(insert_index, '\n')
    for line in reversed(optional_section):
        lines.insert(insert_index, line)
    
    with open('positioneel.html', 'w') as f:
        f.writelines(lines)
    
    print(f"✅ Moved optional fields to line {insert_index}")
else:
    print("❌ Could not find insertion point")
