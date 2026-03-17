# Informeel Netwerk: Multiple Checkboxes - 3 maart 2026

## ✅ GEÏMPLEMENTEERD: Meerdere rollen tegelijk aanvinken

Voor **informeel netwerk** kunnen nu **meerdere rollen** geselecteerd worden via checkboxes!

---

## 🎯 WAAROM?

### **Realiteit van informeel netwerk:**
- Partner doet vaak **5-6 taken** tegelijk
- Buurvrouw: boodschappen + gezelschap + luisterend oor
- Moeder: financieel + praktisch + emotioneel
→ **Dropdown met 1 keuze was te beperkt**

### **Bij professioneel/collectief:**
- Blijft **single select** (1 rol)
- Bewindvoerder doet alleen financiën
- Fysiotherapeut doet alleen fysio
→ **Gespecialiseerd**

---

## 📋 HOE HET WERKT

### **Bij Informeel netwerk:**
```
Type steun: [🟢 Informeel]

Wie helpt?  [Buurvrouw]
              ↓
Welke rol(len)? (meerdere aanvinken mogelijk)

🛠️ Praktische hulp
☐ Helpt met administratie
☑ Doet boodschappen      ← Aangevinkt
☐ Verzorgt vervoer
☐ Helpt met huishouden
☐ Helpt met koken

💚 Sociale steun
☑ Biedt gezelschap       ← Aangevinkt
☑ Luisterend oor         ← Aangevinkt
☐ Doet samen activiteiten
☐ Gaat samen op uitje

🤝 Begeleiding
☐ Begeleidt naar afspraken
☐ Helpt met budgetbeheer
☐ Helpt met formulieren
☐ Contact met instanties

✍️ Anders
☐ Anders (toelichting): [vrij tekstveld]
```

### **Bij Professioneel/Collectief met auto-fill:**
```
Type steun: [🔵 Professioneel]

Wie helpt?  [Bewindvoering]
              ↓
Welke rol?
┌─────────────────────────────────┐
│ Bewindvoerder - beheert mijn   │ ← Textarea (1 rol)
│ financiën juridisch...          │
└─────────────────────────────────┘
```

### **Bij Professioneel/Collectief zonder auto-fill:**
```
Type steun: [🔵 Professioneel]

Wie helpt?  [Maatschappelijk werk]
              ↓
Welke rol?  [-- Selecteer rol -- ▼] ← Dropdown (1 rol)
```

---

## 🗂️ CATEGORIEËN CHECKBOXES

### 🛠️ **Praktische hulp** (5 opties)
- Helpt met administratie
- Doet boodschappen
- Verzorgt vervoer
- Helpt met huishouden
- Helpt met koken

### 💚 **Sociale steun** (4 opties)
- Biedt gezelschap
- Luisterend oor
- Doet samen activiteiten
- Gaat samen op uitje

### 🤝 **Begeleiding** (4 opties)
- Begeleidt naar afspraken
- Helpt met budgetbeheer
- Helpt met formulieren
- Contact met instanties

### ✍️ **Anders** (1 optie + tekstveld)
- Anders (toelichting): [vrij tekstveld verschijnt bij aanvinken]

**Totaal: 14 voorgedefinieerde opties + vrij veld**

---

## 💾 DATA OPSLAG

### **Single value (professioneel/collectief):**
```javascript
state.steunDetails[domeinId] = {
    type: 'formeel',
    wie: 'bewindvoering',
    rol: 'anders',
    rolAnders: 'Bewindvoerder - beheert financiën...'
}
```

### **Multiple values (informeel):**
```javascript
state.steunDetails[domeinId] = {
    type: 'informeel',
    wie: 'buur',
    rollen: ['boodschappen', 'gezelschap', 'luisterend-oor'], // Array!
    rolAndersText: 'Helpt ook met tuin' // Optioneel vrij veld
}
```

---

## 🔧 TECHNISCHE IMPLEMENTATIE

