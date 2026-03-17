# Cliëntbeleving Integratie - 3 maart 2026

## ✅ GEÏMPLEMENTEERD: Subjectieve ervaring + Objectieve positie

Het focusgebied-scherm heeft nu **twee aparte vragen** per domein:
1. **Cliënt-beleving** (subjectief): "Hoe ervaar je dit zelf?"
2. **Netwerkpositie** (objectief): "Is er steun?"

---

## 🎯 WAAROM TWEE VRAGEN?

### **Het onderscheid is cruciaal:**

**Voorbeeld 1: Steun werkt**
```
💰 Financiën
💭 Ervaar je als: 😊 Prima
🤝 Steun: 🟡 Bewindvoerder aanwezig
→ Alles goed, bewindvoering werkt!
```

**Voorbeeld 2: Steun werkt NIET**
```
💰 Financiën  
💭 Ervaar je als: 😟 Zwaar
🤝 Steun: 🟡 Bewindvoerder aanwezig
→ 🚨 RODE VLAG: Er IS hulp, maar cliënt ervaart het TOCH als zwaar
→ Positionering klopt niet - anders organiseren nodig
```

**Voorbeeld 3: Geen steun, maar gaat goed**
```
👥 Sociaal netwerk
💭 Ervaar je als: 😊 Prima
🤝 Steun: 🟢 Zelfstandig
→ Prima zo, geen actie nodig
```

**Voorbeeld 4: Zelfstandig maar zwaar**
```
💼 Dagbesteding
💭 Ervaar je als: 😟 Zwaar
🤝 Steun: 🟢 Zelfstandig (geen steun)
→ Steun nodig! Netwerk moet geactiveerd worden
```

---

## 🎨 NIEUWE INTERFACE

### **Per domein zie je nu:**

```
┌──────────────────────────────────────────────┐
│ 💰 Financiën                                  │
│ 💭 Hoe ervaar je dit zelf?                   │
│  [😊 Prima] [😐 Gaat wel] [😟 Zwaar]         │ ← NIEUW!
├──────────────────────────────────────────────┤
│ 🤝 Is er steun?                              │
│  [🟢 Zelfstandig] [🟡 Steun aanwezig] [🔴 Steun nodig] │
└──────────────────────────────────────────────┘
        ↓ Bij 🟡 of 🔴: klapt uit
┌──────────────────────────────────────────────┐
│ Type: [🔵 Professioneel] [🟣 Collectief] [🟢 Informeel]│
│ Wie helpt? [...]                             │
│ Welke rol? [...]                             │
└──────────────────────────────────────────────┘
```

---

## 🧠 RPA-KERNGEDACHTE

### **Waarom Lisa's punt cruciaal is:**

**Lisa:** *"Financiën kan objectief goed zijn (bewindvoerder regelt), maar IK ervaar het als verlies van regie"*

→ Dit is **precies** wat RPA wil vangen: de **discrepantie** tussen:
- **Objectieve situatie:** "Er is zorg"
- **Subjectieve ervaring:** "Het voelt niet goed"

### **Traditionele intake vraagt:**
❌ "Welke zorg heb je?" (alleen objectief)

### **RPA vraagt:**
✅ "Hoe ervaar je dit?" (subjectief)  
✅ "Wie helpt er?" (objectief)  
✅ "Klopt die positie voor jou?" (match)

---

## 📊 DATA OPSLAG

### **Nieuwe state property:**
```javascript
state.clientBeleving = {
    'financien': 'zwaar',      // 😟
    'dagbesteding': 'prima',   // 😊
    'geestelijk': 'gaat-wel',  // 😐
    // etc.
}
```

### **Bestaande state blijft:**
```javascript
state.domainStatus = {
    'financien': 'steun-aanwezig',  // 🟡
    'dagbesteding': 'goed',         // 🟢
    'geestelijk': 'steun-nodig',    // 🔴
}
```

### **Gecombineerd beeld:**
```javascript
{
    domein: 'financien',
    beleving: 'zwaar',          // Hoe cliënt het ervaart
    status: 'steun-aanwezig',   // Of er steun is
    discrepantie: true          // Steun aanwezig MAAR zwaar = probleem!
}
```

---

## 🔍 ANALYSE-MOGELIJKHEDEN

