# Verbeterde Netwerkanalyse v2

## Probleemstelling

De huidige netwerkanalyse is te simplistisch:
- Telt alleen aantal personen (informeel vs formeel)
- Geen rekening met kwaliteit van contacten (ratings)
- Geen doel-netwerktype aanbeveling
- Geen concrete actiestappen voor groei

## Nieuwe Analyse Logica

### 1. Uitgebreide Netwerkanalyse

```javascript
function analyzeNetwork() {
    const informal = state.network.filter(p => 
        ['familie', 'vriend', 'buur', 'collega'].includes(p.type)
    );
    const formal = state.network.filter(p => p.type === 'professional');
    
    // Bereken kwaliteit (gemiddelde ratings)
    const informalQuality = informal.length > 0 
        ? informal.map(p => state.ratings[p.id] || 5).reduce((a,b) => a+b, 0) / informal.length 
        : 0;
    const formalQuality = formal.length > 0
        ? formal.map(p => state.ratings[p.id] || 5).reduce((a,b) => a+b, 0) / formal.length
        : 0;
    
    // Bepaal huidig type
    let currentType;
    if (informal.length <= 1 && formal.length === 0) {
        currentType = 'eenpersoons';
    } else if (formal.length === 0) {
        currentType = 'informeel';
    } else if (informal.length > 0 && formal.length > 0) {
        currentType = 'gemengd';
    } else {
        currentType = 'formeel';
    }
    
    return {
        currentType,
        informalCount: informal.length,
        formalCount: formal.length,
        informalQuality,
        formalQuality,
        totalSize: state.network.length
    };
}
```

### 2. Doel-Netwerktype Bepalen

Gebaseerd op:
- **Huidige situatie** (waar ben je nu?)
- **Domeinscores** (waar heb je hulp nodig?)
- **Netwerkgrootte** (is je netwerk groot genoeg?)

```javascript
function determineTargetNetwork(analysis) {
    const avgScore = Object.values(state.scores).reduce((a,b) => a+b, 0) / 11;
    const lowestScores = Object.entries(state.scores)
        .sort((a,b) => a[1] - b[1])
        .slice(0, 3)
        .map(([id, score]) => ({ id, score }));
    
    // Logica:
    // - Eenpersoons → altijd eerst naar informeel
    // - Informeel → als scores < 5: naar gemengd (professionele hulp nodig)
    // - Formeel → als scores stabiel (>6): naar gemengd (meer informeel)
    // - Gemengd → behoud gemengd, optimaliseer kwaliteit
    
    if (analysis.currentType === 'eenpersoons') {
        return {
            target: 'informeel',
            reason: 'Een groter informeel netwerk biedt meer dagelijkse steun en verbinding.',
            priority: 'urgent'
        };
    }
    
    if (analysis.currentType === 'informeel') {
        if (avgScore < 5 || lowestScores[0].score < 3) {
            return {
                target: 'gemengd',
                reason: 'Bij meerdere complexe uitdagingen is professionele ondersteuning waardevol naast je informele netwerk.',
                priority: 'belangrijk'
            };
        } else {
            return {
                target: 'informeel',
                reason: 'Versterk je huidige informele netwerk met meer diverse contacten.',
                priority: 'verbetering'
            };
        }
    }
    
    if (analysis.currentType === 'formeel') {
        return {
            target: 'gemengd',
            reason: 'Professionals zijn belangrijk, maar informele contacten bieden structurele steun op de lange termijn.',
            priority: 'belangrijk'
        };
    }
    
    if (analysis.currentType === 'gemengd') {
        // Check balans
        const ratio = analysis.informalCount / analysis.formalCount;
        if (ratio < 1) {
            return {
                target: 'gemengd',
                reason: 'Balans verbeteren: meer informele contacten om minder afhankelijk te zijn van professionals.',
                priority: 'verbetering'
            };
        } else {
            return {
                target: 'gemengd',
                reason: 'Je netwerk is goed gemengd. Focus op kwaliteit van de contacten.',
                priority: 'behouden'
            };
        }
    }
}
```

### 3. Concrete Acties voor Transitie

Per transitie specifieke actiestappen:

