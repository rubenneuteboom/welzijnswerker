#!/usr/bin/env python3
import re

with open('positioneel.html', 'r') as f:
    content = f.read()

old_pattern = r"""        // Start op INTRO scherm \(scherm 1\)
        if \(state\.currentScreen && state\.currentScreen >= 1\) \{
            // Hervat waar je was
            goToScreen\(state\.currentScreen\);
        \} else \{
            // Begin bij intro \(scherm 1\)
            goToScreen\(1\);
        \}"""

new_code = """        // Start logic: ga naar juiste scherm
        if (state.clientName && state.mode) {
            // Er is al data - ga naar domains
            goToScreenById('domains');
        } else if (state.mode && !state.clientName) {
            // Organisatie gekozen, maar geen naam - ga naar naam/track
            goToScreenById('screen-naam-track');
            const orgLabels = {
                'wijkteam': 'Wijkteam', 'ggz': 'GGZ', 'mantelzorg': 'Mantelzorg',
                'schuldhulp': 'Schuldhulp', 'ouderenzorg': 'Ouderenzorg', 'opvang': 'Opvang',
                'reclassering': 'Reclassering', 'verslavingszorg': 'Verslavingszorg'
            };
            const label = document.getElementById('organisatieLabel');
            if (label && state.mode) label.textContent = `Je werkt vanuit: ${orgLabels[state.mode] || state.mode}`;
            const naamInput = document.getElementById('clientNaam');
            if (naamInput) naamInput.value = state.clientName || '';
        } else {
            // Nog geen data - begin bij organisatie kiezer
            goToScreenById('screen-organisatie');
        }"""

content = re.sub(old_pattern, new_code, content)

with open('positioneel.html', 'w') as f:
    f.write(content)

print("✅ Init sections replaced")
