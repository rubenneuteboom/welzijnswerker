# RPA Niveau 2 - Redesign Wireframes
*Versie: 2026-03-24 | Team: Marie, Bram, Suus, Lisa, Karin*

---

## 🎯 Doel Redesign
**Van 21 schermen → 8 schermen**
- Minder clicks, meer overzicht
- Geen dubbele data-invoer
- Methodologie intact (zelfs sterker)

---

## 📊 Scherm Overzicht (Nieuwe Flow)

| # | Scherm | Functie | Samenvoegen van |
|---|--------|---------|-----------------|
| 1 | **Start & Context** | Organisatie + hulpvraag + toestemming | organisatie, intro, start, hulpvraag, hulpvraag-focus |
| 2 | **Domeinen Scan** | Alle 11 domeinen (accordion) | quickscan, triage, domains |
| 3 | **Netwerkpositie** | Huidige positie (afgeleid) | network, netwerkpositie |
| 4 | **Gewenste Beweging** | Beoogde positie + waarom | beweging (blijft) |
| 5 | **Interventies & Resources** | Lokale hulp (tabs) | interventies, organisaties, activiteiten |
| 6 | **Team Besluit** | Wie doet wat? | team (blijft) |
| 7 | **Reflectie** | Voor/na analyse | reflectie (blijft) |
| 8 | **Samenvatting** | Alles samen (accordion) | samenvatting, summary, advies, advies-pro |

---

## 🖼️ SCHERM 1: Start & Context

### Layout Schets
```
┌─────────────────────────────────────────────────┐
│  🏘️ Vanuit welke organisatie werk je?          │
│  [8 iconen: Wijkteam, GGZ, Mantelzorg, etc.]   │
│  → Auto-vult doelgroep                          │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  ℹ️ [Voor professionals] (inklapbaar)           │
│  • Wat is positionele analyse?                  │
│  • Wanneer gebruiken?                           │
│  • Netwerkposities diagram                      │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  💬 Netwerkgesprek                              │
│                                                 │
│  👤 Naam cliënt: [__________] (optioneel)       │
│                                                 │
│  📋 Toestemming informatie-uitwisseling:        │
│  [✅ Ja akkoord] [🔒 Nee] [💬 Later bespreken]  │
│                                                 │
│  🎯 Wat zou je graag anders willen?            │
│  ┌─────────────────────────────────────────┐   │
│  │ [Groot tekstveld]                       │   │
│  │ "Vertel in eigen woorden..."            │   │
│  │                                         │   │
│  │ 💡 Tip: Denk aan: werk, wonen,          │   │
│  │    financiën, gezondheid, relaties      │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  ⚙️ [Extra instellingen] (inklapbaar)           │
│  • Postcode: [____]                             │
│  • Vervolggesprek? Vorige datum/notitie        │
└─────────────────────────────────────────────────┘

              [← Terug] [Start gesprek →]
```

### Data Model
```javascript
state.start = {
  organisatie: 'wijkteam',      // auto-set doelgroep
  clientNaam: '',               // optioneel
  toestemming: 'ja',            // ja/nee/later
  hulpvraag: '',                // hoofdvraag (was verspreid over 3 schermen)
  postcode: '',                 // voor lokale tips
  vorigGesprek: {
    datum: null,
    notitie: ''
  }
}
```

### UX Verbeteringen t.o.v. Oud
✅ **Alles op 1 scherm** (was: organisatie → intro → start → hulpvraag → hulpvraag-focus = 5 schermen)  
✅ **Hulpvraag in 1x** (was: 3 verschillende velden verspreid)  
✅ **Context niet vergeten** (organisatie bepaalt doelgroep-specifieke vragen later)  
✅ **Snelle start voor ervaren gebruikers** (alles inklapbaar)

---

## 🖼️ SCHERM 2: Domeinen Scan (ACCORDION)

