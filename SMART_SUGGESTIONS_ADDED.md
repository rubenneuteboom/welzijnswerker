# Smart Suggestions - Week 1 Implementatie

**Status:** Ready to implement
**Datum:** 20 maart 2026

## Wat wordt toegevoegd:

### 1. Pattern Database (Done ✅)
- Basis patronen voor autisme, depressie, verslaving, jongeren
- Per doelgroep: positie, wie, confidence score
- UserPatterns object voor personal learning

### 2. Core Functionaliteit (To implement):

```javascript
// SMART SUGGESTIONS SYSTEM
function getSmartSuggestion(domeinId, doelgroepen) {
    let suggestions = [];
    
    // Check patterns for each doelgroep
    doelgroepen.forEach(dg => {
        const pattern = smartSuggestions.patterns[dg.toLowerCase()];
        if (pattern && pattern.domeinen[domeinId]) {
            suggestions.push(pattern.domeinen[domeinId]);
        }
    });
    
    // Check user's own patterns
    const userPattern = smartSuggestions.userPatterns[`${domeinId}_${doelgroepen.join('_')}`];
    if (userPattern) {
        suggestions.unshift(userPattern); // Prioriteer eigen patronen
    }
    
    // Return highest confidence
    return suggestions.sort((a,b) => b.confidence - a.confidence)[0];
}

function applyGhostText(inputId, suggestion) {
    const input = document.getElementById(inputId);
    if (!input || !suggestion) return;
    
    // Add ghost text styling
    input.placeholder = `${suggestion.wie} (${Math.round(suggestion.confidence * 100)}% vaak gebruikt)`;
    input.dataset.suggestion = suggestion.wie;
    
    // Tab to accept
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' && !input.value && input.dataset.suggestion) {
            e.preventDefault();
            input.value = input.dataset.suggestion;
            recordSuggestionAccepted(inputId, suggestion);
        }
    });
}

function recordSuggestionAccepted(inputId, suggestion) {
    // Learn from user's choice
    const context = getCurrentContext(); // doelgroep + domein
    if (!smartSuggestions.userPatterns[context]) {
        smartSuggestions.userPatterns[context] = { ...suggestion, count: 1 };
    } else {
        smartSuggestions.userPatterns[context].count++;
    }
    
    // Save to localStorage
    localStorage.setItem('rpa_smart_patterns', JSON.stringify(smartSuggestions.userPatterns));
}
```

### 3. UI Integration Points:

**Waar toe te voegen:**
- Supporter naam invoer (line ~10913)
- Positie keuze (formeel/collectief/informeel)
- Interventie selectie

**Visual Design:**
- Lichtgrijze placeholder tekst
- Confidence score in %
- Tab om te accepteren
- Gewoon typen = overschrijft

### 4. Feedback System (Later):

```javascript
function addSuggestionFeedback(suggestionId, helpful) {
    smartSuggestions.feedback[suggestionId] = helpful;
    // Update confidence scores based on feedback
    updateConfidenceScores();
}
```

## Volgende Sessie:

Implementeer bovenstaande functies in positioneel.html en test met:
1. Nieuwe cliënt met doelgroep "autisme"
2. Vul domein "ggz" in
3. Zie ghost text: "GGZ-behandeling (92% vaak gebruikt)"
4. Druk Tab = geaccepteerd
5. Controleer of pattern wordt opgeslagen

## Geschatte Impact:

**Voor:**
- 45 minuten per cliënt
- 11 domeinen handmatig invullen

**Na:**
- 15-20 minuten per cliënt  
- 6-8 domeinen auto-suggested
- 3-5 domeinen handmatig

**Tijdsbesparing: ~25 minuten per cliënt (55%)**
