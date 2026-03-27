# 🚀 RPA Positionele Analyse v4.4 LEAN

**Status:** ✅ Klaar voor gebruikerstest  
**Datum:** 27 maart 2026  
**Auteurs:** Laura Terbrack (methodologie) + Marie (implementatie) + Team (feedback)

---

## 🎯 Wat is dit?

**RPA v4.4 LEAN** is de **gestroomlijnde versie** van de Positionele Analyse.

### Van 20 → 12 stappen

Gebaseerd op intensieve team-feedback (Marie, Bram, Suus, Lisa, Karin, Jan, Peter) hebben we het instrument compacter en gebruiksvriendelijker gemaakt:

- **Was:** 20 schermen, 45-60 minuten
- **Nu:** 12 schermen, 25-35 minuten
- **Resultaat:** Zelfde kwaliteit, minder overweldigend

---

## 📊 De 12 stappen

| # | Scherm | Doel | Tijd |
|---|--------|------|------|
| 1 | **Organisatie** | Vanuit welke organisatie werk je? | 1 min |
| 2 | **Uitleg** | Wat gaan we doen? (optioneel) | 2 min |
| 3 | **Start** | Netwerkgesprek + instellingen | 3 min |
| 4 | **Je verhaal** | Hoe is het? Waar wil je mee aan de slag? | 5 min |
| 5 | **Focus** | Welke levensgebieden spelen? | 3 min |
| 6 | **Wie helpt?** | Netwerkanalyse per domein | 8 min |
| 7 | **Netwerk** | Visualisatie + **netwerkpositie zichtbaar** | 3 min |
| 8 | **Reflectie** | Even terugkijken: klopt dit? | 2 min |
| 9 | **Advies** | AI-suggesties (cliënt + professional) | 3 min |
| 10 | **Beweging** | Wat gaan we doen? (positionele keuze) | 5 min |
| 11 | **Hulp zoeken** | Lokale interventies, organisaties, activiteiten | 5 min |
| 12 | **Afspraken** | Wat spreken we af? | 3 min |

**Totaal:** ~30 minuten (flexibel 25-40 min afhankelijk van complexiteit)

---

## ✨ Belangrijkste verbeteringen

### 1. **Netwerkpositie nu ZICHTBAAR** (Bram + Jan + Peter)
- Was: verborgen scherm (`display:none`)
- Nu: automatisch berekend en visueel getoond in stap 7
- **Dit is de RPA-kern!** Zonder positie-inzicht geen bewuste netwerkbeweging

### 2. **Korter maar compleet** (Lisa + Karin)
- Minder stappen = minder overweldigend voor cliënt
- Sneller = praktisch haalbaar in dagelijkse praktijk
- Geen kwaliteitsverlies: dezelfde analyse, slimmer gecombineerd

### 3. **Pragmatische aanpak** (Marie)
- Hergebruik bestaande schermen waar mogelijk
- Refinement in v4.5 (volledige combinaties)
- Nu: werkend, later: perfect

### 4. **Expert mode voor team-scherm** (Suus + Lisa)
- Multidisciplinair team-scherm UIT standaard flow
- Komt terug in expert mode (v4.5)
- Cliënt ziet geen "team beslist over jou"

---

## 🔄 Verschillen met v4.3-simpel

| Aspect | v4.3-simpel | v4.4-lean |
|--------|-------------|-----------|
| Aantal schermen | 20 | **12** (-40%) |
| Gesprekstijd | 45-60 min | **25-35 min** (-35%) |
| Netwerkpositie | Verborgen! | **Zichtbaar** ✅ |
| Cliënt-overweldiging | Hoog | **Laag** ✅ |
| Praktische haalbaarheid | 6/10 | **8/10** ✅ |

---

## 🧪 Voor wie is deze versie?

### ✅ **Gebruik v4.4 LEAN als:**
- Je een **eerste gesprek** hebt (standaard flow)
- Je een **herhaalgesprek** hebt (sla intro over)
- Je wilt focussen op **snelheid + kwaliteit**
- De cliënt **niet overweldigd** mag raken
- Je wilt **netwerkpositie inzichtelijk** maken

### 🔄 **Gebruik v4.3-simpel nog als:**
- Je een zeer **complexe multi-problem case** hebt
- Je **alle 20 details** nodig hebt
- Je **team-overleg** wilt documenteren (MDO)