### Layout Schets
```
┌─────────────────────────────────────────────────┐
│  📊 OVERZICHT (sticky - blijft zichtbaar)       │
│  ┌──────────────┬──────────────────────────┐   │
│  │ Spinnenweb   │ Risico Indicator         │   │
│  │ [Chart]      │ 🔴 3 urgent              │   │
│  │ (live update)│ 🟡 2 aandacht            │   │
│  │              │ 🟢 6 gaat goed           │   │
│  └──────────────┴──────────────────────────┘   │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ 💰 Financiën                    [🔴 Urgent ▼]   │ ← Uitgeklapt
│ ├─ Hoe gaat het?                                │
│ │  [🔴 Urgent] [🟡 Aandacht] [🟢 Gaat goed]     │
│ │                                               │
│ │  🤔 Waar denk je aan bij financiën?           │
│ │  [Tekstveld: bijv. schulden, geen inkomen...] │
│ │                                               │
│ ├─ Steun aanwezig?                              │
│ │  [🟢 Zelfstandig] [🟡 Aanwezig] [🔴 Nodig]    │
│ │                                               │
│ │  ↓ (als 'Aanwezig' geselecteerd)             │
│ │  Type steun: [v Professioneel ▼]             │
│ │              [Collectief / Informeel]         │
│ │  Wie: [v Schuldhulpverlener Jan ▼]            │
│ │       (dropdown o.b.v. type)                  │
│ │  Wat: [Budgetbeheer + schuldsanering___]      │
│ │                                               │
│ └─ 💡 GGZ tip: Schulden vaak gekoppeld aan      │
│    stress → check ook Geestelijke gezondheid   │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ 💼 Dagbesteding                 [⚪ Nog niet ▼]  │ ← Ingeklapt
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ 🏠 Huisvesting                  [🟢 Gaat goed ▼]│ ← Ingeklapt
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ 👨‍👩‍👧 Huiselijke relaties          [⚪ Nog niet ▼]│
└─────────────────────────────────────────────────┘

... (7 meer domeinen)

┌─────────────────────────────────────────────────┐
│ ⚖️ Justitie                      [⚪ Nog niet ▼] │
└─────────────────────────────────────────────────┘

              [← Terug] [Ga door →]
                     ↓
         (Alleen actief als min. 1 domein ingevuld)
```

### Data Model
```javascript
state.domeinen = {
  financien: {
    status: 'urgent',         // urgent/aandacht/goed/null
    notitie: 'Schulden...',   // vrije tekst
    steun: 'aanwezig',        // zelfstandig/aanwezig/nodig
    steunDetails: {           // alleen bij 'aanwezig'
      type: 'professioneel',  // professioneel/collectief/informeel
      wie: 'Schuldhulpverlener Jan',
      wat: 'Budgetbeheer + schuldsanering'
    }
  },
  dagbesteding: {
    status: null,             // nog niet ingevuld
    notitie: '',
    steun: null,
    steunDetails: null
  },
  // ... 9 andere domeinen
}
```

### Accordion Gedrag
- **Default:** Alle domeinen ingeklapt
- **Doelgroep-hint:** Domeinen die vaak voorkomen bij geselecteerde organisatie staan bovenaan met subtiele highlight
  - Bijv. GGZ → Geestelijke gezondheid, Verslaving, Huiselijke relaties bovenaan
  - Wijkteam → Financiën, Dagbesteding, Sociaal netwerk bovenaan
- **Spinnenweb update:** Real-time bij elke status wijziging
- **Scroll gedrag:** Sticky header met overzicht blijft zichtbaar
- **Validatie:** Knop "Ga door" pas actief als minimaal 1 domein ingevuld

### Cross-domein Tips (Suus' input)
Als je een domein invult, krijg je context-aware tips:
- **Financiën urgent** → "💡 Check ook: Dagbesteding (inkomen?), Huisvesting (huur betalen?)"
- **GGZ urgent** → "💡 Check ook: Verslaving, Huiselijke relaties, ADL-vaardigheden"
- **Mantelzorger geselecteerd** → "⚠️ Let op overbelasting: Check Geestelijke gezondheid van mantelzorger zelf"

### UX Verbeteringen t.o.v. Oud
✅ **Overzicht behouden** (spinnenweb + scores altijd zichtbaar)  
✅ **Flexibel navigeren** (kan heen en weer tussen domeinen)  
✅ **Eén keer invullen** (was: quickscan → triage → domains = 3x)  
✅ **Context-aware** (tips op basis van andere domeinen + doelgroep)  
✅ **Visuele feedback** (spinnenweb groeit real-time)

---

## 🖼️ SCHERM 3: Netwerkpositie (AFGELEID)

