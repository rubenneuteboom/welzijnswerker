# Track A Status - v5.0

## ✅ Wat werkt nu:

### 1. Hulpvraag-scherm
- ✅ "Wat wil je bereiken?" vrije tekst
- ✅ Domein-selectie (1-3 domeinen, visuele kaartjes)
- ✅ "Wie zou kunnen helpen?" eerste gedachte
- ✅ Validatie voordat je verder kan
- ✅ Waarden worden opgeslagen en hersteld

### 2. Triage gefilterd
- ✅ Toont alleen geselecteerde domeinen
- ✅ Teller toont x/3 i.p.v. x/11
- ✅ Stoplicht per domein (🔴🟡🟢)
- ✅ Cliënt-beleving (😊😐😟)

### 3. Netwerkpositie (NIEUW!)
- ✅ Automatische berekening bij toevoegen persoon
- ✅ Visuele badge per domein:
  - ✅ Zelfstandig
  - ⚪ Geen netwerk
  - 🟡 1-persoons
  - 🟢 Informeel
  - 🔵 Formeel
  - 🟣 Gemengd

### 4. Matching-validatie (NIEUW!)
- ✅ Waarschuwingen worden berekend:
  - 🔴 + 🟢 = ⚠️ "Risico overbelasting"
  - 🟢 + 🔵 = 💡 "Check: Is dit nog nodig?"
  - 🔴 + ⚪ = 🚨 "Urgent: Geen netwerk"
- ✅ Waarschuwingen worden getoond onder netwerkpositie badge

### 5. Data-sync
- ✅ `state.steunDetails` → personen per domein
- ✅ `state.domeinPersonen` → gebruikt voor netwerkpositie
- ✅ Sync bij toevoegen/verwijderen persoon

---

## ⚠️ Nog te doen (v5.1):

### 1. Gap-analyse
- [ ] Toon "Je wilde X bereiken" aan begin samenvatting
- [ ] Vergelijk hulpvraag met huidige netwerkpositie
- [ ] Suggestie: "Om X te bereiken, heb je Y nodig"

### 2. Samenvatting aanpassen Track A
- [ ] Start met hulpvraag (wat wilde je?)
- [ ] Toon alleen geselecteerde domeinen
- [ ] Highlight netwerkpositie per domein
- [ ] Toon matching-waarschuwingen prominent

### 3. Beweging/Plan
- [ ] "Wat moet verschuiven?" op basis van gap
- [ ] Suggestie interventies gericht op hulpvraag

### 4. UI polish
- [ ] Breadcrumb: "Je vraag → Netwerk → Plan"
- [ ] Progress indicator specifiek voor Track A
- [ ] "Wil je nog een domein toevoegen?" na triage

---

## 🧪 Test-scenario Track A:

1. **Start**
   - Kies Track A
   - "Ik wil minder eenzaam zijn"
   - Selecteer: Sociaal + Participatie
   - "Mijn zus Lisa"

2. **Triage** (alleen 2 domeinen!)
   - Sociaal: 🟡 Steun aanwezig
   - Voeg toe: Lisa (informeel)
   - Check: Netwerkpositie = 🟡 1-persoons
   - Check: Waarschuwing = ⚠️ (afhankelijk van beleving)

3. **Beweging**
   - Suggestie: Van 1-persoons → Informeel netwerk
   - Interventies: Buurtcentrum, clubactiviteit

4. **Samenvatting**
   - "Je wilde: minder eenzaam zijn"
   - "Je netwerk: 1 persoon (zus)"
   - "Advies: Breid uit naar meerdere contacten"

---

## 📊 Methodologische Score Track A:

**Construct validiteit**: ✅ Meet hulpvraag + netwerkpositie expliciet  
**Flow-logica**: ✅ VRAAG → NETWERK → GAP → PLAN  
**Cliënt-centraal**: ✅ Start met "wat wil JIJ?"  
**Efficiency**: ✅ 20-30 min (focus op 1-3 domeinen)

**Verwachte score**: 8.5/10  
(0.5 aftrek tot gap-analyse visueel is)

---

## 🎯 Prioriteit volgende sessie:

1. **Gap-analyse** visueel maken
2. **Samenvatting** aanpassen voor Track A
3. **Test met Karin** (praktijk-validatie)
