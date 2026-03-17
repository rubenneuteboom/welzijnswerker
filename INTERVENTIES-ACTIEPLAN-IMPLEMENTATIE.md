# Interventies als Actieplan - 3 maart 2026

## 🎯 NIEUWE VISIE: Interventies = Concrete Acties

Interventies is NIET een database van opties, maar een **actieplan per domein** om de beweging te realiseren!

---

## 💡 CONCEPT

### **Van Abstract naar Concreet:**

```
BEWEGING (abstract):
"Van zelfstandig → professional + collectief"

↓

INTERVENTIES (concreet):
☐ Schuldhulpverlening aanvragen
☐ Budgetcoach 1x per week  
☐ Voedselbank 6 maanden
☐ Partner neemt administratie over
```

---

## 📋 FLOW

```
1️⃣ TRIAGE
Inventarisatie: Wie helpt er nu?

2️⃣ KWADRANT  
Visueel: Netwerk in beeld

3️⃣ BEWEGING
Strategie: Wat wil je bereiken? Welke richting?

4️⃣ INTERVENTIES ⭐ NIEUW
Actieplan: Welke concrete stappen per domein?

5️⃣ REFLECTIE
Validatie: Klopt dit actieplan?

6️⃣ SAMENVATTING + EXPORT
Gereed voor uitvoering (+ niveau 3)
```

---

## 🎨 SCHERM ONTWERP

### **Per domein met beweging:**

```
┌─────────────────────────────────────────┐
│ 💰 FINANCIËN                            │
│ Doel: Overzicht en grip krijgen        │
├─────────────────────────────────────────┤
│ VAN                  →  NAAR            │
│ 🔴 Geen steun           🔵 Professional │
│ (schulden €15k)         + 🟣 Collectief │
│                         + 🟢 Partner    │
├─────────────────────────────────────────┤
│ 🎯 CONCRETE ACTIES:                     │
│                                         │
│ ☑ Schuldhulpverlening Gemeente Amsterdam│
│   Aanvragen via wijkteam                │
│   📞 14020  🌐 amsterdam.nl/schuldhulp  │
│                                         │
│ ☑ Budgetcoach DeMeeuw                   │
│   1x per week, 6 maanden                │
│   📞 020-1234567                        │
│                                         │
│ ☐ Voedselbank Dapperbuurt               │
│   Di/Do 10-12u, gratis                  │
│   📍 Dapperstraat 123                   │
│                                         │
│ ☑ Partner neemt administratie over      │
│   Elke zondag samen doornemen           │
│                                         │
│ [+ Eigen actie toevoegen...]            │
└─────────────────────────────────────────┘
```

---

## 🔧 TECHNISCHE IMPLEMENTATIE

### **1. State structure:**

```javascript
state.interventies = {
    'financien': {
        acties: ['schuldhulp-gemeente', 'budgetcoach-demeeuw', 'partner-admin']
    },
    'sociaal': {
        acties: ['buurtcentrum-koffieochtend']
    }
}
```

### **2. Functies:**

```javascript
// Haal acties op voor een domein + beweging
function getActiesVoorBeweging(domeinId, richting) {
    // Kijk naar richting (informeel/collectief/formeel/minder)
    // Return relevante voorgestelde acties
    // Bijv. richting='formeel' → professionals
    //       richting='collectief' → buurtcentrum, verenigingen
    //       richting='informeel' → familie/vrienden helpt bij...
}

// Toggle actie aan/uit
function toggleActie(domeinId, actieId, checked) {
    if (!state.interventies) state.interventies = {};
    if (!state.interventies[domeinId]) {
        state.interventies[domeinId] = { acties: [] };
    }
    
    if (checked) {
        if (!state.interventies[domeinId].acties.includes(actieId)) {
            state.interventies[domeinId].acties.push(actieId);
        }
    } else {
        state.interventies[domeinId].acties = 
            state.interventies[domeinId].acties.filter(a => a !== actieId);
    }
    
    saveState();
}

// Voeg custom actie toe
function addCustomActie(domeinId, naam) {
    if (!naam.trim()) return;
    
    const id = 'custom_' + Date.now();
    const actie = { id, naam, beschrijving: '(Eigen toevoeging)', custom: true };
    
    // Voeg toe aan state
    if (!state.customActies) state.customActies = {};
    if (!state.customActies[domeinId]) state.customActies[domeinId] = [];
    state.customActies[domeinId].push(actie);
    
    // Check automatisch
    toggleActie(domeinId, id, true);
    
    // Re-render
    renderInterventiesVoorBeweging();
}
```

### **3. Actie database:**