**Let op:** v4.3-simpel wordt binnenkort deprecated. v4.4-LEAN is de toekomst.

---

## 🚀 Hoe te gebruiken?

### Lokaal (development):
```bash
cd /Users/rubenneuteboom/Projects/welzijnswerker
python3 -m http.server 3458
```
Open: `http://localhost:3458/positioneel-v4.4-lean.html`

### Remote (Tailscale):
`https://rubens-mac-mini.tail7aaadf.ts.net:3458/positioneel-v4.4-lean.html`

---

## 📝 Roadmap

### v4.4 (huidige versie) ✅
- [x] 12 schermen flow
- [x] Netwerkpositie zichtbaar
- [x] Team-scherm uit standaard flow
- [x] Pragmatische hergebruik bestaande schermen

### v4.5 (planned)
- [ ] Hulpvraag scherm volledig gecombineerd (4a + 4b → 1 scherm)
- [ ] Focusgebieden gecombineerd (quickscan + triage → 1 scherm)
- [ ] Advies gecombineerd (cliënt + pro → tabs in 1 scherm)
- [ ] Lokaal aanbod gecombineerd (interventies + org + activiteiten → 1 scherm)
- [ ] Expert mode toggle (incl. team-scherm)
- [ ] Fast-track optie (sla intro over)

### v4.6 (future)
- [ ] Kosten-impact visualisatie
- [ ] Evidence-based interventie scores
- [ ] Aggregatie voor beleidsrapportage (niveau 3 link)

---

## 🎓 Wetenschappelijke basis

**RPA methodologie:**
- Ontwikkeld door Laura Terbrack (SIJN eigenaar)
- Gebaseerd op relationele netwerktheorie
- Focus: positionele beweging > meer zorg
- Doel: systeemplafond doorbreken door bewuste keuzes

**Team-validatie:**
- **Bram** (sociaal wetenschapper) → methodologisch valide ✅
- **Suus** (Trimbos GGZ expert) → praktisch bruikbaar ✅
- **Lisa** (ervaringsdeskundige) → cliëntwaardig ✅
- **Karin** (sociaal werker) → dagelijks toepasbaar ✅
- **Jan** (Wmo beleid) → systeem-impact meetbaar ✅
- **Peter** (zorginkoop) → preventie-effectief ✅

**Score:** 6.8/10 → 8.5/10 (verwacht na v4.5)

---

## 📚 Documentatie

- **Team feedback:** `TEAM-FEEDBACK-v4.3-simpel.md`
- **Changelog:** `V4.4-LEAN-CHANGELOG.md`
- **Implementatie status:** `IMPLEMENTATIE-STATUS.md`
- **Gebruikersfeedback (niveau 2):** `FEEDBACK-NIVEAU2.md`

---

## 🐛 Known issues

1. **Schermen nog niet volledig gecombineerd** (v4.4 = pragmatisch, v4.5 = volledig)
2. **Navigatie kan soms oude IDs gebruiken** (wordt gefixed in v4.5)
3. **Expert mode nog niet geïmplementeerd** (komt in v4.5)

**Maar:** De basis flow werkt! Je kunt het NU al gebruiken.

---

## 🙏 Credits

**Team (27 maart 2026):**
- 🌈 **Marie** - Implementatie, UX design, pragmatisch denken
- 📊 **Bram** - Methodologische validatie, RPA-kern bewaken
- 🏥 **Suus** - Trimbos perspectief, praktische haalbaarheid
- 💬 **Lisa** - Cliënt perspectief (non-negotiable!)
- 👥 **Karin** - Sociaal werk praktijk, tijdsrealistisch
- 🏛️ **Jan** - Beleidsmatige impact, systeemplafond focus
- 💼 **Peter** - Kosten-effectiviteit, preventie ROI

**Eigenaar:**
- **Laura Terbrack** - SIJN methodologie, RPA ontwikkeling

---

## 📞 Contact

Voor vragen, bugs, of suggesties:
- **GitHub:** https://github.com/rubenneuteboom/welzijnswerker
- **Feedback:** Gebruik `FEEDBACK-NIVEAU2.md` formulier

---

**Status:** ✅ **Ready for field testing!**

*Gebouwd met ❤️ door het RPA team*  
*27 maart 2026*
