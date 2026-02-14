# Code Review: SIJN Welzijnswerker Web App
**Date:** 2026-02-14  
**File:** `index.html` (11,060 lines)  
**Reviewer:** CHEF (automated review)

---

## 1. Code Quality Review

### 1.1 Overall Structure and Organization

The entire application is a single HTML file containing:
- **Lines 1–3500:** CSS (~3,500 lines)
- **Lines 3500–4800:** HTML structure (~1,300 lines)
- **Lines 4800–11060:** JavaScript (~6,260 lines)

**Rating: 🔴 Poor** — An 11K-line monolith is unmaintainable. However, for a pilot/MVP built rapidly with AI assistance, this is understandable. The structure within each section is reasonable — CSS is grouped by component, HTML follows a logical screen flow, and JS functions are somewhat topically grouped.

### 1.2 JavaScript Quality

**Naming:** Generally good. Dutch function/variable names match the domain (`renderSamenvatting`, `toggleDoelgroep`, `getSIJNNetwerkPositie`). Some inconsistency: `goToScreen` vs `switchView`, `renderDomains` vs `renderDashboard`.

**Patterns:**
- Global mutable `state` object (line ~4890) — works for MVP but fragile
- No modules, no encapsulation — everything is global scope
- Heavy use of string-template HTML generation via template literals — fragile, no escaping
- `event` used as implicit global in click handlers (e.g., `selectSupporterType`, line ~7380) — will break in strict mode

**Error handling:** Minimal. The `analyzeWithAI()` function (line ~5180) has try/catch, but most functions have zero error handling. `loadState()` does a raw `JSON.parse` without try/catch (line ~5055).

**Dead code:**
- `zelfredzaamheidLabels` (line ~4470) — marked "Legacy labels (niet meer gebruikt)"
- `toonIntroductie()` function (line ~8100) — exact copy of intro screen content, marked "Oude modal functie (niet meer gebruikt)"
- `renderAdviceFallback()`, `renderProAdvice()`, `renderAdvice()` — entire GPT advice pipeline (~lines 9600-10300) appears deprecated since LEAN workflow doesn't navigate to advice screens
- `renderSpiderChart()`, `renderDashboardStats()`, `renderDomainQuickList()` — referenced in old dashboard but no longer called
- `drawNetwork()`, `addPerson()`, `removePerson()`, `renderPersonList()` — entire legacy network management system (~lines 7800-7950) that's been replaced by per-domain supporters
- `renderRatings()`, `updateAverageRating()` — orphaned rating system
- `renderResults()`, `renderNetworkGrowth()` — orphaned results rendering
- Commented-out `screen-hulpvraag` HTML block (lines ~4020-4130)
- `BRAVE_API_KEY` referenced but never defined (line ~10370)
- `clearAIKey()` function (line ~5270) — does nothing, just shows alert

### 1.3 CSS Quality

**Rating: 🟡 Mixed**

- Good use of CSS custom properties (`:root` variables, line ~14)
- Clean, consistent styling for most components
- **Massive inline style problem:** The HTML section (lines 3500-4800) is drowning in inline styles. The workflow bolletjes alone (lines ~3600-3700) contain ~40 inline style attributes. The intro screen (lines ~3710-3900) is almost entirely inline-styled.
- Many CSS classes defined in `<style>` are never used because inline styles override them
- Some responsive design via media queries (lines ~3070-3180) but coverage is incomplete

### 1.4 HTML Semantics and Accessibility

**Rating: 🔴 Poor**

- `<header>` has inline `style="display: flex"` overriding its CSS
- No ARIA labels on interactive elements
- No `<main>`, `<nav>`, `<section>`, `<article>` semantic elements
- Workflow bolletjes use `tabindex="0"` and `onkeydown` (good!) but inline event handlers are XSS-prone
- Form elements often lack proper `<label>` associations
- Color-only status indicators (🔴🟡🟢) — partially mitigated by emoji but could be better
- No skip navigation links
- `onclick` handlers on `<div>` elements without `role="button"`