```javascript
const actieDatabase = {
    financien: {
        formeel: [
            {
                id: 'schuldhulp-gemeente',
                naam: 'Schuldhulpverlening Gemeente Amsterdam',
                beschrijving: 'Aanvragen via wijkteam, wachttijd 6 weken',
                contact: {
                    telefoon: '14020',
                    website: 'https://www.amsterdam.nl/schuldhulpverlening'
                }
            },
            {
                id: 'budgetcoach',
                naam: 'Budgetcoach',
                beschrijving: '1x per week gedurende 6 maanden',
                contact: {
                    telefoon: '020-1234567'
                }
            },
            {
                id: 'bewindvoering',
                naam: 'Bewindvoering',
                beschrijving: 'Juridisch beheer van financiën',
                contact: {
                    website: 'https://www.nvvk.nl'
                }
            }
        ],
        collectief: [
            {
                id: 'voedselbank',
                naam: 'Voedselbank',
                beschrijving: 'Gratis voedsel, bespaart €200/mnd',
                contact: {
                    website: 'https://voedselbanken.nl'
                }
            },
            {
                id: 'kledingbank',
                naam: 'Kledingbank',
                beschrijving: 'Gratis kleding voor gezin',
                contact: {}
            }
        ],
        informeel: [
            {
                id: 'partner-admin',
                naam: 'Partner helpt met administratie',
                beschrijving: 'Samen wekelijks financiën doornemen'
            },
            {
                id: 'ouder-lening',
                naam: 'Familie kan tijdelijk lenen',
                beschrijving: 'Overbrugging tot schuldhulp start'
            }
        ]
    },
    sociaal: {
        formeel: [
            {
                id: 'maatschappelijk-werk',
                naam: 'Maatschappelijk werk',
                beschrijving: 'Gesprekken over eenzaamheid, doorverwijzing',
                contact: {
                    telefoon: '020-2345678'
                }
            }
        ],
        collectief: [
            {
                id: 'buurtcentrum',
                naam: 'Buurtcentrum koffieochtend',
                beschrijving: 'Elke dinsdag 10-12u, laagdrempelig',
                contact: {
                    website: 'https://buurtcentrumamsterdam.nl'
                }
            },
            {
                id: 'sportclub',
                naam: 'Sportvereniging',
                beschrijving: 'Lid worden, sociale contacten door sport'
            }
        ],
        informeel: [
            {
                id: 'buurman-koffie',
                naam: 'Koffie met buurman',
                beschrijving: 'Wekelijks contact met buren'
            }
        ]
    }
    // ... etc voor alle domeinen
};
```

---

## 📊 ACTIES OP BASIS VAN BEWEGING

### **Richting = Formeel:**
→ Toon professionals uit actieDatabase[domein].formeel

### **Richting = Collectief:**
→ Toon collectieve voorzieningen uit actieDatabase[domein].collectief

### **Richting = Informeel:**
→ Toon suggesties voor informeel netwerk uit actieDatabase[domein].informeel

### **Richting = Minder:**
→ Toon afbouw-acties (geleidelijk verminderen, uitfaseren)

---

## 🎯 VOORBEELDEN

### **Financiën: Van zelfstandig → professional + collectief**

**Voorgestelde acties:**
- ☑ Schuldhulpverlening aanvragen (formeel)
- ☑ Budgetcoach (formeel)
- ☐ Voedselbank (collectief)
- ☑ Partner helpt administratie (informeel - custom)

### **Sociaal: Van eenzaam → collectief**

**Voorgestelde acties:**
- ☑ Buurtcentrum koffieochtend (collectief)
- ☐ Sportvereniging (collectief)
- ☑ Buurman wekelijks koffie (informeel - custom)

### **GGZ: Van professional A → professional B + informeel**

**Voorgestelde acties:**
- ☑ Andere psychiater (2e mening)
- ☑ Lotgenotengroep (collectief)
- ☑ Partner komt mee naar gesprekken (informeel)

---

## ✅ KENMERKEN

### **1. Alleen domeinen met beweging**
Als domein "Blijft zoals het nu is" → NIET in Interventies

### **2. Visueel van → naar**
Duidelijk zien: huidige positie vs gewenste positie

### **3. Checklist met voorstellen**
Niet open vraag maar concrete suggesties + eigen toevoegen

### **4. Amsterdam-specifiek**
Telefoonnummers, websites, adressen lokaal

### **5. Geen kosten-baten**
Dat is niveau 3! Hier gewoon: wat gaan we doen?

---

## 🚀 STATUS

**CONCEPT KLAAR**

**Nog te bouwen:**
1. `getActiesVoorBeweging(domeinId, richting)` functie
2. `actieDatabase` met Amsterdam interventies
3. `toggleActie()` en `addCustomActie()` functies
4. Update `renderInterventiesPerDomein()` met nieuwe layout
5. State structure voor interventies

**Schatting:** 45-60 min werk

---

**Dit wordt de missing link tussen Beweging (abstract) en Reflectie (validatie)!** 🎉

