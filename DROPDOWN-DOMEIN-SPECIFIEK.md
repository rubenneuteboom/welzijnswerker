# Dropdowns Domein-Specifiek

**Datum:** 25 februari 2026, 11:41  
**Probleem:** Alle professionele opties bij elk domein (niet logisch)  
**Oplossing:** Alleen relevante opties per levensgebied

---

## ❌ **VOOR:**

Bij **💼 Dagbesteding** kreeg je:
- Ambulante GGZ ← niet relevant!
- Wijkverpleging ← niet relevant!
- Thuiszorg ← niet relevant!
- Maatschappelijk werk
- Budgetcoach ← niet relevant!
- Budgetbeheer ← niet relevant!
- Bewindvoering ← niet relevant!
- Schuldhulpverlening ← niet relevant!
- Werkcoach ✓ (enige relevante)

**Probleem:** 8 van de 9 opties zijn irrelevant voor dit domein!

---

## ✅ **NU:**

Bij **💼 Dagbesteding** krijg je:
- Werkcoach ✓
- Jobcoach ✓
- Re-integratie begeleiding ✓
- Maatschappelijk werk ✓

**Alle 4 opties zijn relevant!**

---

## 📋 **Overzicht per Domein**

### **💰 Financiën**
**Professioneel:**
- Budgetcoach
- Budgetbeheer
- Bewindvoering
- Schuldhulpverlening
- Maatschappelijk werk

**Collectief:**
- Schuldhulpmaatje
- Voedselbank
- Kledingbank

---

### **💼 Dagbesteding**
**Professioneel:**
- Werkcoach
- Jobcoach
- Re-integratie begeleiding
- Maatschappelijk werk

**Collectief:**
- Dagbestedingscentrum
- Activiteitencentrum
- Sociale werkplaats

---

### **🏠 Huisvesting**
**Professioneel:**
- Woningcorporatie
- Woonbegeleiding
- Maatschappelijk werk

---

### **👨‍👩‍👧 Huiselijke relaties**
**Professioneel:**
- Gezinscoach
- Relatietherapie
- Veilig Thuis
- Jeugdzorg
- Maatschappelijk werk

**Informeel (extra opties):**
- Ex-partner
- Schoonouders
(+ standaard: partner, kind, ouder, familie, vriend, buur)

---

### **🧠 Geestelijke gezondheid**
**Professioneel:**
- Ambulante GGZ
- Psycholoog
- Psychiater
- Casemanager GGZ
- Maatschappelijk werk

---

### **💪 Lichamelijke gezondheid**
**Professioneel:**
- Wijkverpleging
- Thuiszorg
- Fysiotherapeut
- Ergotherapeut
- Huisarts

---

### **🚭 Verslaving**
**Professioneel:**
- Verslavingszorg
- Ambulante GGZ
- Maatschappelijk werk

---

### **🛁 ADL-vaardigheden**
**Professioneel:**
- Wijkverpleging
- Thuiszorg
- Ergotherapeut
- Wmo-begeleiding

**Informeel (extra optie):**
- Mantelzorger
(+ standaard opties)

---

### **👥 Sociaal netwerk**
**Professioneel:**
- Sociaal werker
- Maatschappelijk werk
- GGZ begeleiding

**Collectief:**
- Buurtcentrum
- Welzijnsorganisatie
- Kerk/Moskee
- Vrijwilligersorganisatie

---

### **🤝 Maatschappelijke participatie**
**Professioneel:**
- Participatiecoach
- Werkcoach
- Maatschappelijk werk

**Collectief:**
- Buurtcentrum
- Sportvereniging
- Hobbyclub
- Vrijwilligersorganisatie

---

### **⚖️ Justitie**
**Professioneel:**
- Reclassering
- Jeugdreclassering
- Forensische zorg
- Maatschappelijk werk

---

## 📊 **Impact**

| Aspect | Voor | Nu | Verbetering |
|--------|------|-----|-------------|
| **Relevantie** | ~10-20% relevant | 100% relevant | **5-10x beter** |
| **Keuzes** | 9 opties | 4-5 opties | **Sneller kiezen** |
| **Verwarring** | Hoog | Geen | **Duidelijk** |
| **Tijd** | Lang scrollen | Direct zien | **Efficiënter** |

---

## 💬 **Verwachte Reacties**

### **👥 Karin (Wijkteam):**
> "Eindelijk! Nu zie ik alleen wat logisch is bij dit domein. Scheelt enorm veel tijd."

### **💬 Lisa (Cliënt):**
> "De opties kloppen nu. Bij dagbesteding zie ik werkcoach, niet GGZ. Dat maakt het begrijpelijk."

### **📊 Bram (Methodologie):**
> "Dit is hoe het hoort - domein-specifieke interventies. Methodologisch correct."

---

## 🔧 **Technisch**

### **Implementatie:**
```javascript
// In template string:
${(() => {
  const opties = {
    'dagbesteding': [
      {v:'werkcoach',l:'Werkcoach'},
      {v:'jobcoach',l:'Jobcoach'},
      // ...
    ],
    'financien': [
      {v:'budgetcoach',l:'Budgetcoach'},
      // ...
    ],
    // ... etc
  };
  const lijst = opties[d.id] || opties['default'];
  return lijst.map(o => 
    '<option value="'+o.v+'">'+o.l+'</option>'
  ).join('');
})()}
```

### **Flexibel:**
- Elke domein heeft eigen lijst
- Fallback naar default lijst
- Makkelijk uit te breiden

---

## ✅ **Status**

**Live:** ✅ Geïmplementeerd  
**Gedekt:** Alle 11 domeinen  
**Test:** Refresh pagina, ga naar triage, selecteer domein

**Verwacht:**
- Bij Dagbesteding: alleen Werkcoach/Jobcoach/Re-integratie
- Bij Financiën: alleen Budgetcoach/Bewindvoering/Schuldhulp
- Bij GGZ: alleen Ambulante GGZ/Psycholoog/Psychiater
- etc.

---

**Gebouwd door:** Marie 🌈  
**Voor:** Laura & SIJN  
**Datum:** 25 februari 2026