### 1.5 Data Management

**localStorage usage:**
- Single key `welzijnswerker_v2` stores entire state as JSON
- Score migration from 1-10 to 1-5 in `loadState()` (line ~5065) — but current system is 1-3, suggesting incomplete migration
- No data size limits checked — could exceed 5MB localStorage limit with extensive history
- `loadState()` lacks try/catch — corrupted JSON would crash the app
- No data export/import beyond clipboard copy

**State handling:**
- Single global `state` object with ~30+ properties
- `saveState()` called after every interaction — could batch
- Historical tracking (`state.history`) stores unbounded arrays that grow forever
- `screenConfigBase` and `screenConfigPro` are identical (lines ~4930-4960) — dead distinction

### 1.6 Security Concerns

- **XSS vulnerability:** User input (notes, names, hulpvraag) is interpolated directly into HTML templates without escaping. Example: `state.wens` is inserted raw into template literals throughout.
- **API proxy dependency:** AI features call `http://localhost:3459/openai` — a local proxy server (`proxy-server.js`). This won't work on GitHub Pages production.
- **No input validation:** `clientName`, `hulpvraag`, etc. accept arbitrary HTML
- **No HTTPS enforcement** in the app itself (relies on GitHub Pages)

### 1.7 Performance Concerns

- **Chart.js loaded globally** from CDN (line 10) even when charts are rarely used in LEAN flow
- **Google Fonts loaded** but `body` uses `'Segoe UI', system-ui` — Nunito only used in hulpvraag section
- **Full re-render pattern:** `renderDomains()` regenerates all 11 domain cards on every interaction (score change, detail update, etc.)
- **No debouncing** on `saveState()` — every keystroke in textareas triggers localStorage write
- **Large inline SVG** in intro screen (~50 lines of SVG, lines ~3830-3890)
- **`toonIntroductie()` creates duplicate modal** with identical content to intro screen

### 1.8 Hardcoded Data That Should Be Externalized

- `domains` array (lines ~4480-4580) — 11 domain definitions
- `zelfredzaamheidPerDomein` (lines ~4390-4470) — scoring rubrics per domain
- `ggzVragen`, `jongerenVragen`, `mantelzorgersVragen`, `ouderenVragen`, `multiproblemVragen`, `sociaalmaatschappelijkVragen` — 6 × 11 = 66 question sets (lines ~4580-4900)
- `lokaleInterventies` (lines ~5010-5100) — hardcoded per-city intervention data
- `voorzieningen` (lines ~5100-5160) — service directory per domain
- `organisaties` array (lines ~5160-5370) — 30 organization entries
- `lokaleActiviteiten` array (lines ~5370-5560) — 40+ activity entries
- `networkRisks` (lines ~5560-5580) — risk descriptions per network type

**Total: ~2,500 lines of hardcoded data** that should be in JSON files.

### 1.9 Duplicated Logic

- Intro screen content duplicated in `toonIntroductie()` modal (~200 lines of near-identical HTML)
- `stabilisatieLabels` defined in both `renderSamenvatting()` and `exportSamenvatting()`
- `doelgroepConfig` duplicated in `renderDoelgroepVragen()` and `filterInterventiesByPostcode()`
- `positieKleuren` mapping repeated in `renderSIJNNetwerkkaart()`, `renderSIJNNetwerkkaartCompact()`, and `renderBewegingKeuzes()`
- `calculateAge()` defined identically in both `renderAdvice()` and `renderProAdvice()`
- Score-to-emoji mapping (`score === 1 ? '🔴' : ...`) repeated 10+ times across functions

---

## 2. Bugs & Issues Found

### 2.1 Confirmed Bugs

1. **`loadState()` migration bug (line ~5065):** Migrates scores > 5 from "1-10 to 1-5" using `Math.ceil(score / 2)`, but the current system is 1-3. A score of 4 would become 2, which might be correct by accident, but a score of 5 becomes 3. The migration logic doesn't match the current scoring system.