### **Discrepantie-detectie:**
```javascript
// Automatisch signaleren: hulp werkt niet
if (beleving === 'zwaar' && status === 'steun-aanwezig') {
    → SIGNAAL: Positionering klopt niet
    → Vraag: "Wat maakt het zwaar, ondanks de hulp?"
}
```

### **Overbelasting-signaal:**
```javascript
if (beleving === 'zwaar' && status === 'goed') {
    → SIGNAAL: Geen steun, maar wel zwaar
    → Actie: Netwerk activeren
}
```

### **Alles goed:**
```javascript
if (beleving === 'prima' && (status === 'goed' || status === 'steun-aanwezig')) {
    → SIGNAAL: Alles prima, geen actie
}
```

---

## 🎨 VISUELE DETAILS

### **Kleuren:**
- **Cliënt-beleving sectie:** Gele achtergrond (#fffbeb) = subjectief, gevoel
- **Netwerkpositie sectie:** Wit/groen/geel/rood = objectief, status

### **Emoji's:**
- **💭** = Beleving (gedachte, gevoel)
- **🤝** = Steun (handdruk, netwerk)

### **Buttons:**
- **😊 Prima** = Groen accent (#16a34a)
- **😐 Gaat wel** = Geel accent (#ca8a04)
- **😟 Zwaar** = Rood accent (#dc2626)

---

## 🔧 TECHNISCHE IMPLEMENTATIE

### **Nieuwe functie:**
```javascript
function setClientBeleving(domainId, beleving) {
    if (!state.clientBeleving) state.clientBeleving = {};
    state.clientBeleving[domainId] = beleving;
    saveState();
    renderStoplichtGrid();
    console.log('💭 Cliënt-beleving:', domainId, '→', beleving);
}
```

### **Aangepaste render:**
```javascript
// In renderStoplichtGrid():
if (!state.clientBeleving) state.clientBeleving = {};
const beleving = state.clientBeleving[d.id] || null;

// Button per beleving-optie
const belevingBtn = (val, emoji, label, color) => ...
```

---

## 🧪 TEST SCENARIOS

### **Test 1: Discrepantie signaleren**
1. Kies **Financiën**
2. Beleving: **😟 Zwaar**
3. Steun: **🟡 Steun aanwezig**
4. Vul in: Bewindvoerder
5. **Check:** Signaal dat hulp niet werkt

### **Test 2: Alles goed**
1. Kies **Wonen**
2. Beleving: **😊 Prima**
3. Steun: **🟢 Zelfstandig**
4. **Check:** Geen actie nodig

### **Test 3: Steun nodig**
1. Kies **GGZ**
2. Beleving: **😟 Zwaar**
3. Steun: **🟢 Zelfstandig** (nog geen hulp)
4. **Check:** Netwerk moet geactiveerd

### **Test 4: Steun werkt**
1. Kies **Lichamelijk**
2. Beleving: **😊 Prima**
3. Steun: **🟡 Steun aanwezig** (wijkverpleging)
4. **Check:** Prima zo!

---

## 📈 IMPACT

### **Methodologisch (Bram):**
"Dit is RPA in essentie: niet alleen WIE helpt, maar of die hulp ook WERKT voor de cliënt. De discrepantie is waar de positionele beweging begint."

### **Praktisch (Karin):**
"In gesprek vraag ik altijd eerst: 'Hoe gaat het?' voordat ik vraag 'wie helpt'. Dit maakt dat natuurlijk in de tool."

### **Cliënt-perspectief (Lisa):**
"Eindelijk een tool die vraagt hoe IK het ervaar, niet alleen wat er geregeld is. Dat maakt me serieus genomen."

### **Trimbos (Suus):**
"De combinatie subjectief + objectief = krachtig. Je ziet niet alleen het netwerk, maar ook of het past bij de cliënt."

---

## ✅ STATUS: KLAAR VOOR TESTEN

**Test het nu:**
1. Refresh `positioneel.html`
2. Ga naar "🗺️ Waar staat het netwerk?" scherm
3. Zie per domein:
   - **Gele sectie:** Hoe ervaar je dit? (3 keuzes)
   - **Witte sectie:** Is er steun? (3 keuzes)
4. Test discrepantie: Zwaar + Steun aanwezig

**Werkt de scheiding goed? Is het overzichtelijk?**

