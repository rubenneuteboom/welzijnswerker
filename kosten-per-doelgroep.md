# Kosten per doelgroep - RPA Niveau 3

## 6 Doelgroepen uit niveau 2

### 🧠 GGZ (Geestelijke gezondheidszorg)

**Informeel:** €0
- Familie/vrienden ondersteuning
- Peer support informeel

**Collectief:** €100-200/maand
- Ervaringsdeskundige groepen
- Wijkteam preventie GGZ
- Dag activiteiten centrum GGZ
- Lotgenotencontact georganiseerd

**Formeel:** €600-1500/maand (ambulant) | €5000-8000/maand (klinisch)
- FACT/ACT begeleiding: €900-1200
- Ambulante behandeling: €600-900
- Beschermd wonen + GGZ: €3000-4000
- Klinische opname: €5000-8000

---

### 👤 Jongeren (18-27 jaar)

**Informeel:** €0
- Familie/netwerk
- Vrienden ondersteuning
- Online communities

**Collectief:** €75-150/maand
- Jongerenwerk
- Groepsactiviteiten/sport
- Praktische training (koken, budget)
- Maatjesproject jongeren

**Formeel:** €400-800/maand
- Jeugdhulp uitstroom (18+): €500-700
- Schuldhulpverlening jongeren: €150-250
- Woonbegeleiding: €600-800
- Ambulante GGZ jongeren: €600-900

**Opmerking:** Jongeren vaak lichter/goedkoper dan ouderen (minder chronische zorg)

---

### 🤝 Mantelzorgers (ondersteuning voor mantelzorgers)

**Informeel:** €0-100/maand
- Steun uit eigen netwerk
- Vrijwillige respijtzorg
- Indirecte kosten: arbeidsuitval, verzuim (€100-300)

**Collectief:** €50-150/maand
- Mantelzorgcafé
- Lotgenotencontact
- Cursus 'omgaan met mantelzorg'
- Tijdelijke respijtzorg (dagopvang)

**Formeel:** €300-1000/maand
- Logeeropvang (week/maand): €500-1000
- Respijtzorg thuis: €300-600
- Mantelzorgconsulent: €150-300

**Opmerking:** Dit zijn kosten voor ondersteuning VAN de mantelzorger, niet van de zorgbehoevende zelf.

---

### 👴 Ouderen (65+)

**Informeel:** €0
- Familie, buren
- Informele buurtnetwerken
- Vrijwillige klussendienst

**Collectief:** €100-250/maand
- Ouderensoos/welzijn
- Maaltijdvoorziening groep
- Dagbesteding ouderen licht
- Valpreventie groepsprogramma

**Formeel:** €800-3000/maand (thuis) | €3000-6000/maand (verblijf)
- Thuiszorg basis (HbH): €400-800
- Persoonlijke verzorging: €800-1500
- Verpleging thuis: €1500-2500
- Woonzorgcentrum: €3000-4500
- Verpleeghuis: €4500-6000

**Opmerking:** Ouderen vaak duurdere zorg (lichamelijk + langdurig)

---

### 🔄 Multi-problematiek

**Informeel:** €0
- Familie (vaak beperkt door complexiteit)
- Buurtnetwerk (als er nog vertrouwen is)

**Collectief:** €150-300/maand
- Laagdrempelige dagbesteding
- Sociale werkplaats
- Verslavingszorg ambulant groep
- Schuldhulp + budgetcoaching

**Formeel:** €1000-4000/maand
- Intensieve casemanagement: €800-1200
- Beschermd wonen multi: €2500-3500
- Maatschappelijke opvang + zorg: €2000-3000
- GGZ + verslaving + schuld: €1500-2500 (ambulant)
- Klinisch multi: €4000-6000

**Opmerking:** Multi-problematiek = meerdere professionals tegelijk = duurdere coördinatie

---

### 🏘️ Sociaal-maatschappelijk

**Informeel:** €0
- Buurt/wijk netwerk
- Familie, vrienden
- Vrijwilligers

**Collectief:** €50-150/maand
- Wijkteam preventie
- Schuldhulpmaatje
- Taalcursus/inburgering groep
- Werkzoekenden training
- Sociale activering

**Formeel:** €300-800/maand
- Maatschappelijk werk: €200-400
- Schuldhulpverlening: €150-300
- Budgetbeheer: €300-500
- Re-integratie individueel: €400-800

**Opmerking:** Vaak preventief/licht, dus relatief goedkoop

---

## Implementatie niveau 3

### Optie A: Doelgroep-specifieke defaults
```javascript
const kostenPerDoelgroep = {
  ggz: { informeel: 0, collectief: 150, formeel: 900 },
  jongeren: { informeel: 0, collectief: 100, formeel: 600 },
  mantelzorgers: { informeel: 50, collectief: 100, formeel: 500 },
  ouderen: { informeel: 0, collectief: 150, formeel: 1200 },
  multiproblem: { informeel: 0, collectief: 200, formeel: 2000 },
  sociaalmaatschappelijk: { informeel: 0, collectief: 100, formeel: 500 }
};
```

### Optie B: Multiple doelgroepen = gemiddelde
Als niveau 2 aangeeft: "GGZ + Jongeren"
→ Niveau 3 neemt gemiddelde van beide: (900 + 600) / 2 = €750 formeel

### Optie C: Hoogste van de geselecteerde
Als "GGZ + Multi-problematiek" → neem de hoogste (€2000 multi) want multi is vaak leidend

---

## Conservatieve vs realistische schatting

### Conservatief (laag)
- GGZ formeel: €600 (alleen ambulant licht)
- Ouderen formeel: €800 (alleen thuiszorg)
- Multi: €1000 (alleen ambulant)

### Realistisch (gemiddeld) ⭐ **AANBEVOLEN**
- GGZ formeel: €900 (mix ambulant/intensief)
- Ouderen formeel: €1200 (mix thuiszorg/verpleging)
- Multi: €2000 (intensieve casemanagement + begeleiding)

### Hoog (worst-case)
- GGZ formeel: €6000 (klinische opname)
- Ouderen formeel: €5000 (verpleeghuis)
- Multi: €4000 (beschermd wonen + multi-behandeling)

---

## TO DO
- [ ] **Welke optie kiest Laura?** A, B, of C voor multiple doelgroepen
- [ ] **Welke schatting?** Conservatief, realistisch, of hoog als default
- [ ] Implementeren in niveau 3 strategisch.html
- [ ] Bronvermelding toevoegen per doelgroep
- [ ] Uitleg in UI: "Deze tarieven zijn gebaseerd op doelgroep X"
