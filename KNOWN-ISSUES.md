# Known Issues & Roadmap
**Laatst bijgewerkt:** 25 februari 2026, 20:32

---

## 🐛 **KNOWN BUGS**

### **1. Doelgroep chips niet klikbaar**
**Status:** 🔴 Open  
**Prioriteit:** Medium  
**Beschrijving:** De doelgroep chips (🧠 GGZ, 👤 Jongeren, etc.) kunnen niet aan/uit geklikt worden  
**Workaround:** Chips zijn visueel zichtbaar, maar selectie werkt niet  
**Fix:** Onclick handler toevoegen (10 min)  
**Target:** 26 februari 2026

---

### **2. Evidence-based interventies niet live**
**Status:** 🟡 In progress  
**Prioriteit:** Hoog  
**Beschrijving:** Database met 60 interventies is klaar, maar nog niet geïntegreerd in UI  
**Workaround:** Oude interventie lijst wordt getoond  
**Fix:** Veilig implementeren zonder crash (30 min)  
**Target:** 26 februari 2026

---

## ⚠️ **LIMITATIONS**

### **3. Geen AVG/Privacy audit**
**Status:** 🟡 Planned  
**Prioriteit:** Hoog (voor uitrol)  
**Beschrijving:** Privacy impact assessment nog niet gedaan  
**Vereist:** Externe AVG-jurist  
**Acties nodig:**
- Toestemmingsflow voor data delen
- Mantelzorg data gevoeligheid check
- Data-governance model
**Target:** Q2 2026

---

### **4. Geen kosten-indicatie**
**Status:** 🟡 Planned  
**Prioriteit:** Medium  
**Beschrijving:** Formele zorg footprint niet berekend in euro's  
**Gewenst door:** Jan (gemeente), Peter (zorgverzekeraar)  
**Vereist:**
- Tarief database per professional type
- Berekening totale maandlasten
- ROI calculator bij verschuiving
**Target:** Q2 2026

---

### **5. Geen outcome meting**
**Status:** 🟡 Planned  
**Prioriteit:** Medium  
**Beschrijving:** Geen follow-up na 3/6 maanden  
**Gewenst door:** Prof. Hendriksen, Suus  
**Vereist:**
- Evaluatie moment toevoegen
- Pre-post design
- Outcome indicators definiëren
**Target:** Pilot fase Q2-Q3 2026

---

## 💡 **FEATURE REQUESTS**

### **6. Kopieer supporter naar meerdere domeinen**
**Status:** 🔵 Requested  
**Prioriteit:** Low  
**Wie:** Karin (wijkteam)  
**Beschrijving:** Als partner helpt op 5 domeinen, moet je nu 5x dezelfde persoon toevoegen  
**Oplossing:** "Kopieer naar ander domein" knop bij supporter  
**Effort:** 20 min  
**Target:** Toekomstige versie

---

### **7. Lokale interventie database**
**Status:** 🔵 Requested  
**Prioriteit:** Low  
**Wie:** Karin, Suus  
**Beschrijving:** Nu landelijke interventies, mis lokale initiatieven  
**Oplossing:** Per gemeente eigen interventie toevoeg-functie  
**Effort:** 2 uur  
**Target:** Na pilot

---

### **8. AI matching top 3 interventies**
**Status:** 🔵 Nice to have  
**Prioriteit:** Low  
**Wie:** Prof. Van den Berg  
**Beschrijving:** Slimme selectie van beste 3-5 interventies obv profiel  
**Vereist:** Matching algoritme ontwikkelen  
**Effort:** 4+ uur  
**Target:** V5.0

---

### **9. Dark mode**
**Status:** 🔵 Nice to have  
**Prioriteit:** Very low  
**Beschrijving:** Voor avondgebruik  
**Effort:** 1 uur  
**Target:** Toekomstige versie

---

### **10. Multi-language support**
**Status:** 🔵 Nice to have  
**Prioriteit:** Very low  
**Beschrijving:** Engels voor internationale versie  
**Effort:** 4+ uur  
**Target:** Internationale uitrol

---

## 🔧 **TECH DEBT**

### **11. Code comments in Engels**
**Status:** 🟢 Nice to have  
**Prioriteit:** Very low  
**Beschrijving:** Mix van NL/EN comments  
**Fix:** Standaardiseren  
**Effort:** 1 uur  
**Target:** V5.0

---

### **12. Responsive design**
**Status:** 🟡 Partial  
**Prioriteit:** Medium  
**Beschrijving:** Desktop-first, tablet/mobile niet getest  
**Vereist:** Breakpoints + testing  
**Effort:** 3 uur  
**Target:** Na pilot feedback

---

## ✅ **RECENT OPGELOST**

### ~~**Console.log debug code**~~
**Opgelost:** 25 februari 2026  
**Oplossing:** Alle 18 console.logs verwijderd

### ~~**Lege velden in state**~~
**Opgelost:** 25 februari 2026  
**Oplossing:** cleanEmptyFields() bij elke saveState()

### ~~**Geen validatie inputs**~~
**Opgelost:** 25 februari 2026  
**Oplossing:** validateTriage(), validatePostcode()

### ~~**Domeinscan te uitgebreid**~~
**Opgelost:** 25 februari 2026  
**Oplossing:** Versimpeld naar 3 vragen (60% sneller)

### ~~**Spider diagram niet prominent**~~
**Opgelost:** 25 februari 2026  
**Oplossing:** #2 positie, groot groen blok, shadow

### ~~**Interventies overweldigend**~~
**Opgelost:** 25 februari 2026 (partial)  
**Oplossing:** Database klaar, UI volgt morgen

---

## 📊 **PRIORITEITEN**

### **MORGEN (26 feb):**
1. 🔴 Evidence-based interventies live
2. 🔴 Doelgroep chips fix
3. 🟡 Volledige test beide modes

### **DEZE WEEK:**
4. 🟡 Documentatie compleet
5. 🟡 Test met 2-3 collega's

### **Q2 2026:**
6. 🔴 Privacy/AVG audit
7. 🟡 Kosten-indicatie
8. 🟡 Outcome meting pilot

### **TOEKOMST:**
9. 🔵 Lokale interventies
10. 🔵 Responsive design
11. 🔵 AI matching

---

## 🎯 **DEFINITIE VAN "DONE"**

**Voor pilot:**
- [x] Core flows werken
- [ ] Evidence interventies live
- [ ] Doelgroep chips werken
- [ ] Privacy disclaimer toegevoegd
- [x] Volledige documentatie
- [x] Test instructies

**Voor uitrol:**
- [ ] AVG audit compleet
- [ ] Privacy toestemmingsflow
- [ ] Kosten-indicatie basis
- [ ] Responsive design
- [ ] Training materiaal

**Voor publicatie:**
- [ ] Validatie studie (inter-rater)
- [ ] Outcome data (N>30)
- [ ] Methodologie paper
- [ ] Theoretisch kader gedocumenteerd

---

**Beheer:** Laura + Marie  
**Review:** Maandelijks  
**Updates:** Na elke release

---

*Laatst bijgewerkt: 25 februari 2026, 20:32*
