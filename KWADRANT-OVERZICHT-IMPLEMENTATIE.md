# Kwadrant Netwerkoverzicht - 3 maart 2026

## ✅ GEÏMPLEMENTEERD: Visueel positioneel overzicht

Het nieuwe **"Jouw Netwerk in Beeld"** scherm toont de netwerkbalans in 4 kwadranten!

---

## 🎯 WAT IS HET?

Een **visueel dashboard** dat laat zien:
- Waar staat je netwerk? (professioneel/collectief/informeel/geen)
- Hoeveel domeinen per positie?
- Welke patronen zijn er? (overbelasting, discrepanties, urgentie)

**In 3 seconden zie je:** "O, 45% professioneel, 36% informeel, partner doet veel!"

---

## 🗺️ POSITIE IN FLOW

**Nieuwe flow:**
```
1️⃣ START
2️⃣ TRIAGE (Focusgebieden)
   ↓
3️⃣ NETWERKOVERZICHT ← NIEUW!
   ↓
4️⃣ Domeinscan (optioneel/later)
5️⃣ Beweging
```

**Waarom hier:**
- Na invullen focusgebied = data compleet
- Voor positionele keuze = eerst overzicht, dan actie
- Vervangt dubbele domeinscan

---

## 🎨 VISUEEL ONTWERP: KWADRANT

```
┌─────────────────┬─────────────────┐
│ 🔵 PROFESSIONEEL│ 🟣 COLLECTIEF   │
│    45% (5)      │     9% (1)      │
│ 💰 🧠 🏠 💪 🛁  │     💼          │
│ • Financiën     │ • Dagbesteding  │
│ • GGZ           │                 │
│ • Wonen         │                 │
├─────────────────┼─────────────────┤
│ 🟢 INFORMEEL    │ 🔴 GEEN STEUN   │
│    36% (4)      │    10% (1)      │
│ 👥 👨‍👩‍👧 💰 💪    │     ⚖️          │
│ • Sociaal       │ • Justitie      │
│ • Huiselijk     │                 │
│ • Financiën     │                 │
└─────────────────┴─────────────────┘
```

**Visuele impact:**
- **Grootte** = hoeveel domeinen
- **Kleuren** = type netwerk
- **Emoji's** = herkenning
- **Direct vergelijk** = balans zichtbaar

---

## ⚠️ AANDACHTSPUNTEN (Automatisch gedetecteerd)

### **🔴 URGENT (Rood)**
Domeinen die **zwaar zijn én geen steun hebben**:
```
🔴 Justitie - zwaar én geen steun (urgent!)
```

### **🟠 DISCREPANTIES (Oranje)**
Domeinen met **steun aanwezig maar nog steeds zwaar**:
```
🟠 Financiën - zwaar ondanks bewindvoerder (werkt het wel?)
```
→ Signaleert: steun werkt niet / verkeerde positie

### **⚠️ OVERBELASTING (Geel)**
Personen die **in veel domeinen helpen**:
```
⚠️ Partner helpt in 4 domeinen (mogelijk overbelasting)
```
→ Signaleert: kwetsbaar netwerk (1 persoon draagt veel)

### **💡 BALANS TIPS (Blauw)**
Suggesties op basis van verdeling:
```
💡 Netwerk vooral professioneel - is er ruimte voor meer informeel?
💡 Weinig collectieve steun - kansen in buurt/verenigingen?
```

---

## 📊 AUTOMATISCHE DETECTIE REGELS

### **Overbelasting:**
```javascript
if (persoon helpt in >= 3 domeinen) {
    → Waarschuwing: mogelijk overbelasting
}
```

### **Discrepantie:**
```javascript
if (beleving === 'zwaar' && steun === 'aanwezig') {
    → Signaal: steun werkt niet
}
```

### **Urgentie:**
```javascript
if (status === 'steun-nodig') {
    → Urgent: geen netwerk, wel nodig
}
```

### **Balans waarschuwingen:**
```javascript
if (professioneel > 60%) {
    → Tip: veel professioneel, ruimte voor informeel?
}
if (informeel > 70% && aantal > 3) {
    → Waarschuwing: risico overbelasting naasten
}
if (collectief < 10%) {
    → Tip: onderbenut, kansen in buurt?
}
```

---

## 💬 REFLECTIEVRAGEN

Na het kwadrant volgen automatisch reflectievragen:
```
💬 Reflectievragen
• Wat valt je op aan dit overzicht?
• Is deze verdeling zoals je wilt, of zou je iets anders willen?
• Zijn er domeinen waar je de steun anders wilt organiseren?
```

**Doel:** Niet alleen ZIEN, maar ook REFLECTEREN → leidt tot positionele beweging

---

## 🔧 TECHNISCHE IMPLEMENTATIE

### **Nieuw scherm:**
```html
<div class="screen" id="screen-netwerkoverzicht">
    <div id="kwadrantOverzicht">
        <!-- Gevuld door renderKwadrantOverzicht() -->
    </div>
</div>
```

