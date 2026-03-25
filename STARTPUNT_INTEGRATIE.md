# 🎯 Startpunt-selectie Niveau 2 - Integratie-instructies

## Context
**Team-beslissing:** Niveau 2 moet beginnen met een **organisatie-selectie** (vanuit welk perspectief werkt de professional?), niet direct met een abstracte doelgroepkeuze.

**Reden:** In de praktijk bepaalt de organisatie welke domeinen prioriteit hebben. Een GGZ-instelling focust anders dan een schuldhulpverlener.

---

## ✅ Wat is gebouwd?

Een nieuwe **Stap 0: "Vanuit welke organisatie werkt u?"** met 8 startpunten:

| Startpunt | Emoji | Focus domeinen | Type |
|-----------|-------|----------------|------|
| Wijkteam | 🏘️ | Alle 11 | Generalistisch |
| GGZ-instelling | 🧠 | GGZ + 5 aanpalend | Specialistisch |
| Mantelzorgorganisatie | 🫂 | Mantelzorg + 4 aanpalend | Ondersteuning |
| Schuldhulpverlening | 💰 | Financiën + 3 aanpalend | Financieel |
| Ouderenzorg/Wijkverpleging | 👴 | Lichamelijk + 5 aanpalend | Zorg |
| Maatschappelijke opvang | 🏠 | Wonen + 4 aanpalend | Crisis |
| Reclassering/Justitie | ⚖️ | Justitie + 4 aanpalend | Re-integratie |
| Jeugdzorg (CJG) | 🧒 | Gezin + 4 aanpalend | Jeugd |

---

## 📁 Bestanden

### 1. `positioneel-startpunt-addon.html` (7.5 KB)
Bevat:
- HTML voor de startpunt-selectie screen
- JavaScript voor `app.selectStartpunt()`
- Configuratie per startpunt (welke domeinen actief?)

### 2. Dit bestand (`STARTPUNT_INTEGRATIE.md`)
Instructies voor integratie

---

## 🔧 Integratie-stappen (voor Ruben)

### Stap 1: Backup maken ✅
```bash
cd /Users/rubenneuteboom/Projects/welzijnswerker
cp positioneel.html positioneel-backup-$(date +%Y%m%d-%H%M%S).html
```
*(al gedaan)*

### Stap 2: Voeg screen-startpunt toe
Open `positioneel.html` en voeg **vóór regel 3826** (screen-intro) het volgende toe:

```html
<!-- STAP 0: Startpunt selectie -->
<div class="screen" id="screen-startpunt">
    <!-- Kopieer inhoud van positioneel-startpunt-addon.html (HTML deel) -->
</div>
```

### Stap 3: Voeg JavaScript toe
Voeg aan het `app`-object (rond regel 13000+) de volgende functies toe:

```javascript
// Voeg toe aan app-object
startpunt: null,

startpuntConfig: {
    // Kopieer volledige config uit positioneel-startpunt-addon.html
},

selectStartpunt: function(type) {
    // Kopieer functie uit addon
},

filterDomainsByStartpunt: function(type) {
    // Kopieer functie uit addon
}
```

### Stap 4: Update initiële screen
Zoek in `app.init()` of `DOMContentLoaded` waar de eerste screen wordt getoond.

**Vervang:**
```javascript
app.goToScreen('intro');
```

**Door:**
```javascript
if (!app.startpunt) {
    app.goToScreen('startpunt');
} else {
    app.goToScreen('intro');
}
```

### Stap 5: Update progress indicator
De bestaande `updateProgressSteps()` moet rekening houden met gefilterde domeinen.

**Voeg toe in `updateProgressSteps()`:**
```javascript
// Filter alleen geselecteerde domeinen
const activeDomains = this.domains.filter(d => d.geselecteerd !== false);
```

### Stap 6: Opslaan in localStorage
Voeg toe aan `saveData()`:
```javascript
data.startpunt = this.startpunt;
```

En in `loadData()`:
```javascript
if (data.startpunt) {
    this.startpunt = data.startpunt;
    this.filterDomainsByStartpunt(this.startpunt);
}
```

---

## 🧪 Testen

### Testscenario's:

