# UX/UI Design Review - Niveau 2 (Positionele Analyse)

**Reviewer:** Sophie (27 jaar, UX/UI Designer)  
**Datum:** 25 februari 2026, 15:04  
**Doel:** Visuele verbetering niveau 2, rustig en gefocust

---

## 👋 **Over Sophie**

Hoi! Ik ben Sophie, UX/UI designer. Ik werk vooral met:
- Clean, moderne interfaces
- Toegankelijkheid (WCAG)
- Mobile-first design
- Gebruiksvriendelijke flows

Ik ga rustig door niveau 2 heen en geef visuele feedback. Geen haast! 🎨

---

## 🎨 **STARTSCHERM**

### **Wat ik zie:**
```
┌─────────────────────────────────────┐
│ RPA Positionele Analyse [v4.0]     │
│ Relationeel-Positioneel...          │
│                                     │
│ Naam cliënt: [invoer]              │
│ Doelgroep: [dropdown]              │
│                                     │
│ [⚡ Snelle check] [🗂️ Volledig]    │
│                                     │
│ [▶️ Start gesprek]                 │
└─────────────────────────────────────┘
```

### **Eerste indruk:**
👍 **Goed:**
- Duidelijke keuze tussen 2 opties
- Simpel, niet druk

🤔 **Kan beter:**
- **Typografie:** Titels zijn groot maar niet spannend
- **Kleurgebruik:** Veel grijs, weinig energie
- **Hiërarchie:** Alles even belangrijk (geen focus)
- **Whitespace:** Beetje krap, kan ademen