### **Nieuwe functie:**
```javascript
function renderKwadrantOverzicht() {
    // 1. Verzamel data per positie
    const professioneel = [];
    const collectief = [];
    const informeel = [];
    const geenNetwerk = [];
    
    // 2. Loop door domeinen
    domains.forEach(d => {
        const status = state.domainStatus?.[d.id];
        const steunDetail = state.steunDetails?.[d.id];
        
        if (steunDetail.type === 'formeel') professioneel.push(...);
        else if (steunDetail.type === 'collectief') collectief.push(...);
        else if (steunDetail.type === 'informeel') informeel.push(...);
    });
    
    // 3. Bereken percentages
    const totaal = prof + coll + inf + geen;
    const percentages = { ... };
    
    // 4. Detecteer patronen
    const signalen = detecteerPatronen(...);
    
    // 5. Render HTML
    container.innerHTML = renderKwadrant(...);
}
```

### **Navigatie aangepast:**
```javascript
// saveTriageAndContinue() nu naar:
goToScreen('netwerkoverzicht'); // i.p.v. 'domains'
```

---

## 📱 RESPONSIVE

### **Mobiel:**
```
┌──────────────┐
│ 🔵 PROF. 45% │
│ 💰🧠🏠💪🛁   │
├──────────────┤
│ 🟣 COLL. 9%  │
│ 💼           │
├──────────────┤
│ 🟢 INF. 36%  │
│ 👥👨‍👩‍👧💰💪     │
├──────────────┤
│ 🔴 GEEN 10%  │
│ ⚖️           │
└──────────────┘
```
**Grid: 2 kolommen, stapelen op small screens**

### **Desktop:**
```
┌─────────┬─────────┐
│ 🔵 45%  │ 🟣 9%   │
├─────────┼─────────┤
│ 🟢 36%  │ 🔴 10%  │
└─────────┴─────────┘
```
**Grid: 2x2, blijft naast elkaar**

---

## 🧪 TEST SCENARIOS

### **Test 1: Balans zichtbaar**
1. Vul 5 domeinen in met professioneel
2. Vul 2 domeinen in met informeel (beide partner)
3. Ga naar netwerkoverzicht
4. **Check:** Professioneel blok is groter dan informeel

### **Test 2: Overbelasting detectie**
1. Vul 4 domeinen in met "Partner" (informeel)
2. Ga naar netwerkoverzicht
3. **Check:** Waarschuwing "Partner helpt in 4 domeinen"

### **Test 3: Discrepantie detectie**
1. Financiën: beleving = 😟 zwaar, steun = bewindvoerder
2. Ga naar netwerkoverzicht
3. **Check:** Oranje signaal "zwaar ondanks bewindvoerder"

### **Test 4: Urgentie detectie**
1. Justitie: status = 🔴 steun nodig
2. Ga naar netwerkoverzicht
3. **Check:** Rood signaal "urgent - geen steun"

---

## 💥 IMPACT

### **Visueel WOW:**
✨ In 3 seconden zie je waar je netwerk staat  
📊 Grootte blokken = direct vergelijkbaar  
🎨 Kleuren = herkenning van posities  
💡 Emoji's = link naar domeinen

### **Inzicht:**
🔍 Patronen automatisch zichtbaar  
⚠️ Signalen trekken aandacht  
💬 Reflectie triggert gesprek  
🎯 Basis voor positionele beweging

### **RPA-kern:**
📍 Posities centraal (niet alleen "wie helpt")  
⚖️ Balans zichtbaar (te veel prof? te weinig coll?)  
🔄 Leidt tot beweging ("Kunnen we dit anders organiseren?")

---

## 👥 TEAM REACTIES

**🎨 Nova:** *"Dit is precies wat we bedoelden - visuele impact!"*  
**💬 Lisa:** *"Ik ZIE meteen dat alles op mijn partner hangt - schok!"*  
**👥 Karin:** *"Perfect voor gesprek - leg tablet neer, laat cliënt zien"*  
**📊 Bram:** *"RPA-theorie wordt visueel - posities zijn zichtbaar"*  
**🏥 Suus:** *"Pedagogisch sterk - mensen leren visueel beter"*  
**🌈 Marie:** *"Haalbaar, responsive, en krachtig!"*

---

## ✅ STATUS: KLAAR VOOR TESTEN

**Test het nu:**
1. Start dev server: `python3 -m http.server 3458`
2. Open: `http://localhost:3458/positioneel.html`
3. Doorloop:
   - Vul focusgebieden in (beleving + steun + wie helpt)
   - Klik "Volgende"
   - **Zie het kwadrant overzicht!**
4. Check:
   - Zijn de percentages correct?
   - Worden signalen getoond?
   - Is het overzichtelijk op mobiel én desktop?

**Feedback welkom!** 🌈💥

