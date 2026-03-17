# Lees het bestand
with open('positioneel.html.backup', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Vind de start en eind van de functie
start_line = None
end_line = None
brace_count = 0

for i, line in enumerate(lines):
    if 'function renderInterventiesPerDomein()' in line:
        start_line = i
        brace_count = line.count('{') - line.count('}')
        continue
    
    if start_line is not None and end_line is None:
        brace_count += line.count('{') - line.count('}')
        if brace_count == 0:
            end_line = i
            break

if start_line is None:
    print("FOUT: Start functie niet gevonden!")
    exit(1)

if end_line is None:
    print("FOUT: Eind functie niet gevonden!")
    exit(1)

print(f"✅ Functie gevonden: regel {start_line+1} tot {end_line+1}")

# Lees nieuwe functie
with open('nieuwe-interventies-render.js', 'r', encoding='utf-8') as f:
    new_function = f.read()

# Remove eerste comment regel
new_function_lines = new_function.strip().split('\n')[1:]  # Skip comment line

# Bouw nieuwe file
new_lines = lines[:start_line] + ['\n'.join(new_function_lines) + '\n'] + lines[end_line+1:]

# Schrijf
with open('positioneel.html', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print(f"✅ SUCCESS! Functie vervangen.")
print(f"   Verwijderd: {end_line - start_line + 1} regels")
print(f"   Toegevoegd: {len(new_function_lines)} regels")