### Layout Schets
```
┌─────────────────────────────────────────────────┐
│  🕸️ Waar staat [Naam] nu?                       │
│                                                 │
│  Op basis van de domein-scan zie ik:            │
│  ┌─────────────────────────────────────────┐   │
│  │  Financiën:   🔴 Professioneel (Jan)    │   │
│  │  Huisvesting: 🟢 Informeel (zus Marie)  │   │
│  │  GGZ:         🔵 Formeel (FACT-team)    │   │
│  │  Dagbesteding: ⚪ Niemand               │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  → Dit lijkt op een 🟣 GEMENGD NETWERK          │
│    (Formeel + Informeel + gaten)                │
│                                                 │
│  Klopt dit?                                     │
│  [✅ Ja, dat klopt] [✏️ Nee, pas aan]           │
│                                                 │
│  ↓ (als je aanpast)                             │
│  Kies de positie die het beste past:            │
│  [Visueel: 5 posities klikbaar]                │
│  🟡 1-persoons → 🟢 Informeel → 🟣 Gemengd →   │
│  🔵 Formeel → ⚪ Geen                            │
└─────────────────────────────────────────────────┘

              [← Terug] [Ga door →]
```

### Automatische Positie-Bepaling (Bram's logica)
```javascript
function bepaalNetwerkpositie() {
  let professioneel = 0;
  let collectief = 0;
  let informeel = 0;
  let niemand = 0;
  let enkelPersoon = null; // track als alles op 1 persoon rust
  
  for (let domein in state.domeinen) {
    if (state.domeinen[domein].steun === 'aanwezig') {
      const type = state.domeinen[domein].steunDetails.type;
      if (type === 'professioneel') professioneel++;
      else if (type === 'collectief') collectief++;
      else if (type === 'informeel') {
        informeel++;
        // Check of het steeds dezelfde persoon is
        const wie = state.domeinen[domein].steunDetails.wie;
        if (!enkelPersoon) enkelPersoon = wie;
        else if (enkelPersoon !== wie) enkelPersoon = 'meerdere';
      }
    } else if (state.domeinen[domein].steun === 'nodig') {
      niemand++;
    }
  }
  
  // Beslislogica
  if (informeel > 0 && enkelPersoon !== 'meerdere') {
    return 'eenpersoons'; // Alles op 1 informele persoon
  } else if (professioneel === 0 && collectief === 0 && informeel > 0) {
    return 'informeel'; // Alleen informeel netwerk
  } else if (professioneel > 0 && collectief === 0 && informeel === 0) {
    return 'formeel'; // Alleen professioneel
  } else if (professioneel > 0 || collectief > 0 || informeel > 0) {
    return 'gemengd'; // Mix
  } else {
    return 'geen'; // Nauwelijks/geen steun
  }
}
```

### Data Model
```javascript
state.netwerkpositie = {
  huidig: 'gemengd',           // automatisch berekend
  handmatigAangepast: false,   // track of professional override doet
  breakdown: {                 // voor visualisatie
    professioneel: ['Schuldhulpverlener Jan', 'FACT-team'],
    collectief: [],
    informeel: ['Zus Marie']
  }
}
```

### UX Verbeteringen t.o.v. Oud
✅ **Geen dubbel werk** (was: netwerkpositie los invullen terwijl data al bekend was)  
✅ **Transparante logica** ("Ik zie dit, daarom denk ik...")  
✅ **Override mogelijk** (professional kan afwijken met reden)  
✅ **Visuele breakdown** (wie doet wat per domein)

---

## 🖼️ SCHERM 4: Gewenste Beweging

### Layout (BLIJFT GROTENDEELS ZOALS HET IS)
```
┌─────────────────────────────────────────────────┐
│  🔄 Waar moet [Naam] naartoe?                    │
│                                                 │
│  Huidig:  🟣 Gemengd netwerk                    │
│           (formeel + informeel, gaten)          │
│           ↓                                     │
│  Beoogd:  [v Informeel netwerk ▼]               │
│           (kies uit 5 opties)                   │
│                                                 │
│  💡 Waarom deze beweging?                       │
│  ┌─────────────────────────────────────────┐   │
│  │ [Tekstveld]                             │   │
│  │ Bijv: "Zus Marie is overbelast.        │   │
│  │ Willen breder informeel netwerk         │   │
│  │ activeren (buren, vrijwilligers)        │   │
│  │ zodat druk verdeeld wordt."             │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  Prioriteit:                                    │
│  [🔴 Urgent] [🟡 Belangrijk] [🟢 Verbetering]   │
│                                                 │
│  🎯 Concrete stappen (check wat gedaan wordt):  │
│  ☐ Zus Marie ontlasten                          │
│  ☐ Buurman Tom vragen voor boodschappen         │
│  ☐ Vrijwilligersorganisatie inschakelen         │
│  ☐ [+ Voeg stap toe]                            │
└─────────────────────────────────────────────────┘

              [← Terug] [Ga door →]
```

