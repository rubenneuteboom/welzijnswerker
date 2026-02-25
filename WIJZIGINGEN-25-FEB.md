# Wijzigingen 25 februari 2026 🌈

## ✨ Wat is er nieuw?

### 1. **Mantelzorg Signalering** 🚨

**Waar:** Overzichtsscherm (stap 4 - "Wat zien we samen?")

**Wat doet het:**
- Detecteert automatisch personen die op **3 of meer domeinen** helpen
- Toont risico niveau:
  - 🟢 **Gemiddeld** (3 domeinen)
  - 🟠 **Verhoogd** (4 domeinen)
  - 🔴 **Hoog** (5+ domeinen)
- Per persoon zie je:
  - Op welke domeinen ze helpen
  - Of effect helpend of belemmerend is
  - Type steun (informeel/collectief/formeel)
  - Concrete actie-suggesties (respijtzorg verkennen)

**Voorbeeld:**
```
⚠️ Aandacht: Mogelijk overbelaste mantelzorgers

👩 Maria (dochter)
  Steunt op: 💰 Financiën, 🏠 Huishouden, 🚗 Vervoer, 📋 Admin, 💊 Medicatie
  🟢 Informeel
  → Hoog risico (5 domeinen)
  
💡 Aanbevolen actie:
  • Bespreek draagkracht en grenzen met Maria
  • Verken respijtzorg mogelijkheden
  • Kan ondersteuning verschuiven naar collectief/formeel?
```

**Hoe te testen:**
1. Ga naar volledig gesprek
2. Vul triage in
3. Open **3+ domeinen** in domeinscan
4. Voeg bij elk domein **dezelfde persoon** toe (bijv. "Maria - dochter")
5. Ga naar **Overzicht** (stap 4)
6. Bovenaan zie je de mantelzorg waarschuwing

---

### 2. **Netwerktypen Visualisatie per Domein** 🕸️

**Waar:** Domeinscan (stap 3 - "Wie helpt er - en hoe?")

**Wat doet het:**
Na het toevoegen van supporters zie je **direct** de netwerkpositie voor DAT domein:

```
🕸️ Netwerkpositie 💰 Financiën

🟢 Informeel    ████░░ 40% (1 persoon)
🟣 Collectief   ██░░░░ 20% (1 voorziening)
🔵 Formeel      ████░░ 40% (1 professional)

→ 🌈 Gemengd netwerk

💡 Gemengd informeel-formeel — mogelijk collectieve opties verkennen?
```

**Automatische labels:**
- **🟢 Informeel netwerk** - alleen informele steun
- **🔵 Formele zorg** - alleen professionals
- **🟣 Collectieve voorzieningen** - alleen collectief
- **🌈 Gemengd netwerk** - mix van types

**Contextuele tips:**
- Bij hoofdzakelijk informeel: *"Let op draagkracht"*
- Bij hoofdzakelijk formeel: *"Kan verschuiving naar informeel/collectief?"*
- Bij volledig collectief: *"Check of dit voldoende is"*

**Hoe te testen:**
1. Open een domein in domeinscan
2. Voeg verschillende types steun toe:
   - Klik "➕ Iemand toevoegen"
   - Kies type: Informeel / Collectief / Formeel
   - Voeg meerdere toe
3. Zie de visualisatie verschijnen onder de supporters lijst
4. Voeg nog een supporter toe → percentages updaten real-time

---

## 🎯 Impact

### **Voor professionals (Karin):**
✅ "Ik zie nu TIJDENS het gesprek al wat de netwerkpositie is - niet pas achteraf"  
✅ "Als ik zie dat Maria op 5 domeinen helpt, kan ik het METEEN bespreken"  
✅ "De kleuren (🟢🟣🔵) helpen om snel te scannen"

### **Voor methodologie (Bram):**
✅ "De RPA-posities worden nu zichtbaar in het proces - niet alleen in de rapportage"  
✅ "Mantelzorgoverbelasting wordt real-time gedetecteerd - dat is een kernprincipe"  
✅ "De visualisatie per domein maakt bewust wat de draaglagen zijn"

### **Voor cliënten (Lisa):**
✅ "Als professional dit met mij deelt, begrijp ik waarom we praten over 'netwerk ontlasten'"  
✅ "De visualisatie is begrijpelijk - geen vaag jargon"

### **Voor gemeenten (Jan):**
✅ "Ik zie direct de formele zorg 'footprint' - dat helpt bij preventie gesprekken"  
✅ "Mantelzorg signalering helpt om gericht respijtzorg in te zetten"