### **Suggesties:**
1. **Hero sectie** - Geef de titel meer impact
2. **Kleuraccenten** - Gebruik groen (#16a34a) voor CTA
3. **Cards** - Maak de 2 opties visuele cards (niet alleen knoppen)
4. **Icon gebruik** - Levendiger, moderner

**Prioriteit:** 🟡 Medium (werkt, maar kan pakkender)

---

## 🎨 **TRIAGE (FOCUSGEBIEDEN)**

### **Wat ik zie:**
```
11 domeinen met emoji
Per domein: 🟢 🟡 🔴 knoppen
Bij 🟡: dropdown wie helpt
```

### **Eerste indruk:**
👍 **Goed:**
- Emoji's maken het visueel en toegankelijk
- Stoplicht (🟢🟡🔴) is universeel begrijpbaar
- Grid layout werkt goed

🤔 **Kan beter:**
- **Kleuren te fel:** 🟢 is heel fel groen, 🔴 is alarm-rood
- **Hover states:** Niet duidelijk wat klikbaar is
- **Progress:** Geen indicatie hoeveel klaar is
- **Mobile:** Grid breekt niet mooi op klein scherm

### **Suggesties:**
1. **Softer colors** - Pastel groen/geel/rood (minder agressief)
2. **Progress bar** - "5 van 11 ingevuld" bovenaan
3. **Hover effect** - Subtle glow bij buttons
4. **Responsive grid** - 1 kolom op mobiel, 2 op tablet, 3 op desktop

**Prioriteit:** 🟢 Laag (functioneert goed)

---

---

## 🎨 **DOMEINSCAN (WIE HELPT - EN HOE?)**

### **Wat ik zie:**
```
Accordion met 11 domeinen
Per domein (open):
- Stoplicht status (uit triage)
- 👥 Wie helpt? (supporters lijst)
- [➕ Toevoegen knop]
- ⋯ Meer opties ▼ (cliëntreactie, netwerk, notitie)
```

### **Eerste indruk:**
👍 **Goed:**
- Accordion is logisch (veel info, compact)
- "Meer opties" inklapbaar is SLIM - niet overweldigend
- Supporters cards zien er netjes uit
- Emoji gebruik consequent

🤔 **Kan beter:**
- **Accordion styling:** Beetje saai (grijze borders)
- **Open/dicht indicator:** Niet duidelijk wat open is
- **Supporters cards:** Kunnen visueel aantrekkelijker
- **Kleurgebruik:** Veel grijs/wit, weinig onderscheid
- **Toevoegen knop:** Standaard button, kan pakkender

### **Suggesties:**
1. **Accordion headers:**
   - Kleuraccent links (groen/geel/rood obv stoplicht)
   - Chevron icon (▼ bij dicht, ▲ bij open)
   - Hover effect (subtiele background change)
   
2. **Supporters cards:**
   - Border-left in kleur van type (🟢🟣🔵)
   - Avatar placeholder (initials in cirkel)
   - Badge voor "Helpend/Belemmerend" met emoji
   
3. **Toevoegen knop:**
   - Dashed border (--- visueel uitnodigend)
   - Icon + text: "➕ Voeg persoon toe"
   - Hover: groene glow

**Prioriteit:** 🟡 Medium (werkt goed, visueel kan leuker)

---

## 🎨 **OVERZICHT (WAT ZIEN WE SAMEN?)**

### **Wat ik zie:**
```
1. ⚠️ Mantelzorg alarm (rood blok)
2. 🕸️ Spider diagram (groen blok - GROOT)
3. 📊 Aggregatie dashboard (percentages)
4. 📋 Toon details ▼ (tabellen ingeklapt)
```

### **Eerste indruk:**
👍 **Goed:**
- Hiërarchie is helder (urgent → visueel → data)
- Spider diagram prominent = GOED
- Inklapbare details = niet overweldigend
- Kleuren consistent (groen/paars/blauw voor types)

😍 **HEEL GOED:**
- Mantelzorg alarm: rood, opvallend, urgent - perfect!
- Spider in groen blok: visueel sterk, trekt aandacht
- Progress bars in aggregatie: modern, begrijpelijk

🤔 **Kan beter:**
- **Spider diagram:** Lijnen zijn dun, labels klein
- **Aggregatie:** Kan compacter (veel whitespace)
- **Details toggle:** "Toon details" is tekstueel, kan icon hebben
- **Contrast:** Sommige grijstinten te licht (WCAG contrast)

### **Suggestie:**
1. **Spider diagram:**
   - Dikkere lijnen (2px → 3px)
   - Labels groter (0.75rem → 0.85rem)
   - Misschien gradient fill (licht groen)
   
2. **Aggregatie:**
   - Compact grid (3 kolommen in plaats van verticaal)
   - Icons bij elk type (👥 informeel, 🏛️ collectief, 👔 formeel)
   
3. **Details toggle:**
   - Icon: ▼ / ▲ 
   - Styled als button (niet alleen tekst)
   
4. **Contrast check:**
   - Lichte grijstinten (#9ca3af) → donkerder (#6b7280)

**Prioriteit:** 🟢 Laag (al heel goed! Kleine polish)

---

## 🎨 **BEWEGING (WAT WORDT DE VOLGENDE STAP?)**

### **Wat ik zie:**
```
- Context blok: "Wie helpt waar" (compact overzicht)
- Voor/Na knoppen per domein
- Bewegingsrichtingen (stabiliseren/vervangen/etc)
```

### **Eerste indruk:**
👍 **Goed:**
- Context blok helpt - je ziet wat er nu is
- Voor/Na concept is helder
- Kleurcodering (formeel/collectief/informeel) consistent

🤔 **Kan beter:**
- **Voor/Na knoppen:** Niet duidelijk wat "voor" en "na" is
- **Bewegingsrichtingen:** Lange tekst, niet scanbaar
- **Visuele flow:** Geen pijl/indicatie van richting
- **Whitespace:** Te veel ruimte tussen elementen

### **Suggesties:**
1. **Voor/Na visualisatie:**
   - Twee kolommen: VOOR → STAP → NA
   - Pijl ertussen (→)
   - Kleurverschil (VOOR grijs, NA groen accent)
   
2. **Bewegingsrichtingen:**
   - Icons bij elke richting:
     - 🧱 Stabiliseren
     - 🔁 Vervangen
     - ⬆️ Opschalen
     - ⬇️ Afschalen
   - Radio buttons in plaats van text
   
3. **Compacter:**
   - Minder padding tussen domeinen
   - Grid layout (2 kolommen op desktop)

**Prioriteit:** 🟡 Medium (functioneel goed, UX kan beter)

---

## 🎨 **REFLECTIE (EVEN TERUGKIJKEN)**

### **Wat ik zie:**
```
Per domein:
- Klopt plan? [✅ Ja] [🤔 Twijfel] [❌ Nee]
- Evaluatiedatum picker
- Details inklapbaar (duurzaamheid, plan)
```

### **Eerste indruk:**
👍 **Goed:**
- Simpele ja/twijfel/nee keuze - begrijpelijk
- Emoji gebruik spreekt aan
- Details inklapbaar - niet overweldigend

🤔 **Kan beter:**
- **Button states:** Niet duidelijk welke actief is
- **Datum picker:** Standaard HTML input (saai)
- **Feedback bij "nee":** Rood blok is goed, maar kan interactiever
- **Volgorde:** Eerst alle vragen, dan details - kan leiden tot scrollen

### **Suggesties:**
1. **Button states duidelijker:**
   - Actieve button: dikke border + gevulde background
   - Hover: subtle lift effect (box-shadow)
   - Disabled: grijs out
   
2. **Datum picker:**
   - Custom styling (niet native HTML)
   - Placeholder: "Over 3 maanden" suggestie
   - Shortcut knoppen: "+1 week", "+1 maand", "+3 maanden"
   
3. **Bij "nee" geselecteerd:**
   - Inline edit (direct wijzig knop)
   - Animation (smooth reveal van rode box)
   
4. **Compacter:**
   - Grid: 2 kolommen (plan links, evaluatie rechts)

**Prioriteit:** 🟡 Medium (werkt, kleine UX verbeteringen)

---

## 🎨 **INTERVENTIES (CONCRETE VERVOLGSTAPPEN)**

### **Wat ik zie:**
```
- Postcode filter (Amsterdam 10xx-13xx)
- TOP 5 interventies met:
  - Evidence badges (🟢🟡⚪)
  - Kosten badges (💚💛💰)
  - Beschikbaarheid badges (⏱️⏳)
  - Contact info (📞🌐)
- Eigen interventie toevoegen (geel blok)
```

### **Eerste indruk:**
😍 **HEEL GOED:**
- Badges zijn SUPER - visueel, informatief
- TOP 5 limitering = slim (niet overweldigend)
- Kleurgebruik bij badges = duidelijk
- Contact info zichtbaar = praktisch

👍 **Goed:**
- Postcode filter prominent
- "Eigen toevoegen" duidelijk gescheiden

🤔 **Kan beter:**
- **Cards:** Beetje rechthoekig/saai
- **Badges:** Kunnen compacter (nemen veel ruimte)
- **Hierarchy:** Interventie naam kan prominenter
- **Spacing:** Veel witruimte tussen cards
- **Checkboxes:** Standaard HTML (niet mooi)

### **Suggesties:**
1. **Cards styling:**
   - Subtiele shadow (niet flat)
   - Border-radius 12px (rounder)
   - Hover: lift effect + border kleur change
   
2. **Badges compacter:**
   - Kleinere padding (3px 8px → 2px 6px)
   - Font-size iets kleiner (0.75rem → 0.7rem)
   - Inline-flex (1 rij in plaats van wrappen)
   
3. **Interventie naam:**
   - Groter font (1.05rem → 1.15rem)
   - Bold weight (600 → 700)
   - Kleur accent bij hover
   
4. **Custom checkbox:**
   - Styled checkbox (groene vink bij checked)
   - Animation bij check (smooth)
   
5. **Spacing:**
   - Gap tussen cards: 15px → 12px
   - Compacter = meer scanbaar

**Prioriteit:** 🟢 Laag (al heel goed! Polish)

---

## 🎨 **SAMENVATTING (WAT SPREKEN WE AF?)**

### **Wat ik zie:**
```
- Toggle: [👤 Overzicht cliënt] [📋 Professionele details]
- Samenvatting met:
  - Focusgebieden
  - Wie helpt waar
  - Beweging
  - Afspraken
- Buttons: Opslaan, Export naar niveau 3
```

### **Eerste indruk:**
👍 **Goed:**
- Toggle tussen 2 lagen = slim
- Overzichtelijk, geen visuele overload
- Print-friendly layout

🤔 **Kan beter:**
- **Toggle:** Beetje saai (grijze buttons)
- **Content:** Veel tekst, weinig visueel
- **Geen samenvatting van samenvatting:** Scroll = lang
- **Export knop:** Niet opvallend (paarse gradient is wel mooi!)
- **Print styling:** Zou mooier kunnen

### **Suggesties:**
1. **Toggle sexier:**
   - iOS-style switch? (schuifje)
   - Of: tab-design met underline animation
   - Kleur: actieve tab groen accent
   
2. **Visuele elementen:**
   - Mini spider diagram in samenvatting (snapshot)
   - Icons bij secties (📍 focusgebieden, 👥 netwerk, 🔄 beweging)
   - Timeline voor afspraken (datum met lijn)
   
3. **Summary card bovenaan:**
   - Compact overzicht in 1 oogopslag:
     - 5 domeinen aandacht
     - 12 mensen helpen
     - 3 afspraken gemaakt
   - Als "executive summary"
   
4. **Export knop prominenter:**
   - Groter, centered
   - Icon + tekst
   - Pulse animation (subtiel)

**Prioriteit:** 🟡 Medium (functioneel goed, visueel kan rijker)

---

## 🎨 **ALGEMENE OBSERVATIES**

### **😍 WAT HEEL GOED IS:**
1. **Kleurgebruik netwerktypes** (🟢🟣🔵) - consistent door hele app
2. **Emoji gebruik** - toegankelijk, universeel, leuk
3. **Badges in interventies** - informatief en visueel
4. **Hiërarchie in overzicht** - urgent → visueel → data
5. **Inklapbare secties** - niet overweldigend
6. **Spider diagram prominent** - eindelijk zichtbaar!

### **🤔 WAT KAN ALGEMEEN BETER:**

#### **1. Typografie**
- **Headers:** Kunnen impactvoller (font-weight 800, grotere size)
- **Body text:** 0.85-0.9rem is soms klein (accessibility)
- **Line-height:** Veel 1.2-1.4, kan 1.5-1.6 (leesbaarder)

#### **2. Kleurenpalet**
**Huidig:**
- Veel grijs (#6b7280, #9ca3af, #e5e7eb)
- Groen #16a34a (goed!)
- Blauw #3b82f6 (goed!)
- Paars #8b5cf6 (goed!)

**Voorstel:**
- **Primary:** #16a34a (groen) - blijft
- **Secondary:** #3b82f6 (blauw) - blijft
- **Accent:** #f59e0b (oranje) voor belangrijke CTA's
- **Grijs:** Iets warmer (niet zo koud blauwgrijs)

#### **3. Spacing**
- Te veel variance (8px, 10px, 12px, 14px, 16px, 20px...)
- **Voorstel:** Spacing scale:
  - xs: 4px
  - sm: 8px
  - md: 16px
  - lg: 24px
  - xl: 32px

#### **4. Shadows & Depth**
- Bijna alles is flat (borders only)
- **Voorstel:** Subtiele shadows voor cards:
  - `box-shadow: 0 1px 3px rgba(0,0,0,0.1)`
  - Hover: `box-shadow: 0 4px 12px rgba(0,0,0,0.15)`

#### **5. Animations**
- Bijna geen transitions
- **Voorstel:**
  - Button hover: 150ms ease
  - Accordion open/close: 300ms ease-out
  - Badge fade-in: 200ms
  - Smooth scroll bij navigatie

#### **6. Responsive**
- Desktop-first (niet mobiel getest)
- **Voorstel:**
  - Breakpoints: 640px (mobile), 768px (tablet), 1024px (desktop)
  - Test op iPhone/iPad

#### **7. Accessibility (WCAG)**
- Contrast: sommige grijstinten te licht (#9ca3af op wit = 2.8:1, moet 4.5:1)
- Focus states: niet altijd zichtbaar
- **Voorstel:**
  - Donkere grijstinten (#6b7280 of donkerder)
  - Focus ring: 2px solid #3b82f6 offset 2px
  - Skip links voor keyboard nav

---

## 📊 **PRIORITEITEN (Sophie's advies)**

### **🔴 Hoog (moet):**
1. **Contrast fixen** - WCAG compliance (accessibility)
2. **Focus states** - Keyboard navigatie
3. **Responsive check** - Werkt het op mobiel?

### **🟡 Medium (zou moeten):**
4. **Typografie verfijnen** - Headers impactvoller
5. **Spacing systematiek** - Consistent grid
6. **Button states duidelijker** - Actief/hover/disabled
7. **Voor/Na visualisatie** - Beweging scherm

### **🟢 Laag (nice to have):**
8. **Shadows toevoegen** - Diepte/moderne look
9. **Animations** - Smooth transitions
10. **Custom checkboxes** - Mooier dan HTML default
11. **Toggle styling** - iOS-style of tabs
12. **Interventie cards** - Rounder, shadow, hover lift

---

## ✅ **CONCLUSIE (Sophie)**

**Overall vibe:**  
Het is een **solide, functionele app**. Niet lelijk, maar ook niet "wow". 

**Als ik het in 1 zin moet samenvatten:**  
*"Clean en begrijpelijk, maar kan visueel pakkender en moderner."*

**Cijfer:**  
📊 **7/10** voor UX/UI

**Wat het goed doet:**
- Duidelijke flow ✅
- Goede informatie hiërarchie ✅
- Emoji gebruik werkt ✅
- Niet overweldigend ✅

**Wat het mist:**
- Visuele "wow" factor
- Moderne polish (shadows, animations)
- Volledig responsive design
- Accessibility (contrast, focus states)

**Mijn advies:**  
Focus eerst op **accessibility** (contrast + focus), dan **typografie**, dan **polish** (shadows/animations).

Niet alles tegelijk! Prioriteer 🔴 items eerst.

---

**Design review compleet:** 8 schermen bekeken  
**Tempo:** Rustig en grondig 🐢  
**Vibe:** Constructief, niet overdreven ✨

---

**Sophie (UX/UI Designer)**  
*"Make it work, make it right, make it beautiful – in that order."*