2. **Missing element reference (line ~11055):** `document.getElementById('postcode').value = state.postcode` — there is no element with id `postcode`. The correct id is `postcodeFilter`.

3. **`BRAVE_API_KEY` undefined (line ~10370):** `searchBraveActivities()` references `BRAVE_API_KEY` which is never declared. This will throw a ReferenceError.

4. **Implicit `event` global (lines ~7380, 7390, 7400):** `selectSupporterType()`, `toggleRole()`, `selectEffect()` use `event.target` without `event` being a parameter. Works in Chrome but fails in strict mode and some browsers.

5. **`screenConfigBase` and `screenConfigPro` are identical (lines ~4930-4960):** The `getScreenConfig()` function switches between them based on mode, but they're the same array. Professional mode screens (`screen-advies`, `screen-advies-pro`) exist in HTML but aren't in either config.

### 2.2 Potential Issues

6. **XSS in template literals:** User-provided text like `state.wens`, `state.notes[domainId]`, supporter names, etc. are inserted raw into innerHTML. Entering `<img src=x onerror=alert(1)>` in any text field would execute.

7. **`goToScreen()` references non-existent screens:** Screens `advies`, `advies-pro`, `organisaties`, `activiteiten`, `summary` exist in HTML but aren't in `screenConfigBase`/`screenConfigPro`. Functions like `goToNextFromAdvies()`, `goToPrevFromOrganisaties()` use `getScreenNumber('organisaties')` which returns `-1 + 1 = 0`, causing `goToScreen(0)` → crash.

8. **Orphaned `screen-summary` (line ~4270):** This screen uses `switchView('kanban')` and `switchView('agenda')` — views that still exist. But the screen itself is unreachable from the LEAN workflow.

9. **`lokaleInterventies` inconsistent structure:** Amsterdam entries (line ~5020) have detailed objects with `naam`, `adres`, `wat`, `contact`. Rotterdam/Haarlem entries are just string arrays. `renderInterventiesVoorBeweging()` treats them all as strings via `.map(i => ...)`.

10. **`state.activities` referenced but never populated:** `renderSummary()` line uses `state.activities.filter(...)` but `state.activities` is always empty `[]`.

### 2.3 TODO/FIXME/HACK Comments

- Line ~3530: `<!-- TODO: Later uitbreiden naar uitgebreidere SIJN Methodiek slide -->`
- No other TODO/FIXME found, but there are many "DEPRECATED", "Legacy", "niet meer gebruikt" comments.

---

## 3. Code Restructuring Plan

### 3.1 Break Up the Monolith — `NOW`

**Suggested file/folder structure:**

```
welzijnswerker/
├── index.html              (~200 lines - shell + screen containers)
├── css/
│   ├── main.css            (~800 lines - base, layout, utilities)
│   ├── components.css      (~1200 lines - cards, buttons, modals)
│   ├── screens.css         (~800 lines - screen-specific styles)
│   └── responsive.css      (~300 lines - media queries)
├── js/
│   ├── app.js              (~200 lines - init, routing, view switching)
│   ├── state.js            (~150 lines - state management, localStorage)
│   ├── screens/
│   │   ├── intro.js
│   │   ├── start.js
│   │   ├── domains.js      (~500 lines - domain rendering, scoring)
│   │   ├── overview.js     (~200 lines - overview table)
│   │   ├── network.js      (~300 lines - network position, diagram)
│   │   ├── beweging.js     (~200 lines - movement choices)
│   │   ├── interventies.js (~300 lines - interventions, postcode filter)
│   │   └── samenvatting.js (~200 lines - summary, export)
│   ├── components/
│   │   ├── supporter-modal.js
│   │   ├── afspraak-modal.js
│   │   └── kanban.js
│   └── utils.js            (~100 lines - formatting, helpers)
├── data/
│   ├── domains.json        (~150 lines)
│   ├── scoring-rubrics.json (~200 lines)
│   ├── doelgroep-vragen.json (~400 lines)
│   ├── interventies.json   (~200 lines)
│   ├── organisaties.json   (~300 lines)
│   └── activiteiten.json   (~300 lines)
└── .gitignore
```

