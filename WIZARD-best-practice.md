# Wizard Best Practice - RPA Niveau 1
## UX principles voor screening wizards

**Focus:** SIMPEL, SNEL, DUIDELIJK

---

## 1. Wizard flow principes

### ✅ DO:
- **1 vraag per scherm** (niet alles op 1 pagina)
- **Progressie laten zien** (stap 3 van 11)
- **Terug-knop mogelijk** (mensen willen kunnen corrigeren)
- **Auto-save** (niet kwijtraken bij per ongeluk sluiten)
- **Geen verplichte tekstvelden** (drempel verlagen)

### ❌ DON'T:
- Lange uitleg vooraf (mensen willen beginnen)
- Alles op 1 lange pagina (overwhelming)
- Geen progressie zichtbaar (frustreert)
- Verplichte velden als niet nodig (mensen haken af)

---

## 2. Per scherm breakdown

### Scherm 0: Intro (30 seconden lezen)
```
Welkom bij de RPA Levensscan

In 5-10 minuten krijg je overzicht van 11 levensgebieden.

💡 Dit is geen test. Geen goede of foute antwoorden.

[Start] [Meer info]
```

**Best practice:**
- Tijd vermelden (5-10 min)
- Verwachtingen managen (geen test)
- Korte intro (max 3 regels)
- Duidelijke call-to-action

---

### Scherm 1-11: Per domein (30-45 sec per scherm)

```
╔════════════════════════════════════════╗
║  Stap 3 van 11                    [◀] ║
╚════════════════════════════════════════╝

💰 Financiën
Denk aan: inkomen, schulden, rondkomen, rekeningen betalen

Hoe gaat het met je financiën?

  ○  🟢 Gaat goed
  ○  🟡 Kan beter  
  ○  🔴 Actie nodig

[Vorige]  [Volgende]
```

**Best practice:**
- **Emoji + titel** = visuele herkenning
- **Korte toelichting** = verduidelijkt zonder wall-of-text
- **Grote knoppen** = makkelijk klikken (ook op mobiel)
- **Kleurcodering** = intuïtief (groen=goed, rood=actie)
- **"Vorige" altijd zichtbaar** = correctie mogelijk

---

### Tussenscreen optie: Wie helpt? (15 sec per domein)

**Alleen ALS domein "kan beter" of "actie nodig":**

```
💰 Financiën - Actie nodig

Krijg je hier hulp bij?

☐ Familie/vrienden (informeel)
☐ Maatjesproject/buurt (collectief)  
☐ Professional/organisatie (formeel)
☐ Nog geen hulp

[Vorige]  [Volgende]
```

**Best practice:**
- Alleen vragen als relevant (conditionals!)
- Multiple choice (snel te beantwoorden)
- Optie "nog geen hulp" (eerlijk antwoord mogelijk)
- Skip optie of "weet niet" kan ook

---

### Scherm 12: Overzicht

```
✅ Bijna klaar!

Jouw overzicht:

🟢 Gaat goed (7 domeinen)
  ✓ Wonen, Gezondheid, Relaties...

🟡 Kan beter (3 domeinen)
  ⚠️ Financiën, Dagbesteding, Sociaal

🔴 Actie nodig (1 domein)
  🚨 Financiën

[Terug naar start]  [Bekijk resultaten]
```

**Best practice:**
- Samenvatting VOOR details
- Visueel (emoji, kleuren)
- Keuze: terug of verder
- Positief frame (7 gaat goed!)

---

### Scherm 13: Resultaten + Next steps

```
📊 Jouw resultaten

[Visuele weergave: bar chart of lijst]

💡 Wat nu?

Op basis van jouw scan:
  
🔴 1 domein heeft aandacht nodig: Financiën
   → Praat met iemand die je vertrouwt
   → Neem contact op met wijkteam
   → Doe niveau 2 (uitgebreide analyse)

🟡 3 domeinen kunnen beter
   → Kijk of je iets wil veranderen
   → Niet alles tegelijk!

🟢 7 domeinen gaan goed - top! 🎉

[Download PDF]  [Opnieuw beginnen]  [Naar niveau 2]
```

