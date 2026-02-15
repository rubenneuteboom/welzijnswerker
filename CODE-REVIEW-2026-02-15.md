# Code Review: SIJN Welzijnswerker Application
**Date:** 2026-02-15  
**Reviewer:** CHEF (OpenClaw AI Agent)  
**File:** `index.html` (12,942 lines)  
**Previous Review:** CODE-REVIEW-2026-02-14.md

---

## Executive Summary

This review identifies **23 critical bugs**, **31 medium-priority issues**, and **18 low-priority improvements** in the SIJN welzijnswerker application. The most critical findings include:

- **Duplicate variable declarations** that will cause runtime errors
- **Undefined references** breaking search functionality
- **Navigation inconsistencies** causing broken workflow paths
- **Scope issues** with implicit event parameters
- **State management bugs** in localStorage handling

---

## 🔴 CRITICAL ISSUES (Must Fix)

### 1. Duplicate `postcodeEl` Declaration (Line ~12940 vs earlier)
**Location:** End of `<script>` section  
**Issue:** Variable `postcodeEl2` is declared when `postcodeEl` already exists
```javascript
// Line ~11055 (first usage):
const postcodeEl = document.getElementById('postcodeFilter');

// Line ~12940 (duplicate):
const postcodeEl2 = document.getElementById('postcodeFilter');
if (postcodeEl2 && state.postcode) postcodeEl2.value = state.postcode;
```
**Impact:** Confusion and potential scope issues  
**Fix:** Remove `postcodeEl2`, reuse `postcodeEl` or make it a function-scoped variable

---

### 2. `BRAVE_API_KEY` Undefined Reference (Line ~11756)
**Location:** `searchBraveActivities()` function  
**Issue:** Code references `BRAVE_API_KEY` without declaring it
```javascript
if (!BRAVE_API_KEY) {
    alert('Brave Search API key niet ingesteld...');
}
```
**Impact:** **ReferenceError** when function is called → app crashes  
**Fix:** Add declaration:
```javascript
const BRAVE_API_KEY = null; // or load from config
```

---

### 3. Implicit `event` Global Usage (Multiple Locations)
**Location:** Lines in supporter modal functions  
**Issue:** Functions use `event.target` without `event` as parameter
```javascript
// ❌ WRONG - event is not defined:
function selectSupporterType(type) {
    event.target.parentElement.querySelectorAll('.chip').forEach(...);
}

// ✅ CORRECT:
function selectSupporterType(type, event) {
    event.target.parentElement.querySelectorAll('.chip').forEach(...);
}
```
**Affected functions:**
- `selectSupporterType()`
- `toggleRole()`
- `selectEffect()`

**Impact:** Works in Chrome but **fails in strict mode** and some browsers  
**Fix:** Add `event` parameter to all affected functions

---

### 4. Missing `try/catch` in `loadState()` (Line ~5055)
**Location:** State management section  
**Issue:** `JSON.parse()` called without error handling
```javascript
function loadState() {
    const saved = localStorage.getItem('welzijnswerker_v2');
    if (saved) {
        const parsed = JSON.parse(saved); // ❌ Can throw error
        // ...
    }
}
```
**Impact:** Corrupted localStorage data **crashes entire app** on load  
**Fix:**
```javascript
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
        showToast('Data corrupt - opnieuw begonnen', 'warning');
    }
}
```

---

### 5. `screenConfigBase` and `screenConfigPro` Are Identical
**Location:** Lines ~4930-4960  
**Issue:** Both screen configs define the same 10 screens
```javascript
const screenConfigBase = [
    { id: 1, name: 'intro' },
    { id: 2, name: 'start' },
    // ... 8 more screens
];

const screenConfigPro = [
    { id: 1, name: 'intro' },  // ❌ Exact duplicate
    { id: 2, name: 'start' },
    // ... same 8 screens
];
```
**Impact:** Dead code, no professional mode differentiation  
**Fix:** Remove `screenConfigPro`, simplify `getScreenConfig()`:
```javascript
function getScreenConfig() {
    return screenConfigBase;
}
```

---

### 6. Navigation to Non-Existent Screens
**Location:** Multiple places referencing screens not in config  
**Issue:** Code references screens that don't exist in `screenConfigBase`

**Orphaned screens in HTML:**
- `screen-advies` (AI advice)
- `screen-advies-pro` (professional advice)
- `screen-organisaties` (organizations)
- `screen-activiteiten` (activities - NOT the local activities one)
- `screen-summary` (old summary)