1. **Nieuwe gebruiker:**
   - Start app → moet screen-startpunt zien
   - Kies "GGZ-instelling" → alleen 6 relevante domeinen zichtbaar
   - GGZ staat als eerste in de lijst

2. **Terugkerende gebruiker:**
   - Data geladen uit localStorage
   - Startpunt wordt onthouden
   - Gefilterde domeinen blijven actief

3. **Wijkteam (controle):**
   - Kies "Wijkteam" → alle 11 domeinen zichtbaar (zoals nu)

4. **Schuldhulp (specifiek):**
   - Kies "Schuldhulpverlening" → alleen 4 domeinen (financiën, dagbesteding, wonen, ggz)

---

## 🎨 UI Details

### Badge kleuren per type:
- **Generalistisch** (Wijkteam): `badge-info` (blauw)
- **Specialistisch** (GGZ): `badge-warning` (oranje)
- **Ondersteuning** (Mantelzorg): `badge-success` (groen)
- **Financieel** (Schuldhulp): `badge-danger` (rood)
- **Zorg** (Ouderenzorg): `badge-info` (blauw)
- **Crisis** (Opvang): `badge-warning` (oranje)
- **Re-integratie** (Reclassering): `badge-danger` (rood)
- **Jeugd** (CJG): `badge-success` (groen)

### Mode-card hover effect:
- Border wordt groen (`var(--primary)`)
- Lichte lift (`translateY(-5px)`)
- Shadow toeneemt

---

## 📊 Methodologische check (Bram's perspectief)

### ✅ Verbeteringen:
1. **Contextualisering**: Startpunt bepaalt relevantie (sterker dan abstracte doelgroep)
2. **Cognitive load**: Minder overweldigend (4-6 domeinen i.p.v. 11)
3. **Praktijkgerichtheid**: Aansluit bij hoe professionals werken
4. **Focus**: Prioriteit-domeinen vooraan

### ⚠️ Aandachtspunten:
- **Validatie nodig**: Test met 10 professionals per startpunt (klopt de filtering?)
- **Flexibiliteit**: Optie "Toch alle domeinen zien" toevoegen?
- **Multi-organisatie**: Wat als cliënt bij meerdere organisaties bekend is? (nu: kies primaire)

---

## 🚀 Volgende stappen (na integratie)

1. **User testing** met professionals:
   - 2 wijkteamleden
   - 2 GGZ-professionals
   - 2 schuldhulpverleners
   - Vraag: "Klopt de filtering? Mis je domeinen?"

2. **Doelgroep-keuze verplaatsen**:
   - Nu nog op intro-screen
   - Later: optioneel maken (relevanter voor Niveau 1)

3. **Startpunt-badge in header**:
   - Toon tijdens hele flow: "🧠 GGZ-instelling"
   - Knop "Wijzig startpunt" in menu

4. **Export naar Niveau 3**:
   - Voeg `startpunt` toe aan JSON-export
   - Niveau 3 kan dan analyses per organisatie-type doen

---

## 💬 Team-feedback

### Marie (implementatie):
"Makkelijk te integreren. Goede structuur. Badge-systeem past mooi bij bestaande UI."

### Bram (methodologie):
"Sterke verbetering. Operationaliseert 'contextueel werken' die we theoretisch al beschrijven. Wel user testing nodig."

### Suus (praktijk):
"Dit is hoe het werkt! In de GGZ start je niet met 'hoe gaat het financieel?' maar met 'hoe voel je je?'. Prioriteit klopt."

### Karin (wijkteam):
"Wijkteam blijft breed (goed), maar fijn dat schuldhulp nu focust. Scheelt tijd in gesprek."

---

## ❓ Vragen voor Laura

1. **Moeten professionals kunnen wisselen van startpunt tijdens het gesprek?**  
   (Bijv. GGZ → Wijkteam als blijkt dat problematiek breder is)

2. **Moeten we een "Anders/Overig" startpunt toevoegen?**  
   (Voor organisaties die niet in lijst staan)

3. **Moet de doelgroep-keuze (jongere/ouder) blijven?**  
   (Of volstaat startpunt?)

---

**Klaar voor integratie! 🚀**

Geschatte tijd: **30-45 minuten** voor Ruben om te integreren + testen.