### Data Model (BLIJFT)
```javascript
state.beweging = {
  van: 'gemengd',
  naar: 'informeel',
  waarom: '...',
  prioriteit: 'urgent',
  stappen: [
    { tekst: 'Zus Marie ontlasten', gedaan: false },
    // ...
  ]
}
```

### UX: Geen wijzigingen nodig
✅ Dit scherm werkt goed volgens alle teamleden  
✅ Methodologisch de kern van RPA niveau 2

---

## 🖼️ SCHERM 5: Interventies & Resources (TABS)

### Layout Schets
```
┌─────────────────────────────────────────────────┐
│  📚 Wat kan helpen?                             │
│                                                 │
│  [📋 Interventies] [🏢 Organisaties] [🎯 Activiteiten] ← Tabs
│                                                 │
│  TAB 1: Interventies (actief)                   │
│  ┌─────────────────────────────────────────┐   │
│  │ 🎯 Gefilterd op:                        │   │
│  │ • Amsterdam (postcode 10xx-13xx)        │   │
│  │ • GGZ doelgroep                          │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  ☐ Schuldhulpverlening Oost                     │
│     📍 Linnaeusstraat 10  📞 020-1234567        │
│                                                 │
│  ☐ FACT-team Noord                              │
│     📍 IJdoornlaan 5  📞 020-7654321            │
│                                                 │
│  ☐ ... (meer interventies)                      │
│                                                 │
│  [Filter aanpassen]                             │
└─────────────────────────────────────────────────┘

              [← Terug] [Ga door →]
```

### Data Model
```javascript
state.interventies = {
  geselecteerd: ['schuldhulpverlening-oost', 'fact-team-noord'],
  filters: {
    postcode: '1012',
    doelgroep: ['ggz']
  }
}
```

### UX Verbeteringen t.o.v. Oud
✅ **Alles in 1 context** (was: 3 aparte schermen)  
✅ **Tabbladen** (snel switchen zonder flow te verliezen)  
✅ **Selectie bijhouden** (checkboxes blijven staan bij tab-switch)

---

## 🖼️ SCHERM 6, 7, 8: Blijven grotendeels zoals ze zijn

### Scherm 6: Team Besluit
**Status:** ✅ Blijft (geen wijzigingen nodig)

### Scherm 7: Reflectie
**Status:** ✅ Blijft (geen wijzigingen nodig)

### Scherm 8: Samenvatting
**Wijziging:** Voeg toe:
- Accordion voor alle secties (ipv aparte schermen)
- "Export voor Niveau 3" knop (al aanwezig, blijft)
- Print-vriendelijke layout (al aanwezig, blijft)

---

## 📊 Data Migration Plan

### Bestaande state → Nieuwe state
```javascript
// OUD (verspreid over 21 schermen)
state.mode = 'assessment';
state.clientInfo = { naam: '...', organisatie: '...' };
state.hulpvraag = '...';
state.domains = { financien: { score: 1, ... }, ... };
state.network = { positie: 'gemengd', ... };
// ... (verspreid)

// NIEUW (geconsolideerd in 8 schermen)
state = {
  start: {
    organisatie: '...',
    clientNaam: '...',
    toestemming: '...',
    hulpvraag: '...',      // was verspreid
    postcode: '...',
    vorigGesprek: { ... }
  },
  domeinen: {
    financien: {
      status: '...',       // was 'score'
      notitie: '...',
      steun: '...',
      steunDetails: { ... }
    },
    // ... 10 meer
  },
  netwerkpositie: {
    huidig: '...',         // automatisch afgeleid
    handmatigAangepast: false,
    breakdown: { ... }
  },
  beweging: { ... },       // blijft
  interventies: { ... },   // blijft (maar tabs toegevoegd)
  team: { ... },           // blijft
  reflectie: { ... },      // blijft
  samenvatting: { ... }    // blijft
}
```