### **Nieuwe HTML elementen:**
```html
<div id="rol-checkboxes-${domeinId}">
    <label>
        <input type="checkbox" value="boodschappen" 
               onchange="saveRolCheckbox('${domeinId}', this)">
        Doet boodschappen
    </label>
    <!-- etc. -->
</div>
```

### **Nieuwe JavaScript functie:**
```javascript
function saveRolCheckbox(domeinId, checkbox) {
    if (!state.steunDetails[domeinId].rollen) {
        state.steunDetails[domeinId].rollen = [];
    }
    
    if (checkbox.checked) {
        // Voeg toe
        state.steunDetails[domeinId].rollen.push(checkbox.value);
    } else {
        // Verwijder
        state.steunDetails[domeinId].rollen = 
            state.steunDetails[domeinId].rollen.filter(r => r !== checkbox.value);
    }
    
    saveState();
}
```

### **Aangepaste saveSteunDetail logica:**
```javascript
if (type === 'informeel') {
    // Toon checkboxes
    checkboxDiv.style.display = 'block';
    rolSelect.style.display = 'none';
    andersDiv.style.display = 'none';
} else if (type === 'formeel' || type === 'collectief') {
    // Toon dropdown of textarea (afhankelijk van auto-fill)
    checkboxDiv.style.display = 'none';
    // ... rest van logica
}
```

---

## 🧪 TEST SCENARIOS

### **Test 1: Informeel met meerdere rollen**
1. Kies "🟢 Informeel"
2. Selecteer "Buurvrouw"
3. Vink aan: "Boodschappen" + "Gezelschap" + "Luisterend oor"
4. **Verwacht:** Alle 3 worden opgeslagen in array

### **Test 2: Informeel met "Anders"**
1. Kies "🟢 Informeel"
2. Selecteer "Partner"
3. Vink aan: "Huishouden" + "Anders"
4. Vul in vrij veld: "Helpt met kinderen ophalen van school"
5. **Verwacht:** rollen = ['huishouden', 'anders'], rolAndersText = "Helpt met kinderen..."

### **Test 3: Switch van Informeel naar Professioneel**
1. Kies "🟢 Informeel" → vink checkboxes aan
2. Verander naar "🔵 Professioneel"
3. **Verwacht:** Checkboxes verdwijnen, dropdown/textarea verschijnt

### **Test 4: Data persistentie**
1. Vink 3 checkboxes aan bij informeel
2. Sla op (automatisch via onChange)
3. Refresh pagina
4. **Verwacht:** Alle 3 checkboxes zijn nog aangevinkt

---

## 📊 IMPACT

### **Voordelen:**
✅ **Realistischer** - informeel netwerk doet vaak meerdere dingen  
✅ **Inzichtelijker** - zie direct hoeveel taken iemand doet  
✅ **Netwerkdraagkracht** - 1 persoon met 6 taken = risico overbelasting  
✅ **Flexibeler** - mix van praktisch + sociaal + emotioneel zichtbaar  

### **Methodologisch (Bram):**
"Multi-select past bij de realiteit van informeel netwerk. Bij professioneel zou het juist verwarrend zijn (bewindvoerder doet geen gezelschap)."

### **Gebruiksvriendelijk (Karin):**
"In gesprek: 'Wat doet je buurvrouw allemaal?' → Vink allemaal aan. Veel sneller dan 5x toevoegen."

### **Cliënt-perspectief (Lisa):**
"Nu kan ik laten zien hoeveel mijn partner doet - dat is belangrijk voor erkenning en overbelasting-signalering."

---

## ✅ STATUS: KLAAR VOOR TESTEN

**Test het nu:**
1. Start dev server: `python3 -m http.server 3458`
2. Open: `http://localhost:3458/positioneel.html`
3. Kies domein + "🟢 Informeel" + selecteer persoon
4. Vink meerdere checkboxes aan
5. Check in browser console: `state.steunDetails`

**Werkt het zoals verwacht?**

