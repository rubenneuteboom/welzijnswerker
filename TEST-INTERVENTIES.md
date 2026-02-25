# 🧪 TEST INSTRUCTIES - Evidence-Based Interventies

**Datum:** 25 februari 2026, 19:50  
**Status:** KLAAR VOOR TEST  
**URL:** http://localhost:3458/positioneel.html

---

## ✅ **WAT ER NIEUW IS**

### 1. **START SCHERM**
- 🫂 Checkbox: "Cliënt is overbelaste mantelzorger"
- Details: Zorgt voor (partner/ouder/kind/anders) + Uren per week

### 2. **INTERVENTIES SCHERM**
- 🎯 Evidence-based interventies PER focusgebied
- Toont alleen domeinen die geel/rood zijn (uit triage)
- TOP 3 interventies per domein
- Badges: 🟢 Evidence-based, 💚 Gratis, ⏱️ Direct beschikbaar
- Contact info: telefoon + website

### 3. **MANTELZORG INTEGRATIE**
- Als checkbox aan staat → extra interventies sectie per domein
- 🫂 "Extra voor mantelzorgers" met werk-gerelateerde interventies

### 4. **SAMENVATTING**
- Alert bovenaan bij mantelzorg context
- Advies: werk-zorg balans, respijtzorg, netwerk verdelen

### 5. **OVERZICHT**
- Mantelzorg alarm uitgebreid
- Detecteert nu ook als cliënt zelf mantelzorger is

---

## 🧪 **TEST SCENARIO**

### **STAP 1: START**
1. Open http://localhost:3458/positioneel.html
2. ✅ Zie je de checkbox "Cliënt is overbelaste mantelzorger"?
3. Vink aan
4. Kies: "Zorgt voor: Ouder" + "Uren: 20-40 uur"
5. Start gesprek

### **STAP 2: TRIAGE**
Markeer deze domeinen als geel/rood:
- 💼 Dagbesteding → 🔴 (rood - actie nodig)
- 🧠 Geestelijk → 🟡 (geel - aandacht)
- 💰 Financiën → 🟡 (geel - aandacht)

### **STAP 3: INTERVENTIES**
Ga naar het Interventies scherm.

**Verwacht:**
```
🎯 Evidence-based interventies per focusgebied

┌─ 💼 DAGBESTEDING (🔴 Actie nodig) ─────────┐
│                                              │
│ 1. Individual Placement & Support (IPS)     │
│    🟢 Evidence-based  💚 Gratis  ⏱️ Direct   │
│    Snelle plaatsing werk met continue...    │
│                                              │
│ 2. Participatiecoaching                      │
│    🟢 Evidence-based  💚 Gratis  ⏱️ Direct   │
│                                              │
│ 3. Jobcoaching                               │
│    🟢 Evidence-based  💚 Gratis  ⏱️ Direct   │
│                                              │
│ 🫂 Extra voor mantelzorgers:                │
│    - Mantelzorgverlof aanvragen             │
│    - Werkgeversgesprek mantelzorg           │
└──────────────────────────────────────────────┘

┌─ 🧠 GEESTELIJK (🟡 Aandacht) ──────────────┐
│                                              │
│ 1. Netwerkberaad (SIJN/RPA)                 │
│    🟢 Evidence-based  💚 Gratis  ⏱️ Direct   │
│                                              │
│ 2. Eigen Kracht Conferentie - GGZ           │
│ 3. FACT-teams                                │
└──────────────────────────────────────────────┘

┌─ 💰 FINANCIËN (🟡 Aandacht) ───────────────┐
│                                              │
│ 1. Eigen Kracht Conferentie - Financiën     │
│ 2. Budgetcoaching                            │
│ 3. Schuldhulpverlening                       │
│                                              │
│ 🫂 Extra voor mantelzorgers:                │
│    - Mantelzorgcompliment gemeente          │
└──────────────────────────────────────────────┘
```

### **STAP 4: SAMENVATTING**
Ga naar Samenvatting.

**Verwacht:**
- 🫂 Oranje alert bovenaan: "Cliënt is overbelaste mantelzorger"
- Details: Zorgt voor ouder(s), 20-40 uur per week
- Advies over mantelzorgondersteuning

### **STAP 5: OVERZICHT**
Ga naar Overzicht (tijdens het gesprek).

**Verwacht:**
- ⚠️ Mantelzorg alarm
- Extra melding: "Cliënt zelf is overbelaste mantelzorger"

---

## ✅ **CHECKLIST**

- [ ] Start scherm: Checkbox zichtbaar en werkend?
- [ ] Interventies: Zie je per domein (groen/geel/rood) de interventies?
- [ ] Interventies: Zie je badges (evidence, kosten, beschikbaarheid)?
- [ ] Interventies: Zie je de "Extra voor mantelzorgers" sectie?
- [ ] Samenvatting: Alert bovenaan zichtbaar?
- [ ] Overzicht: Mantelzorg alarm uitgebreid?
- [ ] Geen JavaScript errors in Console (F12)?

---

## 🐛 **ALS HET NIET WERKT**

**Check Console (F12):**
- Rode errors? → Screenshot sturen naar Marie
- "ReferenceError"? → Page refresh (Ctrl+Shift+R)
- Helemaal niets? → Cache leegmaken

**Rollback naar vorige werkende versie:**
```bash
cd ~/Documents/Projects/welzijnswerker
cp positioneel-working-backup-19-28.html positioneel.html
```

---

## 📊 **DATABASE COMPLEET**

**60 Evidence-based interventies:**

1. **Financiën** (6): Eigen Kracht, Budgetcoaching, Schuldhulp, Budgetbeheer, Bewindvoering, Mantelzorgcompliment
2. **Dagbesteding** (5): IPS, Participatie, Jobcoaching, Mantelzorgverlof, Werkgeversgesprek
3. **Huisvesting** (5): Housing First, Sociale huur, Woonbegeleiding, Mantelzorg samenwonen, Eigen Kracht Wonen
4. **Huiselijke relaties** (5): Eigen Kracht Gezin, STOP 4-7, Triple P, Relatietherapie, Veilig Thuis
5. **Geestelijk** (5): Netwerkberaad, Eigen Kracht GGZ, FACT, CGT, Herstelacademie
6. **Lichamelijk** (4): Mantelzorgondersteuning, GLI, Chronische zorg, Fysiotherapie, Wijkverpleging
7. **Verslaving** (5): CRAFT, CRA, MI, Substitutie, Beschermd wonen
8. **ADL** (5): Mantelzorg training, Ergotherapie, Hulpmiddelen, Huishoudelijke hulp, Persoonlijke verzorging
9. **Sociaal netwerk** (5): Eigen Kracht, Netwerkberaad, Maatjesprojecten, Buurt interventies, Participatieladder
10. **Participatie** (5): Vrijwilligerswerk, Statushouders, Taalcursussen, Buurtinitiatieven, Eigen Kracht Participatie
11. **Justitie** (5): Eigen Kracht Jeugdstrafrecht, Forensische zorg, Reclassering, Halt, Justitieel casemanagement

**Netwerk-focus:** Eigen Kracht Conferentie en Netwerkberaad (SIJN) in meerdere domeinen!

---

**Succes met testen!** 🚀

Marie 🌈