### Migratie Functie
```javascript
function migrateOldState(oldState) {
  return {
    start: {
      organisatie: oldState.clientInfo?.organisatie || '',
      clientNaam: oldState.clientInfo?.naam || '',
      toestemming: oldState.toestemming || 'later',
      hulpvraag: oldState.hulpvraag || '',
      postcode: oldState.postcode || '',
      vorigGesprek: oldState.vorigGesprek || { datum: null, notitie: '' }
    },
    domeinen: migrateDomains(oldState.domains),
    netwerkpositie: {
      huidig: oldState.network?.positie || null,
      handmatigAangepast: false,
      breakdown: extractBreakdown(oldState.domains)
    },
    // ... rest blijft grotendeels
  };
}
```

---

## 🧪 Demo Modus (Karin's verzoek)

### Functionaliteit
- Knop "💡 Demo met voorbeeldcliënt" op Scherm 1
- Vult automatisch een realistisch scenario in:
  - Naam: "Emma de Vries (voorbeeld)"
  - Hulpvraag: "Mijn zus doet alles voor me, maar zij raakt uitgeput..."
  - 5 domeinen ingevuld (financiën urgent, GGZ aandacht, etc.)
  - Netwerk: 1-persoons (alles op zus)
  - Beweging: naar informeel (breder netwerk)
- Professionals kunnen doorlopen zonder echte data te maken
- Duidelijk watermerk: "🧪 DEMO MODUS"

### Implementation
```javascript
const DEMO_DATA = {
  start: {
    organisatie: 'wijkteam',
    clientNaam: 'Emma de Vries (voorbeeld)',
    toestemming: 'ja',
    hulpvraag: 'Mijn zus Marie doet alles voor me (boodschappen, dokter, financiën). Maar ze heeft zelf ook een baan en kinderen. Ik zie dat ze moe is en ik wil haar niet zo belasten.',
    postcode: '1012AB'
  },
  domeinen: {
    financien: {
      status: 'urgent',
      notitie: 'Schulden opgelopen, brief van deurwaarder',
      steun: 'aanwezig',
      steunDetails: {
        type: 'informeel',
        wie: 'Zus Marie',
        wat: 'Regelt alle financiën, komt elke week langs'
      }
    },
    // ... 4 meer voorbeelden
  },
  // ...
};

function loadDemo() {
  state = { ...DEMO_DATA };
  state.isDemoMode = true;
  saveState();
  goToScreen(2); // Spring naar domeinen scan
}
```

---

## 📅 Implementatie Roadmap

### Sprint 1 (Week 1): Scherm 1 & 2
- [ ] Scherm 1: Start & Context (HTML/CSS)
- [ ] Scherm 2: Domeinen Accordion (HTML/CSS)
- [ ] State management refactor (start + domeinen)
- [ ] Spinnenweb live update
- [ ] Demo modus

### Sprint 2 (Week 2): Scherm 3 & 4
- [ ] Scherm 3: Netwerkpositie (afgeleid)
- [ ] Automatische positie-bepaling (logica)
- [ ] Scherm 4: Beweging (aanpassingen)
- [ ] Cross-domein tips (Suus' input)

### Sprint 3 (Week 3): Scherm 5-8
- [ ] Scherm 5: Interventies (tabs)
- [ ] Scherm 6-7: Geen wijzigingen (valideren)
- [ ] Scherm 8: Samenvatting (accordion)
- [ ] Print/export styling

### Sprint 4 (Week 4): Polish & Test
- [ ] Mobile responsive (accordion op klein scherm)
- [ ] Toegankelijkheid (keyboard nav, screen readers)
- [ ] User testing met Karin + 1 andere professional
- [ ] Feedback verwerken

---

## ✅ Success Metrics

**Na implementatie meten:**
1. **Tijd per gesprek** (target: <30 minuten, was: ~45 min)
2. **Aantal clicks** (target: <15, was: ~40)
3. **Data compleetheid** (target: >90% domeinen ingevuld bij relevante cases)
4. **User satisfaction** (Karin's feedback: "Zou je dit aanraden?" → target: 9/10)

---

*Volgende stap: Begin implementatie Sprint 1 - Scherm 1 & 2*