**Best practice:**
- Concrete next steps
- Niet alarmistisch (7 gaat goed!)
- Duidelijke acties
- Download/bewaar optie
- Link naar niveau 2 (doorstroom)

---

## 3. UX patterns

### Progressie indicator
```
[●●●○○○○○○○○] 3 van 11
```

**Waarom:**
- Geeft gevoel van vooruitgang
- Mensen weten waar ze zijn
- Motiveert om door te gaan

**Best practice:**
- Altijd zichtbaar (top of screen)
- Niet alleen nummer (visueel!)
- Klikbaar terug naar eerder scherm (optioneel)

---

### Auto-save
```javascript
// Elke keer dat user iets invult:
localStorage.setItem('rpa_niveau1_progress', JSON.stringify(state));

// Bij herladen:
const saved = localStorage.getItem('rpa_niveau1_progress');
if (saved) {
  // Vraag: "Wil je doorgaan waar je was?"
}
```

**Waarom:**
- Per ongeluk sluiten = geen probleem
- Verlaagt drempel (kan later afmaken)
- Professioneler gevoel

---

### Mobiel-first
```css
/* Grote knoppen */
button {
  min-height: 44px;  /* Apple guideline */
  min-width: 44px;
  font-size: 16px;   /* Voorkom auto-zoom iOS */
}

/* Geen hover effects als primaire feedback */
/* Gebruik :active ipv :hover op mobiel */
```

**Best practice:**
- Duim-bereik: knoppen onderaan
- Grote touch targets (44x44px minimum)
- Geen tiny radio buttons (gebruik grote cards)

---

## 4. Vergelijking goede wizards

### Typeform (★★★★★)
✅ 1 vraag per scherm  
✅ Smooth transitions  
✅ Progressie zichtbaar  
✅ Fun & engaging  

❌ Te speels voor serieus onderwerp?

### Google Forms (★★★☆☆)
✅ Simpel  
✅ Bekend  
✅ Sections mogelijk  

❌ Niet echt wizard-feel  
❌ Alles op 1 pagina = overwhelming

### Qualtrics health screeners (★★★★☆)
✅ 1 vraag per scherm  
✅ Conditional logic  
✅ Medical-grade  
✅ Auto-save  

❌ Te klinisch voor welzijn?

### **RPA Niveau 1 ideaal:**
✅ Simpel zoals Google Forms  
✅ Wizard-flow zoals Typeform  
✅ Serieus maar toegankelijk  
✅ Conditional logic (alleen vragen wat relevant is)  

---

## 5. Implementatie checklist

### Must-haves:
- [x] 1 vraag per scherm (behalve bij meerkeuze)
- [x] Progressie indicator (stap X van Y)
- [x] Terug-knop werkt altijd
- [x] Auto-save (localStorage)
- [x] Mobiel-responsive
- [x] Kleurcodering (groen/geel/rood)
- [x] Kort voorbeeld per domein

### Should-haves:
- [ ] Smooth transitions (fade in/out)
- [ ] Keyboard navigation (Enter = volgende)
- [ ] Skip optie ("weet ik niet")
- [ ] Tijd-schatting update (nog 5 min)
- [ ] Accessibility (ARIA labels)

### Nice-to-haves:
- [ ] Animatie bij progressie
- [ ] Geluid-feedback (optioneel, uit standaard)
- [ ] Dark mode
- [ ] Meerdere talen
- [ ] Delen via WhatsApp/email

---

## 6. A/B test ideeën (als je wilt optimaliseren)

### Test 1: Progressie type
- **A:** Stap 3 van 11 (tekst)
- **B:** [●●●○○○○○○○○] (visueel)
- **Meten:** Welke heeft minder drop-off?

