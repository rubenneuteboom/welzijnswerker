# Snelle Check Verbeteringen 🎯

**Datum:** 25 februari 2026, 10:00  
**Commits:** `f20e2b8`, `17821f2`

---

## ✨ Wat is er verbeterd?

### 1. **Snelle check werkt nu echt** ✅
**Probleem:** De "⚡ Snelle check" knop deed niets - je kreeg gewoon het volledige gesprek van 8 stappen.

**Oplossing:** `getScreenConfig()` filtert nu schermen op basis van `state.snelleModusSchermen`:
- **Snelle modus:** 3 schermen (Focusgebieden → Beweging → Besluit)  
- **Volledig gesprek:** 8 schermen (alle stappen)

```javascript
function getScreenConfig() {
    // Snelle modus: retourneer alleen triage, beweging, samenvatting
    if (state.snelleModusSchermen && state.snelleModusSchermen.length > 0) {
        return screenConfigBase.filter(s => state.snelleModusSchermen.includes(s.id));
    }
    return screenConfigBase;
}
```

---

### 2. **Dynamische navigatie** 🔄
**Probleem:** Navigatieknoppen waren hardcoded naar specifieke schermen (bijv. "← Terug naar network") die niet bestaan in snelle modus → crashes.

**Oplossing:** Nieuwe helper functies die automatisch het juiste vorige/volgende scherm bepalen:

```javascript
function getPreviousScreenId() {
    const config = getScreenConfig();
    const currentIndex = config.findIndex(s => s.id === config[state.currentScreen - 1]?.id);
    if (currentIndex > 0) return config[currentIndex - 1].id;
    return 'start';
}

function getNextScreenId() {
    const config = getScreenConfig();
    const currentIndex = config.findIndex(s => s.id === config[state.currentScreen - 1]?.id);
    if (currentIndex < config.length - 1) return config[currentIndex + 1].id;
    return null;
}
```

**Gebruikt in:**
- Beweging scherm: `onclick="goToScreenById(getPreviousScreenId())"`
- Samenvatting scherm: `onclick="goToScreenById(getPreviousScreenId())"`

---

### 3. **Compact triage overzicht in Beweging scherm** 📋
**Probleem:** In snelle modus mis je het overzichtsscherm (spider diagram, netwerkkaart). Bij "Beweging" weet je niet meer wat je invulde bij "Focusgebieden".

**Oplossing:** Compact "Ter herinnering" blok bovenaan Beweging scherm (alleen in snelle modus):

```
📋 Ter herinnering | Uit focusgebieden
┌────────────────────────────────────┐
│ 💰 Financiën      🟢 Zelfstandig   │
│ 🧠 GGZ           🔴 Steun nodig    │
│ 🏠 Wonen         🟡 Steun aanwezig │
│ ...                                │
└────────────────────────────────────┘
```

**Functie:** `renderTriageRecapInBeweging()`  
**Triggert automatisch:** Wanneer je naar het beweging scherm gaat in snelle modus.

---

### 4. **Modus indicator in header** 🏷️
**Probleem:** Niet duidelijk in welke modus je zit tijdens het gesprek.

**Oplossing:** Badge naast de versie in de header:

```
RPA Positionele Analyse [v4.0 Clean] [⚡ Snelle check]
```

- **Alleen zichtbaar tijdens gesprek** (niet op startscherm)
- **Alleen in snelle modus** (volledig gesprek toont geen badge)
- **Updates automatisch** bij schermwisseling

---

## 🧪 Hoe te testen

### Snelle check flow:
1. Open `http://localhost:3458/positioneel.html`
2. Klik op **"⚡ Snelle check"** (groen randje verschijnt)
3. Klik **"▶️ Start gesprek"**
4. Check dat je **3 bolletjes** ziet in de voortgangsbalk (niet 8!)
5. Check **"⚡ Snelle check"** badge in header
6. Vul **Focusgebieden** in (triage stoplicht)
7. Klik **"Volgende"**
8. **Beweging scherm:**
   - Check **"📋 Ter herinnering"** blok bovenaan
   - Check dat **"← Terug"** naar Focusgebieden gaat
9. **Besluit scherm:**
   - Check dat **"← Terug"** naar Beweging gaat

### Volledig gesprek flow:
1. Klik **"🗂️ Volledig gesprek"**
2. Check dat je **8 bolletjes** ziet
3. Check **geen badge** in header
4. Navigeer door alle schermen
5. Check dat alle knoppen werken

---

## 📊 Impactanalyse

| Aspect | Voor | Na |
|--------|------|-----|
| **Snelle check bruikbaar?** | ❌ Nee (deed niets) | ✅ Ja (3 schermen, 20 min) |
| **Navigatie crashes?** | ⚠️ Ja (hardcoded schermen) | ✅ Nee (dynamisch) |
| **Context in Beweging?** | ❌ Nee (blind) | ✅ Ja (triage recap) |
| **Modus duidelijk?** | ⚠️ Onduidelijk | ✅ Badge in header |
| **Volledig gesprek werkt nog?** | ✅ Ja | ✅ Ja (ongewijzigd) |

---

## 🎯 Resultaat

De **⚡ Snelle check** is nu een volledig werkende, gebruiksvriendelijke modus voor professionals die:
- ✅ Snel (20 min) een eerste indruk willen krijgen
- ✅ Context willen behouden tussen schermen
- ✅ Weten welke flow ze aan het doen zijn
- ✅ Soepel kunnen navigeren zonder crashes

---

## 🔜 Toekomstige verbeteringen

Mogelijk nog toevoegen (v4.1+):
- [ ] Export optie voor snelle check (lichtere PDF)
- [ ] "Upgrade naar volledig gesprek" knop in samenvatting
- [ ] Handmatig schermen overslaan in volledig gesprek
- [ ] Snelle check historie/vergelijking over tijd

---

**Gebouwd door:** Marie 🌈  
**Voor:** Laura & het SIJN team  
**Status:** ✅ Klaar voor gebruik