### **Voor zorgverzekeraars (Peter):**
✅ "Ik zie waar formele zorg dominant is en waar verschuiving mogelijk is"  
✅ "Dat helpt bij de business case voor preventie"

---

## 🧪 Test Scenario

**Casus: Maria (dochter) zorgt voor haar vader**

1. **Start volledig gesprek**
2. **Triage:**
   - 💰 Financiën: 🟡 Steun aanwezig → Maria helpt
   - 🏠 Wonen: 🟡 Steun aanwezig → Maria helpt
   - 🛁 ADL: 🟡 Steun aanwezig → Wijkverpleging helpt
   - 💊 Medicatie: 🟡 Steun aanwezig → Maria helpt
   - 🚗 Vervoer: 🟡 Steun aanwezig → Maria helpt
   - 👥 Sociaal: 🔴 Steun nodig → Nog niemand

3. **Domeinscan - 💰 Financiën:**
   - Voeg toe: Maria (dochter) - Informeel - Helpend
   - **Zie netwerkvisualisatie:** 🟢 100% Informeel

4. **Domeinscan - 🏠 Wonen:**
   - Voeg toe: Maria (dochter) - Informeel - Helpend
   - **Zie netwerkvisualisatie:** 🟢 100% Informeel

5. **Domeinscan - 🛁 ADL:**
   - Voeg toe: Wijkverpleging - Formeel - Helpend
   - **Zie netwerkvisualisatie:** 🔵 100% Formeel

6. **Domeinscan - 💊 Medicatie:**
   - Voeg toe: Maria (dochter) - Informeel - Helpend
   - **Zie netwerkvisualisatie:** 🟢 100% Informeel

7. **Domeinscan - 🚗 Vervoer:**
   - Voeg toe: Maria (dochter) - Informeel - Helpend
   - **Zie netwerkvisualisatie:** 🟢 100% Informeel

8. **Ga naar Overzicht (stap 4)**

   **Verwachte output bovenaan scherm:**
   ```
   ⚠️ Aandacht: Mogelijk overbelaste mantelzorgers

   👩 Maria (dochter)
     Steunt op: 💰 Financiën, 🏠 Wonen, 💊 Medicatie, 🚗 Vervoer
     🟢 Informeel
     → Verhoogd risico (4 domeinen)
     
   💡 Aanbevolen actie:
     • Bespreek draagkracht en grenzen met Maria
     • Verken respijtzorg mogelijkheden
     • Kan ondersteuning verschuiven naar collectief/formeel?
   ```

9. **Bespreek met cliënt:**
   - "Ik zie dat Maria heel veel doet. Hoe gaat dat voor haar?"
   - "Kunnen we sommige taken verschuiven? Bijvoorbeeld een collectieve voorziening voor vervoer?"

---

## 🔧 Technische Details

### Mantelzorg detectie:
```javascript
// Verzamel alle personen die helpen
const personenMap = new Map();

domains.forEach(domain => {
  const supporters = state.domainDetails[domain.id].supporters || [];
  supporters.forEach(supporter => {
    // Tel op hoeveel domeinen deze persoon helpt
    personenMap.get(naam).domeinen.push(domain);
  });
});

// Filter op 3+ domeinen
const overbelast = Array.from(personenMap.values())
  .filter(p => p.domeinen.length >= 3);
```

### Netwerktype visualisatie:
```javascript
// Tel supporters per type voor dit domein
const informal = supporters.filter(s => s.type === 'informal').length;
const collective = supporters.filter(s => s.type === 'collective').length;
const professional = supporters.filter(s => s.type === 'professional').length;

// Bereken percentages
const informalPct = (informal / total) * 100;
// ... etc
```

---

## 📝 Volgende stappen (nog niet gedaan)

Deze staan nog op de wishlist uit de team review:

- [ ] Domeinscan versimpelen (overlap met triage verwijderen)
- [ ] Context behouden in beweging scherm (wie helpt nu?)
- [ ] Aggregatie in overzichtsscherm (totaal formeel/collectief/informeel over alle domeinen)
- [ ] Kosten-indicatie (formele zorg footprint)

**Prioriteit volgens team:** Eerst testen wat we nu hebben, dan verder!

---

## 🎉 Status

✅ **Mantelzorg signalering:** Volledig functioneel  
✅ **Netwerktypen per domein:** Volledig functioneel  
⏳ **Domeinscan versimpelen:** Nog niet gedaan (volgende stap)

**Test het nu:** `http://localhost:3458/positioneel.html`

---

**Gebouwd door:** Marie 🌈  
**Met input van:** Bram, Suus, Jan, Lisa, Karin, Peter  
**Voor:** Laura & SIJN team
