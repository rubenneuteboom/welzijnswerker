# 🧒 Familie Portal - Jeugd/CJG Perspectief

**Door: Multidisciplinair Jeugdteam**  
**Datum: 19 maart 2026**

---

## 🎯 **WAAROM JEUGD ANDERS IS DAN OUDERENZORG:**

### **Kernverschillen:**

| Ouderenzorg | Jeugdzorg |
|-------------|-----------|
| Cliënt = ouder, hulp van kinderen | Cliënt = kind/jongere, hulp van ouders |
| Privacy beperken (ouder beschermen) | Privacy ontwikkelen (jeugd autonomie leren) |
| Wilsonbekwaamheid (dementie) | Ontwikkelende wilsbekwaamheid (12-18 jaar) |
| Mantelzorger overbelast | Ouders onder druk / vechtscheiding |
| Eén netwerk | Multi-netwerken (school, thuis, vrienden) |

**Implicatie:**  
Familie Portal voor jeugd ≠ alleen ouderenzorg-variant aanpassen, maar **fundamenteel andere logica**

---

## 👶 **LEEFTIJDSFASEN & TOEGANG:**

### **0-11 jaar: Ouders bepalen** ✅ (zoals ouderenzorg)
- Kind heeft geen inlogaccount
- Ouders + professionals hebben toegang
- Bij scheiding: beide ouders recht op info (tenzij gezag ontzegd)

### **12-15 jaar: Transitie** ⚠️ (NIEUW!)
- Jongere **moet** betrokken worden (WGBO art. 7:450 lid 1)
- Ouders mogen meekijken, maar niet alles (afhankelijk onderwerp)
- Jongere kan sommige dingen verbergen (seksualiteit, relaties)

**Voorbeeld:**
```
Lisa (14 jaar) praat met schoolmaatschappelijk werk over identiteit.
→ Lisa bepaalt: "Ouders mogen dit NIET weten"
→ Portal respecteert dit (tenzij gevaar)
```

### **16-17 jaar: Zelfbeschikkingsrecht** 🔴 (KRITIEK!)
- Jongere is **zelf cliënt** (WGBO: vanaf 16 jaar eigen toestemming)
- Ouders mogen ALLEEN meekijken met **expliciete toestemming jongere**
- Portal moet dit faciliteren (nu niet!)

**Voorbeeld:**
```
Kevin (17 jaar) heeft depressie, gesprekken met psycholoog.
→ Kevin bepaalt: "Mama mag afspraken zien, papa niet (alcoholist)"
→ Portal moet deze split ondersteunen
```

### **18+ jaar: Volwassen** (meerderjarig)
- Ouders hebben GEEN automatisch recht meer
- Jongvolwassene beslist zelf (zoals ouderenzorg-model)

---

## 🚨 **KRITIEKE JEUGD-SPECIFIEKE ISSUES:**

### **1. Vechtscheiding & Co-ouderschap** 🔥🔥🔥

**Scenario:**
```
Maud (13 jaar) woont 50/50 bij mama (Linda) en papa (Rob).
Ouders zijn in oorlog, communiceren niet.

Mama zegt: "Papa mag NIETS zien over therapie"
Papa zegt: "Ik heb gezag, ik WIL alles weten"
Maud zegt: "Ik wil dat niemand mijn dagboek leest"
```

**Juridisch:**
- **Beide ouders hebben gezag** (tenzij rechter anders beslist)
- **Beide hebben recht op info** over kind (Jeugdwet art. 1.1)
- **Maar:** Kind heeft recht op privacy (VN Kinderrechtenverdrag art. 16)

**Hoe lost portal dit op?**

**🚨 NU NIET! Dit is showstopper voor jeugdzorg.**