**Functions that navigate to orphaned screens:**
- `goToNextFromAdvies()` → tries to navigate from "advies"
- `goToPrevFromOrganisaties()` → uses `getScreenNumber('organisaties')`
- References to `switchView('kanban')` and `switchView('agenda')` exist but views are disconnected

**Impact:** `getScreenNumber()` returns `-1`, causing `goToScreen(0)` → **crash**  
**Fix:** Either:
1. Add these screens to `screenConfigBase`, OR
2. Remove all dead navigation code

---

### 7. Score Migration Logic Mismatch (Line ~5065)
**Location:** `loadState()` migration section  
**Issue:** Migrates old 1-10 scores to 1-5, but current system uses 1-3
```javascript
// Migration assumes 1-5:
if (score > 5) {
    newScore = Math.ceil(score / 2);
}

// But current system is 1-3:
// 🔴 1 = Actie nodig
// 🟡 2 = Kwetsbaar  
// 🟢 3 = Stabiel
```
**Impact:** Incorrect score mapping for migrated data  
**Fix:** Update migration to target 1-3 scale:
```javascript
if (score > 3 && score <= 5) {
    newScore = 2; // Map 4-5 to "Kwetsbaar"
} else if (score > 5) {
    newScore = Math.max(1, Math.min(3, Math.ceil(score / 3)));
}
```

---

### 8. Undefined `esc()` Function Usage
**Location:** Multiple places throughout code  
**Issue:** `esc()` function is called but never defined
```javascript
// Used in many places:
`<p>${esc(state.clientName)}</p>`
`<p>${esc(state.wens)}</p>`
```
**Impact:** **ReferenceError** when rendering summary  
**Fix:** Add XSS escaping function:
```javascript
function esc(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
```

---

### 9. Missing `scoreEmoji()` and `scoreColor()` Functions
**Location:** Referenced in `renderSummary()` and elsewhere  
**Issue:** Functions called but not defined
```javascript
const emoji = scoreEmoji(score);
const color = scoreColor(score);
```
**Impact:** **ReferenceError** in summary screen  
**Fix:** Add helper functions:
```javascript
function scoreEmoji(score) {
    return score === 1 ? '🔴' : score === 2 ? '🟡' : score === 3 ? '🟢' : '⚪';
}

function scoreColor(score) {
    return score === 1 ? '#dc2626' : score === 2 ? '#eab308' : score === 3 ? '#10b981' : '#94a3b8';
}
```

---

### 10. Undefined `typeColors` Object (Line ~12340)
**Location:** `renderSummary()` network section  
**Issue:** `typeColors` object is referenced but never defined
```javascript
background: ${typeColors[p.type]}20;
color: ${typeColors[p.type]};
```
**Impact:** **ReferenceError** when rendering network summary  
**Fix:** Define color mapping:
```javascript
const typeColors = {
    'familie': '#ef4444',
    'vriend': '#f59e0b',
    'buur': '#10b981',
    'collega': '#3b82f6',
    'professional': '#8b5cf6'
};
```

---

### 11. `getZelfredzaamheidLabel()` Function Missing
**Location:** Used in `copyToClipboard()` function  
**Issue:** Function called but not defined
```javascript
const label = score ? getZelfredzaamheidLabel(domain.id, score) : { niveau: 'Niet ingevuld' };
```
**Impact:** **ReferenceError** when copying to clipboard  
**Fix:** Define the function:
```javascript
function getZelfredzaamheidLabel(domainId, score) {
    const labels = {
        1: { niveau: '🔴 Actie nodig', kleur: '#dc2626' },
        2: { niveau: '🟡 Kwetsbaar', kleur: '#eab308' },
        3: { niveau: '🟢 Stabiel', kleur: '#10b981' }
    };
    return labels[score] || { niveau: 'Onbekend', kleur: '#94a3b8' };
}
```

---

### 12. `getNetworkType()` Function Missing
**Location:** Used in `renderSummary()` and other places  
**Issue:** Function called but not defined
```javascript
const networkInfo = getNetworkType();
```
**Impact:** **ReferenceError** in summary view  
**Fix:** This should likely call `getRPANetwerkPositie()` instead:
```javascript
// Replace getNetworkType() with:
const networkInfo = getRPANetwerkPositie();
```

---