### Test 2: Emoji gebruik
- **A:** Met emoji (💰 Financiën)
- **B:** Zonder emoji (Financiën)
- **Meten:** Welke voelt prettiger? (survey na afloop)

### Test 3: "Wie helpt" vraag
- **A:** Direct na elk domein vragen
- **B:** Pas aan einde alle "wie helpt" vragen
- **Meten:** Tijd + completion rate

---

## 7. Accessibility (WCAG 2.1)

### Must:
- **Keyboard navigatie** (Tab, Enter, Pijltjes)
- **Screen reader support** (ARIA labels)
- **Contrast ratio** 4.5:1 minimum (tekst op achtergrond)
- **Focus indicators** zichtbaar

### Example:
```html
<button 
  aria-label="Financiën gaat goed" 
  role="radio"
  aria-checked="false">
  🟢 Gaat goed
</button>
```

---

## 8. Performance

### Target:
- **Laadtijd:** <2 seconden (eerste scherm)
- **Transition:** <300ms (tussen schermen)
- **Geen jank:** 60fps animaties

### How:
- Geen zware libraries (React overkill voor wizard)
- Vanilla JS + CSS transitions
- Lazy load (alleen huidige scherm in DOM)
- Preload volgende scherm (smooth overgang)

---

## 9. Error handling

### Wat als:
**1. Niks ingevuld, op "volgende" klikt:**
```
⚠️ Kies een optie om door te gaan
(of: "Weet ik niet" / "Overslaan")
```

**2. Browser crashed halverwege:**
```
💾 We hebben je voortgang opgeslagen!
Wil je doorgaan waar je was?

[Ja, ga door]  [Nee, opnieuw]
```

**3. Alle domeinen "gaat goed":**
```
🎉 Alles gaat goed! Mooi!

Je kunt deze scan opslaan voor later,
of opnieuw doen als je situatie verandert.
```

---

## 10. Best practice: KISS (Keep It Simple, Stupid)

### ✅ Goed:
```
💰 Financiën

Denk aan: schulden, rondkomen, rekeningen

Hoe gaat het?
○ Gaat goed  ○ Kan beter  ○ Actie nodig
```

### ❌ Te complex:
```
💰 Financiën & Economische zelfredzaamheid

Hieronder verstaan we: inkomen uit werk/uitkering,
uitgaven, schulden, administratie, financiële reserves,
budgetteren, belastingaangifte, toeslagen...

Geef op een schaal van 1-10 aan hoe zelfredzaam
je bent op financieel vlak, waarbij 1 = volledige
afhankelijkheid en 10 = volledig zelfstandig.

[slider 1-10] + verplicht tekstveld toelichting
```

**Waarom slecht:**
- Wall of text (niemand leest dit)
- Vakjargon (zelfredzaamheid?)
- 10-puntsschaal (te nuance, verwarrend)
- Verplicht tekstveld (drempel te hoog)

---

## Conclusie

**Best practice RPA Niveau 1 wizard:**

1. **1 vraag per scherm** (max 30-45 sec per scherm)
2. **Progressie zichtbaar** (stap X van Y)
3. **3-puntsschaal met emoji** (groen/geel/rood)
4. **Kort voorbeeld** bij elk domein (1 regel)
5. **Auto-save** (kan later afmaken)
6. **Terug mogelijk** (correctie)
7. **Mobiel-first** (grote knoppen)
8. **Geen verplichte velden** (drempel laag)
9. **Visuele output** (niet alleen tekst)
10. **Duidelijke next steps** (wat nu?)

**Tijd totaal:** 5-10 minuten  
**Completion rate target:** >80%  
**Drop-off moment:** Meestal rond scherm 5-6 (halverwege)  
**Fix:** Motiverende tekst ("Je bent halverwege! 💪")

---

**Dit is de best practice voor niveau 1 wizard!**

*Versie 1.0 - 16 februari 2026*