**Oplossing:**
```javascript
// Configuratie per kind
childProfile = {
  name: 'Maud',
  age: 13,
  legalGuardians: ['Linda', 'Rob'], // beiden gezag
  
  privacyRules: {
    therapyNotes: {
      visibleTo: ['therapist', 'Maud'],
      parentAccess: 'summary-only', // Alleen samenvatting, niet details
      maudApproval: true // Maud moet expliciete toestemming geven
    },
    schoolReports: {
      visibleTo: ['both-parents'], // Beiden zien dit
    },
    friendships: {
      visibleTo: ['Maud-only'], // Alleen Maud
    }
  }
}
```

**Tijd om te bouwen:** 20 uur (complex!)  
**Prioriteit:** 🔴 BLOCKER voor jeugd-gebruik

---

### **2. Kindermishandeling detectie** 🔥🔥🔥

**Scenario:**
```
Jayden (8 jaar) heeft blauwe plekken.
Schoolverpleegkundige vermoedt huiselijk geweld.
→ Mag papa (verdachte) dit in portal zien? NEE!
```

**Juridisch:**
- **Meldcode huiselijk geweld & kindermishandeling** (Wmo art. 4.1.2)
- Professional MOET melden bij Veilig Thuis
- **Ouder mag NIET weten** dat er melding is (bescherming kind)

**Hoe lost portal dit op?**

**Oplossing:**
```javascript
// Geheime sectie (alleen professionals)
professionalOnlySection = {
  title: "Signalen huiselijk geweld",
  visibleTo: ['professionals'], // NOOIT ouders
  encrypted: true,
  auditTrail: true // Log wie het zag
}

// Alert bij poging toegang
if (user.role === 'parent' && tries_to_access('professional-only')) {
  log_security_incident();
  notify_regisseur();
}
```

**Tijd:** 8 uur  
**Prioriteit:** 🔴 URGENT (juridisch verplicht)

---

### **3. Multi-ouder situaties (stiefgezinnen)** 🔥🔥

**Scenario:**
```
Sophie (10 jaar):
- Biologische mama (Linda)
- Biologische papa (Tom) - geen contact meer
- Stiefpapa (Marc) - dagelijkse verzorger
- Oma (Els) - oppas 2x per week

Wie mag wat zien?
```

**Juridisch:**
- **Gezag:** Alleen Linda (papa ontzegd door rechter)
- **Dagelijkse zorg:** Marc doet het, maar heeft geen gezag
- **Praktijk:** Marc moet kunnen, maar juridisch mag hij niet

**Probleem voor portal:**  
Juridische rechten ≠ praktische rol

**Oplossing:**
```javascript
roles = {
  'Linda': {
    legalStatus: 'parental-authority', // Gezag
    practicalRole: 'primary-caregiver',
    access: 'full'
  },
  'Marc': {
    legalStatus: 'none', // Geen gezag
    practicalRole: 'daily-caregiver',
    access: 'limited-with-consent', // Linda moet toestemming geven
    consentGivenBy: 'Linda',
    consentDate: '2026-01-15'
  },
  'Els': {
    legalStatus: 'none',
    practicalRole: 'occasional-support',
    access: 'appointments-only' // Alleen schema
  }
}
```

**Tijd:** 12 uur  
**Prioriteit:** 🟠 HOOG (veel stiefgezinnen)

---

### **4. Schoolkoppeling & AVG** 🔥

**Scenario:**
```
Portal toont:
- Rapport cijfers
- Gedragsproblemen op school
- Pesten-incidenten

School zegt: "Dit mag alleen met toestemming ouders EN school"
```

**Juridisch:**
- **AVG:** School is eigen verwerkingsverantwoordelijke
- **Verwerkersovereenkomst** nodig tussen school en portal
- **Toestemming** beide partijen (ouders + school)

**Probleem:**  
Portal kan niet zomaar school-data tonen zonder overeenkomst

**Oplossing:**
```javascript
// School-module (opt-in)
schoolIntegration = {
  enabled: false, // Default uit
  schoolConsent: null,
  parentConsent: null,
  
  activate() {
    // Stap 1: School tekent verwerkersovereenkomst
    // Stap 2: Ouders geven toestemming
    // Stap 3: Data-sync via beveiligde API
  }
}
```

