#!/usr/bin/env python3
with open('positioneel.html', 'r') as f:
    content = f.read()

# Voeg label update toe na loadState
old = """        // Herstel doelgroep-checkboxes
        if (state.doelgroepen && state.doelgroepen.length > 0) {
            state.doelgroepen.forEach(doelgroep => {
                const checkbox = document.getElementById(`doelgroep-${doelgroep}`);
                if (checkbox) {
                    checkbox.checked = true;"""

new = """        // Herstel doelgroep-checkboxes en label
        if (state.doelgroepen && state.doelgroepen.length > 0) {
            // Update label in intake
            const doelgroepLabel = document.getElementById('doelgroepLabel');
            if (doelgroepLabel) {
                doelgroepLabel.textContent = state.doelgroepen.join(', ');
            }
            
            state.doelgroepen.forEach(doelgroep => {
                const checkbox = document.getElementById(`doelgroep-${doelgroep}`);
                if (checkbox) {
                    checkbox.checked = true;"""

content = content.replace(old, new, 1)  # Alleen eerste vervangen

with open('positioneel.html', 'w') as f:
    f.write(content)

print("✅ Doelgroep label update toegevoegd")