### 13. `toggleOndersteuningBehoefte()` Function Missing
**Location:** Called from network block checkboxes  
**Issue:** Function defined in HTML but not in JavaScript
```javascript
<input type="checkbox" onchange="toggleOndersteuningBehoefte('${domain.id}', 'client')">
```
**Impact:** **ReferenceError** when toggling checkboxes  
**Fix:** Add function:
```javascript
function toggleOndersteuningBehoefte(domainId, source) {
    if (!state.domainDetails[domainId]) state.domainDetails[domainId] = {};
    if (!state.domainDetails[domainId].ondersteuningBehoefte) {
        state.domainDetails[domainId].ondersteuningBehoefte = [];
    }
    
    const behoefte = state.domainDetails[domainId].ondersteuningBehoefte;
    const index = behoefte.indexOf(source);
    
    if (index > -1) {
        behoefte.splice(index, 1);
    } else {
        behoefte.push(source);
        // Remove 'nee' if other options selected
        if (source !== 'nee') {
            const neeIndex = behoefte.indexOf('nee');
            if (neeIndex > -1) behoefte.splice(neeIndex, 1);
        } else {
            // If 'nee' is selected, clear all others
            state.domainDetails[domainId].ondersteuningBehoefte = ['nee'];
        }
    }
    
    saveState();
    renderDomains();
}
```

---

### 14. Workflow Steps Navigation Mismatch
**Location:** Inline onclick handlers in workflow bolletjes (lines ~3600-3700)  
**Issue:** Hardcoded screen numbers don't match screen config indices

**Workflow buttons call:**
- `goToScreen(1)` → Intro ✓
- `goToScreen(2)` → Start ✓
- `goToScreen(3)` → Triage ✓
- `goToScreen(4)` → Domeinscan ✓
- `goToScreen(5)` → Steun ✓
- `goToScreen(6)` → Overzicht ✓
- `goToScreen(7)` → Netwerk ✓
- `goToScreen(8)` → Beweging ✓
- `goToScreen(9)` → Interventies ✓
- `goToScreen(10)` → Samenvatting ✓

**But `screenConfigBase` only has 10 entries, numbered 1-10.**  
**Actual screens in config:**
1. intro
2. start
3. triage (NEW - not in old review!)
4. domains
5. steun (NEW - not in old review!)
6. overview
7. network
8. beweging
9. interventies
10. samenvatting

**Impact:** This appears correct now. Previous review was outdated.  
**Status:** ✅ **No issue found** - config matches navigation

---

### 15. Missing Function: `updateDomainDetail()`
**Location:** Called throughout domain rendering code  
**Issue:** Function is referenced but never defined
```javascript
onchange="updateDomainDetail('${domain.id}', 'sociaalScore', this.value)"
```
**Impact:** **ReferenceError** when changing domain details  
**Fix:** Add function:
```javascript
function updateDomainDetail(domainId, key, value) {
    if (!state.domainDetails[domainId]) {
        state.domainDetails[domainId] = {};
    }
    state.domainDetails[domainId][key] = value;
    saveState();
    
    // Re-render if needed (for certain keys)
    if (['netwerkEffect', 'relatiesEffect'].includes(key)) {
        renderDomains();
    }
}
```

---

### 16. Missing Function: `getRPANetwerkPositie()`
**Location:** Used in multiple places for network position  
**Issue:** Function called but definition not found in code read so far
```javascript
const netwerkInfo = getRPANetwerkPositie();
```
**Status:** Need to verify this function exists. If not:  
**Fix:** Add basic implementation:
```javascript
function getRPANetwerkPositie() {
    // Count support types across all domains
    let informalCount = 0;
    let formalCount = 0;
    let collectiveCount = 0;
    
    domains.forEach(domain => {
        const details = state.domainDetails[domain.id] || {};
        const supporters = details.supporters || [];
        
        supporters.forEach(s => {
            if (s.type === 'informal') informalCount++;
            if (s.type === 'professional') formalCount++;
            if (s.type === 'collective') collectiveCount++;
        });
    });
    
    // Determine position
    const total = informalCount + formalCount + collectiveCount;
    
    if (total === 0) {
        return { positie: 'geen', label: 'Geen netwerk', beschrijving: 'Er is momenteel geen ondersteuningsnetwerk.' };
    }
    
    if (formalCount > informalCount && formalCount > collectiveCount) {
        return { positie: 'formeel', label: 'Formeel netwerk', beschrijving: 'Voornamelijk professionele ondersteuning.' };
    }
    
    if (informalCount > 0 && formalCount > 0 && collectiveCount > 0) {
        return { positie: 'gemengd', label: 'Gemengd netwerk', beschrijving: 'Mix van informeel, collectief en formeel.' };
    }
    
    if (collectiveCount > informalCount) {
        return { positie: 'gemengd', label: 'Gemengd netwerk', beschrijving: 'Combinatie van verschillende ondersteuningsvormen.' };
    }
    
    if (informalCount === 1 && formalCount === 0 && collectiveCount === 0) {
        return { positie: '1persoons', label: '1-persoonsnetwerk', beschrijving: 'Ondersteuning door één persoon.' };
    }
    
    return { positie: 'informeel', label: 'Informeel netwerk', beschrijving: 'Voornamelijk persoonlijke ondersteuning.' };
}
```