**Tijd:** 30 uur (API-koppeling + juridisch)  
**Prioriteit:** 🟡 LATER (nice-to-have, geen must)

---

### **5. Jongeren-eigen toegang (12+)** 🔥🔥🔥

**Wat jongeren zeggen:**
> "Mijn moeder checkt constant mijn gesprekken met de psycholoog. Ik durf niks te zeggen."  
> *— Daan, 15 jaar*

**Wat mist:**
- **Eigen inlogaccount** voor jongere (vanaf 12 jaar)
- **Privé-sectie** die ouders NIET zien (therapeutgesprekken, vriendschappen)
- **Transparantie:** Jongere ziet WIE hun data inkeek ("Mama heeft 3x gekeken vandaag")

**Oplossing:**
```javascript
// Jongere-account (vanaf 12 jaar)
youthAccount = {
  age: 15,
  ownLogin: true,
  
  sections: {
    therapy: {
      visibility: 'youth-only', // Ouders zien NIET
      shareWithParents: false
    },
    medicalEmergency: {
      visibility: 'parents-can-see', // Wel zichtbaar
      reason: 'Ouders moeten weten bij nood'
    }
  },
  
  auditLog: {
    enabled: true,
    showTo: 'youth', // Jongere ziet wie keek
    alertOn: 'excessive-viewing' // Alert als ouder 10x per dag checkt
  }
}
```

**Tijd:** 16 uur  
**Prioriteit:** 🔴 URGENT (vanaf 12 jaar wettelijk recht op privacy)

---

## 🧑‍⚕️ **WAT ZEGGEN JEUGD-PROFESSIONALS?**

### **👨‍⚕️ Jeugdarts (Dr. Patel):**
> "Bij jeugd werken we met **ontwikkelingsperspectief**. Een 6-jarige kan niet beslissen, een 16-jarige wel.
>
> Portal moet **meegroeien** met het kind. Niet statisch."

**Aanbeveling:**
```javascript
// Automatische aanpassing bij verjaardag
ageBasedPrivacy = {
  '0-11': 'parents-decide',
  '12-15': 'shared-decision', // Jongere + ouders samen
  '16-17': 'youth-decides', // Jongere primair
  '18+': 'adult' // Volledige autonomie
}

// Alert bij overgang
on_birthday(12) {
  notify_youth("Je bent nu 12! Je krijgt meer privacy-controle.");
  notify_parents("Vanaf nu heeft [naam] meer zeggenschap over privacy.");
}
```

---

### **🎓 Schoolmaatschappelijk werker (Anna):**
> "Ik praat met jongeren over pesten, identiteit, seksualiteit. Dit MOET vertrouwelijk blijven.
>
> Als ouders automatisch meekijken → jongeren durven niet te praten → hulp faalt."

**Aanbeveling:**
```
Vertrouwelijk-vlag per gesprek:
☑ Dit gesprek is vertrouwelijk (ouders zien NIET)

Uitzondering: Bij acuut gevaar (suïcide, misbruik) → altijd delen
```

---

### **👨‍🏫 Gedragswetenschapper (Mark):**
> "Puberteit = autonomie ontwikkelen. Portal die alles aan ouders toont = **infantiliserend**.
>
> Tieners moeten leren: 'Mijn data, mijn keuzes' (binnen veilige grenzen)."

**Aanbeveling:**
```
Educatieve module:
"Jij bepaalt wie wat ziet. Hier leer je hoe."

Stap 1: Wat is privacy?
Stap 2: Wie vertrouw je?
Stap 3: Oefenen met keuzes
Stap 4: Activeer je privacy-instellingen
```

---

### **🧑‍⚖️ Jeugd-jurist (Miriam):**
> "Vechtscheidingen = juridisch mijnenveld. Als portal het fout doet:
>
> - Papa dient klacht in bij AP (Autoriteit Persoonsgegevens)
> - Gemeente aansprakelijk
> - Portal offline
>
> Zonder gedegen juridische module = DON'T LAUNCH."