```javascript
function getNetworkGrowthActions(currentType, targetType, analysis) {
    const transitions = {
        'eenpersoons->informeel': [
            {
                title: '🚶 Kleine stappen',
                actions: [
                    'Maak contact met één buurpersoon (bijv. bij het ophalen van de post)',
                    'Bezoek één buurtactiviteit (bibliotheek, wijkcentrum)',
                    'Vraag een bekende om samen te wandelen of koffie te drinken'
                ]
            },
            {
                title: '🤝 Gestructureerde ontmoetingen',
                actions: [
                    'Meld je aan bij een maatjesproject via Humanitas',
                    'Sluit je aan bij een praatgroep of cursus',
                    'Bezoek een ontmoetingscentrum in je wijk'
                ]
            }
        ],
        'informeel->gemengd': [
            {
                title: '👨‍⚕️ Professionele hulp inschakelen',
                actions: [
                    'Maak een afspraak met het sociaal wijkteam',
                    'Vraag huisarts om doorverwijzing naar passende zorg',
                    'Neem contact op met welzijnsorganisatie voor intake'
                ]
            },
            {
                title: '📋 Coördinatie opzetten',
                actions: [
                    'Organiseer een netwerkberaad met informele én formele contacten',
                    'Bespreek wie waarvoor aanspreekpunt is',
                    'Maak afspraken over communicatie tussen helpers'
                ]
            }
        ],
        'formeel->gemengd': [
            {
                title: '🌱 Informele contacten opbouwen',
                actions: [
                    'Vraag je wijkverpleegkundige om contact met ervaringsdeskundige',
                    'Sluit je aan bij een zelfhulpgroep of lotgenotencontact',
                    'Neem deel aan activiteiten via welzijnsorganisatie'
                ]
            },
            {
                title: '🔄 Professionals betrekken informeel netwerk',
                actions: [
                    'Vraag of een familielid bij gesprekken kan zijn',
                    'Deel het zorgplan met vertrouwde informele contacten',
                    'Vraag professionals om informele helpers te ondersteunen'
                ]
            }
        ],
        'gemengd->gemengd': [
            {
                title: '⚖️ Balans verbeteren',
                actions: [
                    'Bespreek met professionals hoe informele helpers beter betrokken kunnen worden',
                    'Organiseer 1x per 3 maanden een netwerkoverleg',
                    'Vraag informele contacten wat ze nodig hebben om te helpen'
                ]
            },
            {
                title: '💪 Kwaliteit verhogen',
                actions: [
                    'Evalueer met lage ratings (< 5): wat kan beter?',
                    'Bespreek verwachtingen en grenzen met helpers',
                    'Waardeer je netwerk: stuur een bedankje of uitnodiging'
                ]
            }
        ]
    };
    
    const key = `${currentType}->${targetType}`;
    return transitions[key] || transitions['gemengd->gemengd'];
}
```

## UI Weergave

### Dashboard Card: "Jouw Netwerk Groeipad"

```html
<div class="network-growth-card">
    <div class="current-target">
        <div class="network-state">
            <span class="badge red">🔴 Huidig: Eenpersoons</span>
        </div>
        <div class="arrow">→</div>
        <div class="network-state">
            <span class="badge orange">🟠 Doel: Informeel netwerk</span>
        </div>
    </div>
    
    <div class="growth-reason">
        <p><strong>Waarom?</strong> Een groter informeel netwerk biedt meer dagelijkse steun en verbinding.</p>
        <span class="priority urgent">Urgentie: Urgent</span>
    </div>
    
    <div class="growth-actions">
        <h4>🚶 Kleine stappen</h4>
        <ul>
            <li><input type="checkbox"> Maak contact met één buurpersoon</li>
            <li><input type="checkbox"> Bezoek één buurtactiviteit</li>
            <li><input type="checkbox"> Vraag een bekende om samen te wandelen</li>
        </ul>
        
        <h4>🤝 Gestructureerde ontmoetingen</h4>
        <ul>
            <li><input type="checkbox"> Meld je aan bij maatjesproject</li>
            <li><input type="checkbox"> Sluit je aan bij praatgroep</li>
        </ul>
    </div>
</div>
```

## Implementatie Stappen

1. Voeg `analyzeNetwork()` functie toe
2. Voeg `determineTargetNetwork()` functie toe  
3. Voeg `getNetworkGrowthActions()` functie toe
4. Voeg nieuwe UI sectie toe aan dashboard (na spider chart)
5. Styling toevoegen voor groeipad visualisatie
6. Acties kunnen worden toegevoegd aan Kanban board

## Data Logging

Voor toekomstig dashboard:

```javascript
history.networkGrowth = [
    {
        date: '2026-02-08',
        currentType: 'eenpersoons',
        targetType: 'informeel',
        actionsCompleted: [],
        informalCount: 1,
        formalCount: 0
    }
];
```
