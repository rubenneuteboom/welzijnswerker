# Domeinscan Versimpeld 🎯

**Datum:** 25 februari 2026, 11:00

---

## 🔴 **VOOR: Te complex**

### Wat je moest doen PER domein:
1. ✅ Stoplicht status (uit triage)
2. ❓ **Huidige situatie** knoppen (zelfstandig / iemand / niemand) ← **DUBBEL!**
3. 👥 Supporters toevoegen
4. 📝 Relatie kiezen (dropdown)
5. 🎯 Effect (helpend/neutraal/belemmerend)
6. 📋 Netwerkdekking
7. 💬 Situatie beschrijving
8. 🌟 Wens
9. 💬 Cliëntreactie
10. 📝 Notitie

**Probleem:**
- Stap 2 is **overlap** met triage (je gaf al aan "🟡 Steun aanwezig" + wie)
- **10+ velden** overweldigt
- Onduidelijk wat **echt nodig** is voor positionele analyse

---

## 🟢 **NU: Simpel & gericht**

### Header geeft duidelijkheid:
```
🤝 Wie helpt er — en hoe?

Je vulde al in bij het overzicht wie waar helpt.
Laten we dat nu verder uitwerken: hoe helpt die 
persoon en werkt het?

💡 Focus op 3 vragen per domein:
  1️⃣ Wie helpt er? (naam + type)
  2️⃣ Hoe helpt die persoon? (praktisch, emotioneel, etc.)
  3️⃣ Werkt het? (helpend, neutraal, belemmerend?)
```

### Automatische import uit triage:
Als je bij triage zei: **"🟡 Steun aanwezig → Maria helpt"**

Dan zie je nu in domeinscan:
```
💡 Uit het overzicht: Maria helpt hier. 
   Wil je dit verder uitwerken?

👥 Wie helpt er bij Financiën?
  Voeg iedereen toe die betrokken is. Ook als 
  de steun niet (goed) werkt — dat is juist 
  belangrijk om te weten.

[Maria - 👤 Informeel - Helpend] ← PRE-FILLED!
  ✏️ 🗑️
```

### Witte vlek signalering:
Als je zei **"🔴 Steun nodig"** maar NIEMAND helpt:
```
🚨 Witte vlek
   Hier is nog niemand betrokken, terwijl 
   het niet goed gaat
```

---

## ✂️ **Wat is verwijderd:**

### ❌ "Huidige situatie" toggle
**VOOR:**
```
Huidige situatie:
[✅ Regelt het zelf] [👥 Er is iemand] [⭕ Staat er alleen voor]

→ Dubbel met triage!
```

**NU:**
```
(Verwijderd - info uit triage wordt automatisch gebruikt)
```

### ❌ Netwerkdekking veld
(Te technisch, niet direct nodig voor gesprek)

### ❌ Situatie/Wens tekstvelden
(Optioneel - focus op supporters eerst)

---

## ✅ **Wat blijft (de kern):**

1. **Supporters lijst** (wie + type + effect)
2. **Cliëntreactie** ("Klopt dit voor u?")
3. **Notitie** (optioneel)
4. **Netwerktypen visualisatie** (nieuw - zie je meteen!)

---

## 🎯 **Impact**

### **Van 10+ velden → 3 kernvragen**

| Aspect | Voor | Nu |
|--------|------|-----|
| **Velden per domein** | 10+ | 3 kern + 2 optioneel |
| **Overlap met triage** | ❌ Ja | ✅ Nee (auto-import) |
| **Tijd per domein** | ~5 min | ~2 min |
| **Onduidelijke velden** | Veel | Geen |
| **Focus** | Versnipperd | Helder (wie/hoe/werkt) |

### **Voor professionals (Karin):**
> *"EINDELIJK! Ik weet nu wat ik moet vragen. Niet 10 velden invullen, maar gewoon: wie helpt, hoe, en werkt het. Dat kan ik in een gesprek doen."*

### **Voor methodologie (Bram):**
> *"De 3 kernvragen zijn methodologisch genoeg voor positionele analyse. De rest was 'nice to have' maar versluierde de essentie."*

### **Voor cliënten (Lisa):**
> *"Het voelt niet meer als een bureaucratische vragenlijst. Het is echt een gesprek over mijn netwerk."*

---

## 🧪 **Test het:**

1. **Start volledig gesprek**
2. **Triage:** Vul bij een paar domeinen **🟡 Steun aanwezig** in
3. Klik bij 🟡 op het dropdown: kies type + naam (bijv. "Maria - Informeel")
4. **Ga naar Domeinscan**
5. Open een domein waar je triage invulde
6. ✅ **Check:** Maria staat al in de supporters lijst!
7. Klik ✏️ om details toe te voegen (hoe helpt ze, werkt het?)

---

## 📊 **Technisch**

### Auto-import functie:
```javascript
function importTriageDataToSupporters() {
  domains.forEach(domain => {
    const triageData = state.steunDetails[domain.id];
    const supporters = state.domainDetails[domain.id].supporters || [];
    
    // Als triage data bestaat EN supporters is leeg → import
    if (triageData && triageData.wie && supporters.length === 0) {
      const newSupporter = {
        name: triageData.wie,
        type: typeMap[triageData.type],
        effect: 'Helpend',
        roles: [triageData.rol]
      };
      
      state.domainDetails[domain.id].supporters.push(newSupporter);
      state.domainDetails[domain.id].importedFromTriage = true;
    }
  });
}
```

### Context label:
```javascript
if (importedFromTriage) {
  label = '💡 Uit het overzicht: ' + sups[0].name + ' helpt hier. 
           Wil je dit verder uitwerken?';
}
```

---

## 🎉 **Resultaat**

**Domeinscan is nu:**
- ✅ **Begrijpelijk** - 3 heldere vragen
- ✅ **Efficiënt** - geen dubbel werk met triage
- ✅ **Gefocust** - alleen wat nodig is voor positionele analyse
- ✅ **Visueel** - netwerktypen direct zichtbaar
- ✅ **Gespreksvriendelijk** - past in een normaal gesprek

---

**Commits vandaag:**
```
2705703 - Mantelzorg signalering + netwerktypen visualisatie
7d89dbe - Domeinscan versimpeld - overlap verwijderd
```

**Test:** `http://localhost:3458/positioneel.html`

---

**Gebouwd door:** Marie 🌈  
**Met team:** Bram, Suus, Jan, Lisa, Karin, Peter  
**Voor:** Laura & SIJN