**Aanbeveling:**
```
Juridische check bij activeren portal:
1. Wie heeft gezag? (beide ouders / één ouder / voogd)
2. Zijn er beperkingen? (omgangsverbod, contactverbod)
3. Is er uitspraak rechter? (upload document)

→ Portal past zich aan op basis van juridische status
```

---

## 🎯 **WAT MIST ER NU (Jeugd-specifiek):**

### **KRITIEK (moet erin):**

| # | Feature | Tijd | Impact |
|---|---------|------|--------|
| 1 | Leeftijdsgebonden privacy (12/16/18 jaar) | 16u | 🔥🔥🔥 |
| 2 | Vechtscheiding-module (co-ouderschap) | 20u | 🔥🔥🔥 |
| 3 | Professional-only sectie (kindermishandeling) | 8u | 🔥🔥🔥 |
| 4 | Jongeren-eigen account (vanaf 12 jaar) | 16u | 🔥🔥🔥 |
| 5 | Stiefgezin-rollen (juridisch vs praktisch) | 12u | 🔥🔥 |
| **Totaal** | | **72u** | **= 9 dagen** |

---

### **BELANGRIJK (later):**

| # | Feature | Tijd |
|---|---------|------|
| 6 | Schoolkoppeling (cijfers, gedrag) | 30u |
| 7 | Privacy-educatie jongeren (tutorial) | 8u |
| 8 | Audit-log voor jongeren ("Wie keek?") | 6u |
| 9 | Alert bij overmatig checken ouder | 4u |
| **Totaal** | | **48u** |

---

## 💡 **COMPLETE JEUGD-VARIANT BOUWEN:**

**Optie A: Jeugd-module toevoegen aan bestaand portal**  
= Complexe if/else logica ("Als leeftijd < 12, dan...")  
**Tijd:** 100+ uur (verwarrend, foutgevoelig)

**Optie B: Apart Jeugd-portal**  
= Dedicated versie voor jeugd (0-23 jaar)  
**Tijd:** 80 uur (clean, overzichtelijk)

**Advies:** Optie B (apart portal)

---

## 🎯 **PRIORITEITEN VOOR JEUGD:**

### **Nu (pilots):**
1. Bepaal: Beginnen we MET jeugd, of ALLEEN ouderenzorg eerst?

**Als JA jeugd:**
- Bouw de 5 kritieke features (72u = 9 dagen)
- Pilot met 5 gezinnen (geen vechtscheidingen!)
- Evalueer juridische risico's

**Als NEE jeugd:**
- Focus op ouderenzorg-portal
- Jeugd-variant = jaar 2

---

## 📊 **ACADEMISCHE CONSENSUS (Bram + Jeugd-experts):**

> "Jeugd-portal is **moeilijker** dan ouderenzorg:
>
> - Ontwikkelingsperspectief (privacy groeit mee)
> - Juridisch complexer (gezag, scheiding, 16-jaar grens)
> - Emotioneel zwaarder (pubers vs ouders = conflict)
> - Hogere stakes (fout = trauma kind)
>
> **Advies:** Start met ouderenzorg. Pas als dat werkt → jeugd.
>
> Jeugd is **niet** ouderenzorg-light, maar **andere discipline**."

---

## 🎯 **EINDADVIES AAN JOU:**

### **Scenario 1: Focus op ouderenzorg (aanbevolen)**
- Bouw portal voor 65+ (zoals nu)
- Mantelzorgers, partners, kinderen van ouders
- Juridisch simpeler, emotioneel minder risicovol
- **Tijd:** 50 uur (privacy + design)

### **Scenario 2: Ook jeugd (ambitieus)**
- Bouw APARTE jeugd-variant
- 0-23 jaar, ouders, scholen, jeugdzorg
- **Tijd:** 120 uur (ouderenzorg 50u + jeugd 72u)

---

## 💬 **Mijn vraag aan jou:**

**Wil je jeugd erbij, of eerst alleen ouderenzorg perfectioneren?**

**Jeugd = 2x zo complex, maar ook 2x zo groot (50% bevolking <23 jaar).**

💚