### 3.2 Remove Dead Code — `NOW`

Delete (estimated savings: ~3,000 lines):
- `zelfredzaamheidLabels` legacy object
- `toonIntroductie()` modal function + its 200-line HTML
- Entire GPT advice pipeline (`renderAdvice`, `renderProAdvice`, `renderAdviceFallback`, `displayClientAdvice`, `displayProAdvice`, helper functions) — unless AI features are planned
- Legacy network system (`addPerson`, `removePerson`, `renderPersonList`, `drawNetwork`, `getNetworkType`, `updateNetworkType`)
- Legacy rating system (`renderRatings`, `updateRatingDisplay`, `updateAverageRating`)
- `renderResults()`, `renderNetworkGrowth()`, `renderSpiderChart()`
- `renderDashboardStats()`, `renderDomainQuickList()`
- `analyzeNetworkDetailed()`, `determineTargetNetwork()`
- Commented-out `screen-hulpvraag` HTML
- `screen-advies`, `screen-advies-pro`, `screen-organisaties`, `screen-activiteiten`, `screen-summary` HTML blocks (unreachable in LEAN flow)
- `view-agenda`, `view-kanban`, `view-doelen` sections (if not part of LEAN MVP)
- Brave Search integration (`searchBraveActivities`)

### 3.3 Externalize Data — `SOON`

Move all hardcoded data arrays to `.json` files and `fetch()` them at startup. This alone would remove ~2,500 lines from the HTML file.

### 3.4 Extract Inline Styles — `SOON`

The intro screen and workflow bolletjes have ~500+ lines of inline styles. Extract to CSS classes. Priority: workflow bolletjes (repeated on every screen), then intro screen, then domain content.

### 3.5 State Management — `LATER`

Current global `state` object works but consider:
- Add try/catch to `loadState()`
- Debounce `saveState()` (100ms)
- Add state schema validation on load
- Cap `history` arrays (max 50 entries)
- Consider state versioning for future migrations

### 3.6 Component Extraction — `LATER`

Candidate components (if moving to a framework):
- DomainCard (accordion item with score, questions, network block)
- SupporterModal
- AfspraakModal
- NetwerkDiagram (SVG)
- WorkflowSteps (bolletjes)
- OverviewTable

---

## 4. Runtime Environment Assessment

### Current: Static HTML on GitHub Pages

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| **Stay as-is** (static HTML, no build) | Zero build step, Laura can edit, GitHub Pages works, no dependencies | Monolith grows, no modules, inline everything | ✅ **Recommended for now** |
| **Multi-file static** (CSS/JS split, no build) | Better organization, same hosting, still no build step | Need to manage `<script>` load order, no npm packages | ✅ **Best next step** |
| **Vite + vanilla JS** | ES modules, hot reload, easy migration from current code, builds to static | Build step needed, Laura can't edit directly on GitHub | 🟡 Good when ready |
| **Alpine.js / Petite Vue** | Reactive without build step, declarative templates, small learning curve | Still no components, another dependency | 🟡 Consider for v2 |
| **Full framework (React/Vue/Svelte)** | Components, state management, ecosystem | Total rewrite, Laura can't maintain, overkill for <10 users | ❌ Not now |
| **Backend needed?** | Multi-client, user accounts, data persistence beyond localStorage | Hosting costs, complexity, maintenance burden | ❌ Not for pilot |

### Recommendation

**Phase 1 (Now):** Split into multi-file static (CSS + JS + JSON data files). Stay on GitHub Pages. No build step. This is the 80/20 move — massive improvement with minimal risk.

**Phase 2 (When pilot grows):** Add Vite for ES modules and hot reload. Still builds to static HTML for GitHub Pages. Laura can still preview changes.

