# Interventies Actieplan - KLAAR VOOR GEBRUIK! 🎉

## ✅ WAT ER GEBOUWD IS:

### **1. Actie Database** ✅
- Alle 11 domeinen
- Per domein: formeel / collectief / informeel
- Amsterdam-specifieke informatie
- Telefoonnummers + websites
- **Locatie:** regel ~4960 in positioneel.html

### **2. Helper Functies** ✅  
- `getActiesVoorBeweging(domeinId, richting)` → Haal acties op
- `toggleActie(domeinId, actieId, checked)` → Vink aan/uit
- `addCustomActie(domeinId, naam)` → Eigen actie toevoegen
- **Locatie:** regel ~13138 in positioneel.html

### **3. Nieuwe Render Functie** ✅
- Actieplan per domein met beweging
- Van → Naar visualisatie
- Checkbox lijst met voorgestelde acties
- Eigen acties toevoegen
- **Locatie:** nieuwe-interventies-render.js (apart bestand)

---

## 🔧 NOG TE DOEN:

### **Vervang oude renderInterventiesPerDomein():**

**Huidige functie (regel ~13210):**  
→ Toont evidence-based interventies op basis van triage scores

**Nieuwe functie (nieuwe-interventies-render.js):**  
→ Toont actieplan op basis van beweging

**Actie:** Vervang de inhoud van de huidige functie met de nieuwe versie

---

## 📊 NIEUWE FLOW:

```
TRIAGE → KWADRANT → BEWEGING → INTERVENTIES → REFLECTIE
                        ↓              ↓
                  "Anders regelen" "Wat ga je doen?"
```

---

## 🎯 WAT HET DOET:

### **Scenario: Financiën**

**In Beweging:**
- Doel: "Zelf beslissingen kunnen nemen"
- Van: Bewindvoering (professioneel)
- Naar: Partner helpt (informeel)

**In Interventies:**
```
┌──────────────────────────────────┐
│ 💰 FINANCIËN                     │
│ Doel: Zelf beslissingen nemen   │
├──────────────────────────────────┤
│ VAN          →  NAAR             │
│ Professioneel   🟢 Informeel     │
│ Bewindvoering   (partner/familie)│
├──────────────────────────────────┤
│ 🎯 CONCRETE ACTIES:              │
│                                  │
│ ☑ Partner helpt met administratie│
│   Samen wekelijks doornemen      │
│                                  │
│ ☐ Familie kan tijdelijk lenen   │
│   Overbrugging tot hulp start    │
│                                  │
│ [+ Budgetcoach voor partner...]  │
│   (Eigen toevoeging)             │
└──────────────────────────────────┘
```

---

## 💾 STATE STRUCTUUR:

```javascript
state.interventies = {
    'financien': {
        acties: ['partner-admin', 'custom_123456789']
    },
    'sociaal': {
        acties: ['buurtcentrum']
    }
}

state.customActies = {
    'financien': [
        {
            id: 'custom_123456789',
            naam: 'Budgetcoach voor partner',
            beschrijving: '(Eigen toevoeging)',
            custom: true
        }
    ]
}
```

---

## 🚀 TESTEN:

### **Test flow:**
1. Start nieuwe gesprek
2. Triage: Financiën → Steun aanwezig → Bewindvoering
3. Kwadrant: Zie netwerk
4. Beweging: "Ik wil dit anders regelen" → Informeel
5. **Interventies:** 
   - Zie actieplan
   - Vink "Partner helpt" aan
   - Voeg custom actie toe
6. Reflectie: Valideer plan
7. Samenvatting: Export

---

## 📋 BELANGRIJKE BESTANDEN:

1. `positioneel.html` - Main applicatie
   - Regel ~4960: actieDatabase
   - Regel ~13138: helper functies
   - Regel ~13210: renderInterventiesPerDomein() (TE VERVANGEN)

2. `nieuwe-interventies-render.js` - Nieuwe render functie (KLAAR)

3. `INTERVENTIES-ACTIEPLAN-IMPLEMENTATIE.md` - Concept documentatie

4. `INTERVENTIES-ACTIEPLAN-KLAAR.md` - Dit bestand (status)

---

## ✅ VOLGENDE STAP:

**Kopieer inhoud van `nieuwe-interventies-render.js` naar `positioneel.html`:**

1. Open positioneel.html
2. Zoek functie `renderInterventiesPerDomein()` (regel ~13210)
3. Vervang HELE functie (tot `}`) met nieuwe versie
4. Test!

**Schatting:** 5 minuten

---

## 🎉 DAN IS HET AF!

**Complete Interventies-scherm als actieplan:**
- ✅ Database met Amsterdam interventies
- ✅ Helper functies
- ✅ Visuele van → naar
- ✅ Checklist acties
- ✅ Custom acties toevoegen
- ✅ State management

**13e feature van vandaag!** 🚀💪