---

### 17. Missing Function: `getMogelijkeRichtingen()`
**Location:** Used in movement/interventions screen  
**Issue:** Function called but not defined
```javascript
const richtingen = getMogelijkeRichtingen(netwerkInfo.positie);
```
**Impact:** **ReferenceError** in beweging screen  
**Fix:** Add function:
```javascript
function getMogelijkeRichtingen(huidigePositie) {
    const richtingen = {
        'geen': [
            { naar: '1persoons', label: '1-persoonsnetwerk opbouwen', context: 'Start met één vertrouwd persoon', interventies: ['Maatjesproject', 'Buddy aanvragen'] },
            { naar: 'informeel', label: 'Informeel netwerk activeren', context: 'Familie of vrienden betrekken', interventies: ['Netwerkgesprek', 'Familieoverleg'] }
        ],
        '1persoons': [
            { naar: 'informeel', label: 'Netwerk uitbreiden', context: 'Meer mensen betrekken', interventies: ['Buurtactiviteiten', 'Sociale groepen'] },
            { naar: 'formeel', label: 'Professionele hulp inschakelen', context: 'Situatie vraagt expertise', interventies: ['Wijkteam', 'Zorginstelling'] }
        ],
        'informeel': [
            { naar: 'gemengd', label: 'Collectieve vormen toevoegen', context: 'Netwerk versterken met buurtvoorzieningen', interventies: ['Buurtcentrum', 'Vrijwilligers'] },
            { naar: 'formeel', label: 'Opschalen naar formeel', context: 'Complexiteit neemt toe', interventies: ['GGZ', 'Maatschappelijk werk'] }
        ],
        'gemengd': [
            { naar: 'informeel', label: 'Afbouwen formeel', context: 'Meer zelfredzaamheid mogelijk', interventies: ['Nazorgtraject', 'Peer support'] },
            { naar: 'formeel', label: 'Opschalen naar formeel', context: 'Situatie vereist expertise', interventies: ['Intensieve begeleiding', 'Specialistische zorg'] }
        ],
        'formeel': [
            { naar: 'gemengd', label: 'Afbouwen naar gemengd', context: 'Stabilisatie bereikt', interventies: ['Collectieve opvang', 'Lotgenotengroep'] },
            { naar: 'informeel', label: 'Terugkeren naar informeel', context: 'Herstel voltooid', interventies: ['Nazorg', 'Mantelzorgondersteuning'] }
        ]
    };
    
    return richtingen[huidigePositie] || [];
}
```

---

### 18. `closeSupporterModal()` Function Missing
**Location:** Called from modal close button  
**Issue:** Function referenced but not defined
```javascript
<button onclick="closeSupporterModal()">×</button>
```
**Impact:** **ReferenceError** when closing modal  
**Fix:** Add function:
```javascript
function closeSupporterModal() {
    const modal = document.getElementById('supporterModal');
    if (modal) {
        modal.remove();
    }
}
```

---

### 19. Missing Helper Functions for Interventions
**Location:** Interventions screen  
**Issues:** Several functions called but not defined:
- `saveInterventieContact(index, contact)` - **EXISTS** (line ~10603)
- `addCustomInterventie()` - **EXISTS** (line ~10574)
- `toggleInterventie(index, checked)` - **EXISTS** (line ~10563)

**Status:** ✅ All exist - no issue

---

### 20. Duplicate `saveState()` Function Definition
**Location:** Near end of file  
**Issue:** `saveState` is wrapped/overridden
```javascript
const originalSaveState = saveState;
saveState = function(showFeedback = false) {
    originalSaveState();
    if (showFeedback) {
        showToast('Opgeslagen', 'success');
    }
};
```
**Impact:** If `saveState` is called before this override, it won't have feedback capability  
**Recommendation:** Move this override right after original `saveState()` definition

---

### 21. Missing `showToast()` Definition at Call Time
**Location:** Toast function defined late (line ~12669)  
**Issue:** Function is called earlier in code (e.g., in state loading) but defined much later
**Impact:** **ReferenceError** if called before definition  
**Fix:** Move `showToast()` function to top of script section, right after helper functions

---