**Phase 3 (If/when >50 users or multi-client needed):** Consider Supabase or Firebase for data persistence. Add authentication. At this point, a lightweight framework (Svelte or Vue) becomes justified.

**Key constraint:** Laura is non-technical. Every architectural decision should be weighed against "can Laura still understand and modify the content?" Multi-file static HTML preserves this. A build step does not.

---

## 5. Quick Wins

### 1. Add `.gitignore` for backup files — `5 min`
```gitignore
*.backup-*
proxy-server.js
```
This removes 33 backup files from the repo.

### 2. Fix the crash bug on line 11055 — `1 min`
```js
// Change:
document.getElementById('postcode').value = state.postcode;
// To:
const postcodeEl = document.getElementById('postcodeFilter');
if (postcodeEl && state.postcode) postcodeEl.value = state.postcode;
```

### 3. Add try/catch to `loadState()` — `2 min`
```js
function loadState() {
    try {
        const saved = localStorage.getItem('welzijnswerker_v2');
        if (saved) {
            const parsed = JSON.parse(saved);
            // ... existing migration code
        }
    } catch (e) {
        console.error('Failed to load state:', e);
        localStorage.removeItem('welzijnswerker_v2');
    }
}
```

### 4. Basic XSS protection — `15 min`
Add a helper function and use it in all template literal interpolations:
```js
function esc(str) {
    if (!str) return '';
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
```

### 5. Delete dead `screenConfigPro` — `2 min`
It's identical to `screenConfigBase`. Remove it and simplify `getScreenConfig()`:
```js
function getScreenConfig() { return screenConfigBase; }
```

### 6. Extract score-to-emoji mapping — `5 min`
```js
function scoreEmoji(score) {
    return score === 1 ? '🔴' : score === 2 ? '🟡' : score === 3 ? '🟢' : '⚪';
}
function scoreColor(score) {
    return score === 1 ? '#dc2626' : score === 2 ? '#eab308' : score === 3 ? '#10b981' : '#94a3b8';
}
```
Replace 10+ inline ternary chains.

### 7. Declare `BRAVE_API_KEY` — `1 min`
Add `const BRAVE_API_KEY = null;` at the top of the script block, or remove the Brave search feature entirely.

### 8. Fix implicit `event` references — `5 min`
Add `event` parameter to `selectSupporterType(type)`, `toggleRole(role)`, `selectEffect(effect)` functions, and pass it from `onclick="selectSupporterType('informal', event)"`.

### 9. Add `loading="lazy"` to Chart.js — `1 min`
Or better: remove the Chart.js CDN import entirely since spider charts aren't used in the LEAN flow.

### 10. Remove the 33 backup files from Git history — `10 min`
```bash
cd ~/Documents/Projects/welzijnswerker
echo "*.backup-*" >> .gitignore
echo "proxy-server.js" >> .gitignore
git rm --cached index.html.backup-*
git commit -m "Remove backup files, add .gitignore"
```

---

## Summary

| Area | Rating | Notes |
|------|--------|-------|
| Structure | 🔴 | 11K-line monolith, needs splitting |
| JS Quality | 🟡 | Functional but global, no error handling |
| CSS | 🟡 | Good variables, too many inline styles |
| Accessibility | 🔴 | No ARIA, no semantic HTML |
| Data Management | 🟡 | Works but fragile localStorage |
| Security | 🔴 | XSS vulnerabilities in templates |
| Performance | 🟡 | Acceptable for <10 users |
| Dead Code | 🔴 | ~3,000 lines of unused code |
| Hardcoded Data | 🔴 | ~2,500 lines should be JSON files |

**Overall:** This is a functional MVP/pilot that does what it needs to do. The code quality reflects rapid AI-assisted development. For the current pilot phase with <10 users, the priority should be: (1) fix the crash bugs, (2) add XSS protection, (3) delete dead code, (4) split into multiple files. A full rewrite is not warranted.
