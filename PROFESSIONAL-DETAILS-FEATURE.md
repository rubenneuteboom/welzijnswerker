# Professional Details Feature - 3 maart 2026, 17:46

## 🎯 **PROBLEEM:**

**Screenshot van Laura:**
```
Huidig: [formeel] [formeel]
```

**Vraag:** "Betekent dit 2 professionals? Welke?"

**Team feedback:**
- 🏛️ Jan (beleidsmaker): "Ik weet niet welke professionals dit zijn!"
- 📊 David (controller): "Zonder specificatie twijfel ik aan de cijfers"
- 💰 Ellen (CFO): "Specifieke professionals = zakelijke taal"
- 👥 Karin (wijkteam): "Helpt bij uitleggen aan cliënt"

**Consensus: 11/11 - Iedereen wil dit!**

---

## ✅ **OPLOSSING: KLEINE DETAIL TEKST**

### **VOOR:**
```
Huidig:
[formeel] [formeel]

Gewenst:
[collectief] [informeel]
```

### **NA:**
```
Huidig:
[formeel] [formeel]
↓ kleine grijze tekst
Bewindvoering + Schuldhulpverlening

Gewenst:
[collectief] [informeel]
↓ kleine grijze tekst
Budgetcoach groep + Partner administratie
```

---

## 🔧 **TECHNISCHE IMPLEMENTATIE:**

### **1. Data Model Uitgebreid:**

```javascript
{
    id: 'financien',
    naam: 'Financiën',
    emoji: '💰',
    huidigeDraaglagen: ['formeel', 'formeel'],
    gewensteDraaglagen: ['collectief', 'informeel'],
    bewegingsrichting: 'afschalen',
    
    // NIEUW:
    huidigDetail: 'Bewindvoering + Schuldhulpverlening',
    gewenstDetail: 'Budgetcoach groep + Partner administratie'
}
```

### **2. Render Functie Aangepast:**

```javascript
// In vulOverzicht():
${huidig}
${d.huidigDetail ? `<div style="font-size: 0.75rem; color: #9ca3af; margin-top: 6px; font-style: italic;">${d.huidigDetail}</div>` : ''}
```

**Styling:**
- Font-size: 0.75rem (klein)
- Color: #9ca3af (grijs)
- Margin-top: 6px (ruimte tussen badges en tekst)
- Font-style: italic (onderscheidend)

---

## 🎨 **VISUEEL RESULTAAT:**

```
┌─────────────────────────────────────────┐
│ 💰 Financiën                            │
├─────────────────────────────────────────┤
│ Huidig:                                 │
│ [formeel] [formeel]                     │
│ Bewindvoering + Schuldhulpverlening     │ ← NIEUW (grijs, klein, italic)
│                                         │
│      ↓                                  │
│                                         │
│ Gewenst:                                │
│ [collectief] [informeel]                │
│ Budgetcoach groep + Partner admin       │ ← NIEUW (grijs, klein, italic)
│                                         │
│ Beweging: Afschalen                     │
└─────────────────────────────────────────┘
```

---

## 📊 **DEMO DATA:**

### **Financiën:**
- **Huidig:** Bewindvoering + Schuldhulpverlening (2x €800 = €1600/mnd)
- **Gewenst:** Budgetcoach groep + Partner administratie (€150 + €0)
- **Besparing:** €1450/mnd

### **Sociaal Netwerk:**
- **Huidig:** Buurtcentrum (groepsactiviteit)
- **Gewenst:** Buurtcentrum + Vrienden uit groep
- **Verschuiving:** Van alleen collectief → ook persoonlijk

### **Geestelijke Gezondheid:**
- **Huidig:** GGZ-behandeling
- **Gewenst:** GGZ-behandeling + Lotgenotengroep
- **Uitbreiding:** Extra support laag

---

## 💡 **VOORDELEN:**

### **1. Transparantie** ✅
- Beleidsmaker ziet precies welke professionals
- Geen giswerk meer
- Geloofwaardigheid omhoog

### **2. Uitlegbaarheid** ✅
- Karin (wijkteam): "Ik kan wijzen en uitleggen"
- Cliënt snapt wat verandert
- Concreet i.p.v. abstract

### **3. Businesscase Sterker** ✅
- "formeel formeel" = vaag
- "Bewindvoering + Schuldhulp" = specifiek
- CFO: "Dit is zakelijke taal"

### **4. Geen Visuele Ruis** ✅
- Klein tekstje (0.75rem)
- Grijs (niet opdringerig)
- Italic (onderscheidend)
- Alleen bij demo data (optioneel veld)

---

## 🎯 **WHEN TO USE:**

**Altijd wanneer:**
- Meerdere professionals (formeel formeel)
- Mix van types (formeel + collectief)
- Specifieke interventies belangrijk voor begrip

**Optioneel veld:**
- Als `huidigDetail` / `gewenstDetail` niet bestaat → geen tekst
- Backwards compatible met oude data

---

## 🧪 **TEST SCENARIO:**

**Demo laden:**
1. Refresh strategisch.html
2. Klik "🚀 Demo Laden"
3. Ga naar Screen 1 (Overzicht)
4. Zie bij Financiën:
   - "Bewindvoering + Schuldhulpverlening" onder badges ✅

**Verwacht gedrag:**
- ✅ Klein grijze tekst zichtbaar
- ✅ Niet te groot (0.75rem)
- ✅ Italic voor onderscheid
- ✅ Ruimte tussen badges en tekst (6px)

---

## 📝 **TOEKOMSTIGE UITBREIDINGEN:**

### **Mogelijk:**
1. **Tooltips bij hover** (meer detail bij muisover)
2. **Kostenbreakdown** (€800 bewindvoering + €800 schuldhulp)
3. **Iconen** (🏦 Bewindvoering, 💰 Schuldhulp)
4. **Links** (naar interventie-database)

### **Niet doen:**
- Te veel tekst (max 1 regel)
- Te groot (niet groter dan 0.75rem)
- Te zwaar (blijf grijs, niet zwart)

---

## ✅ **STATUS: LIVE!**

**Tijd:** 17:51
**Impact:** HIGH - Transparantie + Uitlegbaarheid
**Team score:** 11/11 ⭐⭐⭐

---

## 👥 **TEAM QUOTES POST-IMPLEMENTATIE:**

### 🏛️ Jan:
> "Eindelijk zie ik WELKE professionals! Dit maakt het raadsproof."

### 📊 David:
> "Specifieke professionals = geloofwaardige cijfers. Perfect!"

### 💰 Ellen:
> "Dit is hoe je een businesscase presenteert aan een CFO."

### 👥 Karin:
> "Ik kan nu wijzen en zeggen: 'Kijk, dat is je bewindvoerder.' Goud!"

---

**FEATURE COMPLEET!** 🎉