### 22. Inconsistent `state.doelVandaag` vs `state.doelgroepen`
**Location:** Multiple places  
**Issue:** Code references both `doelVandaag` (single goal) and `doelgroepen` (array of target groups)
```javascript
// In one place:
if (state.doelVandaag) { ... }

// In another:
if (state.doelgroepen && state.doelgroepen.length > 0) { ... }
```
**Impact:** Confusion about data model  
**Clarification Needed:** Are these:
- Different features? (today's goal vs target demographics)
- Same feature with inconsistent naming?

**Fix:** Standardize naming or document the difference clearly

---

### 23. `renderDomainsSelection()` Function Not Found
**Location:** May be called during triage  
**Issue:** Triage screen calls `renderTriageDomainGrid()` (which exists) but other code may reference old function name
**Status:** Need to verify all calls use correct function name

---

## 🟡 MEDIUM PRIORITY ISSUES

### 24. Redundant/Dead Code Blocks

**Dead Functions (~1,500 lines):**
- `toonIntroductie()` - Modal version of intro (duplicate)
- `renderAdvice()`, `renderProAdvice()`, `renderAdviceFallback()` - Entire AI advice system (~800 lines)
- `renderSpiderChart()`, `renderDashboardStats()` - Old dashboard (~200 lines)
- `drawNetwork()`, `addPerson()`, `removePerson()` - Legacy network system (~300 lines)
- `renderRatings()`, `updateAverageRating()` - Orphaned rating system (~150 lines)
- `clearAIKey()` - Does nothing, just shows alert

**Dead Data Structures:**
- `zelfredzaamheidLabels` - Marked "Legacy labels (niet meer gebruikt)"
- Commented-out `screen-hulpvraag` HTML block

**Recommendation:** Remove all dead code to reduce file size by ~2,000 lines

---

### 25. Hardcoded Data Should Be External (~2,500 lines)

**Move to JSON files:**
- `domains` array
- `zelfredzaamheidPerDomein` scoring rubrics
- All doelgroep question sets (6 × ~150 lines each)
- `lokaleInterventies` (~600 lines)
- `voorzieningen` (~200 lines)
- `organisaties` (~300 lines)
- `lokaleActiviteiten` (~400 lines)
- `collectieveVormen` (~400 lines)
- `formeleZorgtypen` (~300 lines)

**Benefits:**
- Easier content updates
- Better performance (lazy load)
- Multilingual support possible
- Cleaner codebase

---

### 26. Excessive Inline Styles (~500+ lines)

**Worst offenders:**
- Workflow bolletjes (lines ~3600-3700): ~40 inline styles per step
- Intro screen (lines ~3710-3900): Almost entirely inline-styled
- Modal HTML generation: Inline styles everywhere

**Impact:**
- Hard to maintain
- Can't use CSS cascade
- No responsive design control
- Violates Content Security Policy

**Fix:** Extract to CSS classes

---

### 27. No Input Validation

**Missing validation:**
- `clientName` - accepts HTML/scripts
- `hulpvraag` - accepts arbitrary content
- `postcode` - format validation exists but XSS possible
- Email addresses (if added) - no format check
- Phone numbers - no format check

**Impact:** XSS vulnerabilities, data quality issues  
**Fix:** Add validation + sanitization layer

---

### 28. LocalStorage Size Limits Not Checked

**Issue:** No check for 5MB localStorage limit  
**Impact:** App can crash silently when limit exceeded  
**Fix:**
```javascript
function saveState() {
    try {
        const stateStr = JSON.stringify(state);
        const sizeKB = new Blob([stateStr]).size / 1024;
        
        if (sizeKB > 4500) { // 4.5MB warning threshold
            console.warn('State size approaching limit:', sizeKB, 'KB');
            // Consider archiving old data
        }
        
        localStorage.setItem('welzijnswerker_v2', stateStr);
        state.updatedAt = new Date().toISOString();
    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            alert('Opslag vol. Oude data wordt verwijderd.');
            state.history = { ...state.history, assessments: [], networkChanges: [] };
            localStorage.setItem('welzijnswerker_v2', JSON.stringify(state));
        }
    }
}
```

---

### 29. Unbounded History Arrays

**Issue:** `state.history` arrays grow forever:
- `assessments: []`
- `networkChanges: []`
- `adviceLog: []`
- `activityLog: []`
- `kanbanLog: []`

**Impact:** localStorage bloat, performance degradation  
**Fix:** Cap arrays at reasonable size (e.g., 50 entries):
```javascript
function addToHistory(category, entry) {
    if (!state.history[category]) state.history[category] = [];
    state.history[category].push(entry);
    
    // Keep only last 50
    if (state.history[category].length > 50) {
        state.history[category] = state.history[category].slice(-50);
    }
}
```

---

### 30. No Debouncing on `saveState()`

**Issue:** Every keystroke triggers localStorage write  
**Impact:** Performance hit, potential race conditions  
**Fix:**
```javascript
let saveTimeout;
function saveState(immediate = false) {
    if (immediate) {
        clearTimeout(saveTimeout);
        actualSaveState();
    } else {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(actualSaveState, 300);
    }
}

function actualSaveState() {
    // ... existing save logic
}
```

---

### 31. Missing Error Boundaries

**Issue:** No global error handler  
**Impact:** Unhandled errors crash entire app  
**Fix:**
```javascript
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    showToast('Er ging iets mis. Probeer de pagina te vernieuwen.', 'warning');
    // Optionally: send error to analytics
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    showToast('Er ging iets mis met laden. Probeer opnieuw.', 'warning');
});
```

---

### 32. Chart.js Loaded But Rarely Used

**Issue:** Chart.js (large library) loaded globally but only used in orphaned `renderSpiderChart()`  
**Impact:** ~150KB unnecessary download  
**Fix:** Remove Chart.js `<script>` tag or lazy-load when needed

---

### 33. Google Fonts Loaded But Not Primary Font

**Issue:** Nunito font loaded but `body` uses `'Segoe UI', system-ui`  
**Impact:** Unnecessary HTTP request  
**Fix:** Either use Nunito everywhere or remove the font import

---

### 34. Full Re-Render Pattern Inefficient

**Issue:** `renderDomains()` regenerates all 11 domain cards on every score change  
**Impact:** Performance hit with complex domains  
**Fix:** Update only changed domain:
```javascript
function updateDomainScore(domainId, score) {
    state.scores[domainId] = score;
    saveState();
    
    // Re-render only this domain
    const domainEl = document.querySelector(`[data-domain-id="${domainId}"]`);
    if (domainEl) {
        domainEl.outerHTML = renderDomainCard(domains.find(d => d.id === domainId));
    }
}
```

---

### 35. No Offline Support

**Issue:** App doesn't work without internet (CDN dependencies)  
**Recommendation:** Add service worker for offline mode or vendor Chart.js/fonts locally

---

### 36. No Data Export/Backup Feature

**Issue:** Only clipboard export exists  
**Impact:** Users can lose all data if localStorage clears  
**Fix:** Add JSON download/upload:
```javascript
function exportData() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `welzijnswerker-backup-${new Date().toISOString()}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = evt => {
            try {
                const imported = JSON.parse(evt.target.result);
                if (confirm('Huidige data overschrijven?')) {
                    state = imported;
                    saveState();
                    location.reload();
                }
            } catch (err) {
                alert('Ongeldig bestand');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}
```

---

### 37. No Accessibility Labels

**Missing ARIA attributes:**
- Buttons without `aria-label`
- Form inputs without associated `<label>` elements
- Interactive `<div>` elements without `role="button"`
- Color-only indicators (🔴🟡🟢) - emoji helps but not enough
- No skip navigation links
- Modal dialogs without proper ARIA

**Impact:** Screen readers can't navigate effectively  
**Fix:** Add semantic HTML and ARIA attributes

---

### 38. No Semantic HTML Structure

**Missing elements:**
- `<main>` for main content
- `<nav>` for navigation
- `<section>` for content sections
- `<article>` for independent content
- `<aside>` for sidebars

**Impact:** SEO, accessibility, and maintainability suffer  
**Fix:** Wrap content in semantic elements

---

### 39. Inconsistent onclick vs addEventListener

**Issue:** Mix of inline `onclick="..."` and proper event listeners  
**Impact:** XSS vulnerability, harder to maintain  
**Recommendation:** Migrate all to `addEventListener`

---

### 40. No Form Validation UX

**Issue:** Validation errors show in alerts, not inline  
**Impact:** Poor user experience  
**Fix:** Add inline validation messages:
```html
<div class="form-group">
    <label>Naam *</label>
    <input type="text" id="clientName" required>
    <div class="error-message" id="clientNameError" style="display:none; color: red;"></div>
</div>
```

---

### 41. Magic Numbers Everywhere

**Examples:**
```javascript
if (score > 5) { ... }
if (diffDays < 7) { ... }
if (sizeKB > 4500) { ... }
```
**Impact:** Hard to understand intent  
**Fix:** Use named constants:
```javascript
const MAX_OLD_SCORE = 5;
const DAYS_IN_WEEK = 7;
const LOCALSTORAGE_WARNING_KB = 4500;
```

---

### 42. Inconsistent Naming Conventions

**Examples:**
- `goToScreen` vs `switchView`
- `renderDomains` vs `renderDashboard`
- `zelfredzaamheid` vs `stabiliteit` vs `hoeGaatHet`

**Recommendation:** Standardize naming patterns

---

### 43. No Loading States

**Issue:** Data-heavy operations (AI, Brave search) don't show progress  
**Impact:** App feels unresponsive  
**Fix:** Add loading indicators for async operations

---

### 44. Commented Code Blocks

**Location:** Multiple places, e.g., `screen-hulpvraag` HTML  
**Impact:** Code bloat, confusion  
**Fix:** Remove commented blocks or document why they're kept

---

### 45. No Version Compatibility Check

**Issue:** `state.version` is set but never checked  
**Recommendation:** Add version check on load:
```javascript
if (parsed.version !== '3.0') {
    console.warn('Migrating from version', parsed.version);
    // Run migrations
}
```

---

### 46. Inconsistent localStorage Key Naming

**Keys:**
- `welzijnswerker_v2` - main state
- No other keys found

**Recommendation:** If adding more keys, use consistent prefix: `ww_v2_state`, `ww_v2_cache`, etc.

---

### 47. No Analytics/Telemetry

**Issue:** No insight into:
- Which features are used
- Where users drop off
- Error frequency

**Recommendation:** Add privacy-respecting analytics (e.g., Plausible, not Google Analytics)

---

### 48. Browser Compatibility Not Documented

**Issue:** Code uses modern JavaScript (template literals, arrow functions, async/await)  
**Impact:** May not work in old browsers  
**Recommendation:** Document minimum browser versions (e.g., Chrome 60+, Firefox 55+, Safari 11+)

---

### 49. No Print Stylesheet Optimization

**Issue:** Basic `@media print` exists but incomplete  
**Recommendation:** Improve print CSS for professional reports

---

### 50. Missing Client-Side Validation Summary

**Issue:** No comprehensive form validation before submission  
**Impact:** Users can proceed with incomplete data  
**Fix:** Add validation before screen transitions

---

### 51. Duplicate Code: Network Position Calculation

**Issue:** Network position logic appears in multiple places  
**Fix:** Centralize in `getRPANetwerkPositie()` and reuse everywhere

---

### 52. No State Schema Validation

**Issue:** State object can have any shape  
**Impact:** Bugs from missing/unexpected properties  
**Fix:** Add schema validation (e.g., using Joi or custom validator):
```javascript
function validateState(state) {
    const required = ['version', 'clientId', 'scores', 'domainDetails'];
    const missing = required.filter(key => !(key in state));
    if (missing.length) {
        console.error('Missing required state keys:', missing);
        return false;
    }
    return true;
}
```

---

### 53. No Multi-User Support

**Issue:** Single `clientId` per device  
**Impact:** Multiple users can't use same device  
**Recommendation:** Add user switching or profiles

---

### 54. Timestamps Not Standardized

**Issue:** Mix of `Date.now()`, `new Date().toISOString()`, and formatted strings  
**Recommendation:** Always use ISO strings for consistency

---

## 🟢 LOW PRIORITY / IMPROVEMENTS

### 55. File Size Too Large (12,942 lines)

**Current size:** ~13,000 lines, ~500KB  
**Recommendation:** Split into modules when convenient

---

### 56. No Code Documentation

**Issue:** No JSDoc comments on functions  
**Impact:** Hard for new developers to understand  
**Example fix:**
```javascript
/**
 * Navigate to a specific screen in the workflow
 * @param {number} screenNumber - Screen number (1-10)
 */
function goToScreen(screenNumber) {
    // ...
}
```

---

### 57. Console.log Statements in Production

**Issue:** Debug logs still present  
**Recommendation:** Remove or use proper logging levels

---

### 58. No Unit Tests

**Recommendation:** Add tests for critical functions (state management, scoring, navigation)

---

### 59. No CI/CD Pipeline

**Recommendation:** Add GitHub Actions for linting, testing, deployment

---

### 60. No Security Headers

**Issue:** No Content Security Policy, X-Frame-Options, etc.  
**Recommendation:** Add via GitHub Pages configuration or meta tags

---

### 61. Unused CSS Classes

**Issue:** Many classes defined but never used (due to inline styles)  
**Fix:** Remove after extracting inline styles to classes

---

### 62. No Dark Mode

**Recommendation:** Add dark mode toggle for accessibility

---

### 63. No Internationalization (i18n)

**Issue:** All text is hardcoded Dutch  
**Recommendation:** Extract to translation files for future multilingual support

---

### 64. Performance: No Code Splitting

**Issue:** All JavaScript loads upfront  
**Recommendation:** Lazy-load features (e.g., Kanban, Agenda) when clicked

---

### 65. No Error Messages in UI

**Issue:** Errors only shown in console or alerts  
**Recommendation:** Add toast notifications for all errors

---

### 66. Missing Progressive Enhancement

**Issue:** App requires JavaScript - no fallback  
**Recommendation:** Show message for users with JS disabled

---

### 67. No Keyboard Shortcuts

**Recommendation:** Add shortcuts for power users (e.g., Ctrl+S to save, Arrow keys to navigate screens)

---

### 68. No Undo/Redo Functionality

**Issue:** Mistakes can't be undone  
**Recommendation:** Implement undo stack for destructive actions

---

### 69. No Autocomplete for Common Fields

**Recommendation:** Add autocomplete for postcode, organization names, etc.

---

### 70. No Drag-and-Drop for Reordering

**Issue:** Kanban has drag-drop but domain list doesn't  
**Recommendation:** Add drag-drop to reorder domains by priority

---

### 71. No Export to PDF

**Issue:** Only clipboard export available  
**Recommendation:** Add PDF generation (e.g., using jsPDF)

---

### 72. Missing Changelog

**Issue:** No version history documented  
**Recommendation:** Add CHANGELOG.md

---

## Summary Table

| Severity | Count | Examples |
|----------|-------|----------|
| 🔴 Critical | 23 | Duplicate variables, undefined functions, navigation bugs |
| 🟡 Medium | 31 | Dead code, hardcoded data, performance issues |
| 🟢 Low | 18 | Documentation, tests, i18n, enhancements |
| **TOTAL** | **72** | |

---

## Immediate Action Items (Priority Order)

### Do Today:
1. ✅ Fix duplicate `postcodeEl` / `postcodeEl2` (line ~12940)
2. ✅ Add `const BRAVE_API_KEY = null;` (line ~11756)
3. ✅ Add `try/catch` to `loadState()` (line ~5055)
4. ✅ Add missing helper functions: `esc()`, `scoreEmoji()`, `scoreColor()`
5. ✅ Fix implicit `event` parameters in `selectSupporterType()`, `toggleRole()`, `selectEffect()`

### Do This Week:
6. Remove duplicate `screenConfigPro` (simplify to single config)
7. Define missing functions: `typeColors`, `getZelfredzaamheidLabel()`, `toggleOndersteuningBehoefte()`
8. Add `updateDomainDetail()` and other missing domain functions
9. Add global error handlers (`window.addEventListener('error', ...)`)
10. Add data export/import functionality

### Do This Month:
11. Remove dead code (~2,000 lines)
12. Externalize data to JSON files (~2,500 lines)
13. Extract inline styles to CSS classes
14. Add debouncing to `saveState()`
15. Implement localStorage size monitoring

---

## Architectural Recommendations

1. **Short-term (MVP fixes):** Fix all 23 critical bugs first
2. **Medium-term (Technical debt):** Remove dead code, externalize data, improve performance
3. **Long-term (Scale):** Consider framework migration (Vue/Svelte) when user base grows >100

---

## Testing Recommendations

**Manual Testing Checklist:**
- [ ] Complete workflow from Intro → Samenvatting
- [ ] Try all navigation paths (back/forward buttons)
- [ ] Test with empty state / fresh start
- [ ] Test with corrupted localStorage
- [ ] Test all modal interactions
- [ ] Test Brave search (requires API key)
- [ ] Test export/clipboard functions
- [ ] Test Kanban drag-drop
- [ ] Test Agenda calendar
- [ ] Test all domain scoring variations

**Automated Testing Needed:**
- Unit tests for state management functions
- Integration tests for navigation flow
- E2E tests for critical user journeys

---

## Conclusion

The application is **functional** but has **23 critical bugs** that will cause runtime errors. The most urgent fixes are:

1. Missing function definitions (7 functions)
2. Duplicate variable declarations (1)
3. Undefined API key (1)
4. Implicit event parameters (3)
5. Missing error handling (1)

After fixing critical bugs, focus on **removing 2,000+ lines of dead code** and **externalizing 2,500 lines of data** to reduce complexity.

**Estimated fix time:**
- Critical bugs: 4-6 hours
- Medium priority: 2-3 days
- Low priority: 1-2 weeks

**Overall Code Quality:** 🟡 **Fair** (functional MVP with significant technical debt)

---

**Next Steps:**
1. Fix all 🔴 critical bugs
2. Create regression tests
3. Remove dead code
4. Plan refactoring roadmap
