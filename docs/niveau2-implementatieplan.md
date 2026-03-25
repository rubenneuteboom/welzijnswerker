# RPA Niveau 2 - Implementatieplan
*Versie: 2026-03-24 | Marie's technische uitwerking*

---

## 🎯 Scope
**Van 21 schermen → 8 schermen**  
**Geschatte tijd:** 4 weken (4 sprints van 1 week)  
**Team:** Marie (dev), Laura (product owner), Ruben (infra)

---

## 📁 Bestandsstructuur (huidig)

```
welzijnswerker/
├── positioneel.html          ← TE WIJZIGEN (21 → 8 schermen)
├── netwerkanalyse.html       ← Niveau 1 (ongewijzigd)
├── strategisch.html          ← Niveau 3 (ongewijzigd)
├── familie-portal-pro.html   ← Familie portaal (ongewijzigd)
├── familie-portal-mdo.html   ← MDO portaal (ongewijzigd)
└── docs/
    ├── niveau2-redesign-wireframes.md  ← Nieuw (wireframes)
    └── niveau2-implementatieplan.md    ← Nieuw (dit document)
```

---

## 🛠️ Wat Blijft / Wat Wijzigt

### ✅ Kan Blijven (Hergebruiken)
| Component | Locatie in code | Gebruikt in nieuwe flow |
|-----------|-----------------|-------------------------|
| Spinnenweb chart | `renderSpiderChart()` | Scherm 2 (sticky header) |
| State management | `saveState()`, `loadState()` | Alle schermen |
| Domein definities | `DOMAINS` array | Scherm 2 (accordion) |
| Interventies data | `INTERVENTIES` array | Scherm 5 (tab 1) |
| Organisaties data | `ORGANISATIES` array | Scherm 5 (tab 2) |
| Export functies | `exportToPDF()`, `exportJSON()` | Scherm 8 |
| Print styling | `@media print` CSS | Scherm 8 |

### ❌ Moet Weg (Verwijderen)
| Scherm ID | Reden | Vervangen door |
|-----------|-------|----------------|
| `screen-hulpvraag-focus` | Duplicate hulpvraag | Scherm 1 (geïntegreerd) |
| `screen-quickscan` | Duplicate triage | Scherm 2 (accordion) |
| `screen-triage` | Duplicate domains | Scherm 2 (accordion) |
| `screen-netwerkpositie` | Duplicate network + moet afgeleid | Scherm 3 (berekend) |
| `screen-advies` | Deprecated | Scherm 8 (samenvatting) |
| `screen-advies-pro` | Duplicate | Scherm 8 (samenvatting) |
| `screen-summary` | Duplicate samenvatting | Scherm 8 (geconsolideerd) |

### 🔄 Moet Worden Aangepast
| Scherm ID | Wijziging | Werk |
|-----------|-----------|------|
| `screen-organisatie` | Merge met intro + start | Medium (HTML restructure) |
| `screen-intro` | Merge met organisatie + start | Medium (content consolidate) |
| `screen-start` | Merge met organisatie + intro + hulpvraag | Groot (nieuwe layout) |
| `screen-domains` | Accordion-stijl, live spinnenweb | Groot (UX overhaul) |
| `screen-network` | Automatische positie-bepaling | Medium (logica toevoegen) |
| `screen-interventies` | Tabs (3-in-1) | Medium (tab component) |
| `screen-samenvatting` | Accordion voor alle secties | Klein (styling) |

---

## 🧩 Component Breakdown

### SCHERM 1: Start & Context (NIEUW)

#### HTML Structuur
```html
<div class="screen active" id="screen-start-v2">
  <div class="card">
    <!-- Organisatie keuze (8 cards, compact) -->
    <section id="organisatie-keuze">
      <h2>🏘️ Vanuit welke organisatie werk je?</h2>
      <div class="org-grid">
        <button onclick="selectOrg('wijkteam')" class="org-card" data-org="wijkteam">
          <span class="org-icon">🏘️</span>
          <span class="org-label">Wijkteam</span>
        </button>
        <!-- ... 7 more -->
      </div>
    </section>

    <!-- Uitleg (inklapbaar) -->
    <details id="toelichting-pro">
      <summary>ℹ️ Voor professionals</summary>
      <div class="toelichting-content">
        <!-- Diagram, tips, wanneer niet gebruiken -->
      </div>
    </details>

    <!-- Hulpvraag & Context -->
    <section id="gesprek-start">
      <h2>💬 Netwerkgesprek</h2>
      
      <div class="form-group">
        <label>👤 Naam cliënt (optioneel)</label>
        <input type="text" id="clientNaam" placeholder="Bijv. Emma">
      </div>

      <div class="form-group">
        <label>📋 Toestemming informatie-uitwisseling</label>
        <div class="btn-group-inline">
          <button onclick="setToestemming('ja')" class="btn-choice" data-choice="ja">
            ✅ Ja, akkoord
          </button>
          <button onclick="setToestemming('nee')" class="btn-choice" data-choice="nee">
            🔒 Nee, alleen voor mijzelf
          </button>
          <button onclick="setToestemming('later')" class="btn-choice" data-choice="later">
            💬 Bespreken we later
          </button>
        </div>
      </div>

      <div class="form-group">
        <label>🎯 Wat zou je graag anders willen?</label>
        <textarea id="hulpvraag" rows="5" placeholder="Vertel in eigen woorden wat er speelt...

💡 Denk aan: werk, wonen, financiën, gezondheid, relaties, dagbesteding..."></textarea>
      </div>

      <!-- Extra instellingen (inklapbaar) -->
      <details id="extra-instellingen">
        <summary>⚙️ Extra instellingen</summary>
        <div class="form-group">
          <label>📍 Postcode</label>
          <input type="text" id="postcode" placeholder="1012AB" maxlength="6">
        </div>
        <div class="form-group">
          <label>🔄 Vervolggesprek?</label>
          <input type="date" id="vorigGesprekDatum">
          <input type="text" id="vorigGesprekNotitie" placeholder="Kort: hoe stond het er toen voor?">
        </div>
      </details>
    </section>

    <!-- Demo knop (Karin's verzoek) -->
    <div class="demo-trigger">
      <button onclick="loadDemo()" class="btn btn-secondary">
        💡 Demo met voorbeeldcliënt
      </button>
    </div>

    <div class="btn-group">
      <button onclick="goBack()" class="btn btn-secondary">← Terug</button>
      <button onclick="startGesprek()" class="btn btn-primary">Start gesprek →</button>
    </div>
  </div>
</div>
```

#### CSS Toevoegingen
```css
/* Organisatie grid (compacter dan oude versie) */
.org-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  margin: 20px 0;
}

.org-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
}

.org-card:hover {
  border-color: var(--primary);
  background: var(--primary-light);
  transform: translateY(-2px);
}

.org-card.selected {
  border-color: var(--primary);
  background: var(--primary-light);
  box-shadow: 0 4px 12px rgba(46, 204, 113, 0.2);
}

.org-icon {
  font-size: 2.5rem;
}

.org-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
}

/* Button choice group (toestemming) */
.btn-group-inline {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.btn-choice {
  padding: 10px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  font-size: 0.88rem;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-choice:hover {
  border-color: var(--primary);
  background: var(--primary-light);
}

.btn-choice.selected {
  border-color: var(--primary);
  background: var(--primary);
  color: white;
}

/* Demo trigger */
.demo-trigger {
  text-align: center;
  margin: 20px 0;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
}
```

#### JavaScript Functies
```javascript
// State initialisatie (nieuwe structuur)
let state = {
  start: {
    organisatie: null,
    clientNaam: '',
    toestemming: 'later',
    hulpvraag: '',
    postcode: '',
    vorigGesprek: {
      datum: null,
      notitie: ''
    }
  },
  domeinen: initDomeinen(),
  netwerkpositie: null,
  beweging: null,
  interventies: [],
  team: [],
  reflectie: null,
  isDemoMode: false
};

// Organisatie selectie
function selectOrg(org) {
  state.start.organisatie = org;
  
  // Visual feedback
  document.querySelectorAll('.org-card').forEach(card => {
    card.classList.remove('selected');
  });
  document.querySelector(`.org-card[data-org="${org}"]`).classList.add('selected');
  
  // Auto-vul doelgroep tips
  setDoelgroepTips(org);
  
  saveState();
}

// Doelgroep tips o.b.v. organisatie
function setDoelgroepTips(org) {
  const DOELGROEP_MAP = {
    'wijkteam': ['sociaalmaatschappelijk'],
    'ggz': ['ggz'],
    'mantelzorg': ['mantelzorgers', 'ouderen'],
    'schuldhulp': ['sociaalmaatschappelijk', 'multiproblem'],
    'ouderenzorg': ['ouderen'],
    'opvang': ['multiproblem', 'lvb'],
    'reclassering': ['multiproblem'],
    'jeugdzorg': ['jongeren']
  };
  
  state.doelgroepen = DOELGROEP_MAP[org] || [];
  
  // Update UI hint
  const hint = document.getElementById('doelgroep-hint');
  if (hint) {
    hint.textContent = `Veel voorkomend bij ${org}: ${state.doelgroepen.join(', ')}`;
  }
}

// Toestemming keuze
function setToestemming(keuze) {
  state.start.toestemming = keuze;
  
  // Visual feedback
  document.querySelectorAll('.btn-choice[data-choice]').forEach(btn => {
    btn.classList.remove('selected');
  });
  document.querySelector(`.btn-choice[data-choice="${keuze}"]`).classList.add('selected');
  
  saveState();
}

// Start gesprek (validatie + navigatie)
function startGesprek() {
  // Validatie
  if (!state.start.organisatie) {
    alert('❌ Kies eerst je organisatie');
    document.getElementById('organisatie-keuze').scrollIntoView({ behavior: 'smooth' });
    return;
  }
  
  if (!state.start.toestemming) {
    alert('❌ Bespreek toestemming voor informatie-uitwisseling');
    document.getElementById('gesprek-start').scrollIntoView({ behavior: 'smooth' });
    return;
  }
  
  // Optioneel: hulpvraag kan leeg (sommige gesprekken starten exploratief)
  state.start.hulpvraag = document.getElementById('hulpvraag').value;
  state.start.clientNaam = document.getElementById('clientNaam').value;
  state.start.postcode = document.getElementById('postcode').value.toUpperCase();
  
  if (document.getElementById('vorigGesprekDatum').value) {
    state.start.vorigGesprek.datum = document.getElementById('vorigGesprekDatum').value;
    state.start.vorigGesprek.notitie = document.getElementById('vorigGesprekNotitie').value;
  }
  
  saveState();
  
  // Ga naar Scherm 2 (Domeinen Scan)
  goToScreenById('domeinen-scan');
}

// Demo modus (Karin's verzoek)
function loadDemo() {
  const DEMO_DATA = {
    start: {
      organisatie: 'wijkteam',
      clientNaam: 'Emma de Vries (voorbeeld)',
      toestemming: 'ja',
      hulpvraag: 'Mijn zus Marie doet alles voor me (boodschappen, dokter, financiën). Maar ze heeft zelf ook een baan en kinderen. Ik zie dat ze moe is en ik wil haar niet zo belasten.',
      postcode: '1012AB',
      vorigGesprek: { datum: null, notitie: '' }
    },
    domeinen: {
      financien: {
        status: 'urgent',
        notitie: 'Schulden opgelopen, brief van deurwaarder ontvangen vorige week',
        steun: 'aanwezig',
        steunDetails: {
          type: 'informeel',
          wie: 'Zus Marie',
          wat: 'Regelt alle financiën, komt elke week langs om post te sorteren'
        }
      },
      ggz: {
        status: 'aandacht',
        notitie: 'Angstig, slaapt slecht sinds schuldenbrief',
        steun: 'nodig',
        steunDetails: null
      },
      sociaalnetwerk: {
        status: 'urgent',
        notitie: 'Alleen contact met zus, rest van familie woont ver weg',
        steun: 'aanwezig',
        steunDetails: {
          type: 'informeel',
          wie: 'Zus Marie',
          wat: 'Enige contact, belt dagelijks'
        }
      },
      huisvesting: {
        status: 'goed',
        notitie: 'Huurwoning, maar wel achterstallige huur',
        steun: 'zelfstandig',
        steunDetails: null
      },
      dagbesteding: {
        status: 'aandacht',
        notitie: 'Werkloos sinds 6 maanden, zoekt naar vrijwilligerswerk',
        steun: 'nodig',
        steunDetails: null
      }
    },
    isDemoMode: true
  };
  
  state = { ...state, ...DEMO_DATA };
  saveState();
  
  // Toon watermerk
  showDemoWatermark();
  
  // Spring naar domeinen scan
  goToScreenById('domeinen-scan');
}

function showDemoWatermark() {
  const watermark = document.createElement('div');
  watermark.id = 'demo-watermark';
  watermark.innerHTML = '🧪 DEMO MODUS - Dit is een voorbeeldcliënt';
  watermark.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #fef3c7, #fde68a);
    color: #92400e;
    padding: 8px 16px;
    text-align: center;
    font-weight: 700;
    font-size: 0.9rem;
    z-index: 10000;
    border-bottom: 2px solid #f59e0b;
  `;
  document.body.prepend(watermark);
}
```

---

### SCHERM 2: Domeinen Scan (ACCORDION)

#### HTML Structuur
```html
<div class="screen" id="screen-domeinen-scan">
  <div class="card">
    <!-- Sticky header met overzicht -->
    <div class="scan-header sticky">
      <div class="scan-overview">
        <div class="overview-chart">
          <canvas id="spiderChartScan"></canvas>
        </div>
        <div class="overview-stats">
          <div class="stat-item">
            <span class="stat-icon">🔴</span>
            <span class="stat-value" id="urgentCount">0</span>
            <span class="stat-label">Urgent</span>
          </div>
          <div class="stat-item">
            <span class="stat-icon">🟡</span>
            <span class="stat-value" id="aandachtCount">0</span>
            <span class="stat-label">Aandacht</span>
          </div>
          <div class="stat-item">
            <span class="stat-icon">🟢</span>
            <span class="stat-value" id="goedCount">0</span>
            <span class="stat-label">Gaat goed</span>
          </div>
        </div>
      </div>
      
      <!-- Scroll progress (optional) -->
      <div class="scroll-progress">
        <div class="progress-bar" id="scanProgress"></div>
      </div>
    </div>

    <!-- Doelgroep hint (als organisatie geselecteerd) -->
    <div class="doelgroep-hint" id="doelgroepHint" style="display:none;">
      💡 <span id="doelgroepHintText"></span>
    </div>

    <!-- Domeinen accordion -->
    <div class="domeinen-accordion">
      <!-- Dynamisch gegenereerd per domein -->
      <div class="domein-item" data-domein="financien">
        <div class="domein-header" onclick="toggleDomein('financien')">
          <span class="domein-icon">💰</span>
          <span class="domein-naam">Financiën</span>
          <span class="domein-status" id="status-financien">⚪ Nog niet</span>
          <span class="domein-toggle">▼</span>
        </div>
        <div class="domein-content" id="content-financien">
          <div class="domein-body">
            <!-- Status keuze -->
            <div class="form-group">
              <label>Hoe gaat het met financiën?</label>
              <div class="status-knoppen">
                <button onclick="setDomeinStatus('financien', 'urgent')" 
                        class="status-btn status-urgent" data-status="urgent">
                  🔴 Urgent
                </button>
                <button onclick="setDomeinStatus('financien', 'aandacht')" 
                        class="status-btn status-aandacht" data-status="aandacht">
                  🟡 Aandacht
                </button>
                <button onclick="setDomeinStatus('financien', 'goed')" 
                        class="status-btn status-goed" data-status="goed">
                  🟢 Gaat goed
                </button>
              </div>
            </div>

            <!-- Notitie -->
            <div class="form-group">
              <label>🤔 Waar denk je aan bij financiën?</label>
              <input type="text" id="notitie-financien" 
                     placeholder="Bijv. schulden, geen inkomen, budgetproblemen..." 
                     oninput="saveDomeinNotitie('financien', this.value)">
            </div>

            <!-- Steun keuze -->
            <div class="form-group">
              <label>Is er steun aanwezig?</label>
              <div class="steun-knoppen">
                <button onclick="setDomeinSteun('financien', 'zelfstandig')" 
                        class="steun-btn" data-steun="zelfstandig">
                  🟢 Zelfstandig
                </button>
                <button onclick="setDomeinSteun('financien', 'aanwezig')" 
                        class="steun-btn" data-steun="aanwezig">
                  🟡 Aanwezig
                </button>
                <button onclick="setDomeinSteun('financien', 'nodig')" 
                        class="steun-btn" data-steun="nodig">
                  🔴 Nodig
                </button>
              </div>
            </div>

            <!-- Steun details (conditionally visible) -->
            <div class="steun-details" id="steun-details-financien" style="display:none;">
              <div class="form-group">
                <label>Type steun</label>
                <select id="steun-type-financien" onchange="updateSteunOptions('financien')">
                  <option value="">Kies...</option>
                  <option value="professioneel">🔵 Professioneel</option>
                  <option value="collectief">🟣 Collectief</option>
                  <option value="informeel">🟢 Informeel</option>
                </select>
              </div>
              <div class="form-group">
                <label>Wie helpt?</label>
                <input type="text" id="steun-wie-financien" 
                       placeholder="Bijv. Schuldhulpverlener Jan" 
                       oninput="saveSteunDetails('financien')">
              </div>
              <div class="form-group">
                <label>Wat doet deze persoon/organisatie?</label>
                <input type="text" id="steun-wat-financien" 
                       placeholder="Bijv. Budgetbeheer + schuldsanering" 
                       oninput="saveSteunDetails('financien')">
              </div>
            </div>

            <!-- Cross-domein tips -->
            <div class="domein-tips" id="tips-financien" style="display:none;">
              <!-- Dynamisch gegenereerd o.b.v. status + andere domeinen -->
            </div>
          </div>
        </div>
      </div>

      <!-- ... repeat for 10 other domains ... -->
    </div>

    <div class="btn-group">
      <button onclick="goBack()" class="btn btn-secondary">← Terug</button>
      <button onclick="volgendeStap()" class="btn btn-primary" id="btnVolgende" disabled>
        Ga door →
      </button>
    </div>
  </div>
</div>
```

#### CSS Toevoegingen
```css
/* Sticky header (blijft zichtbaar tijdens scrollen) */
.scan-header.sticky {
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  margin-bottom: 20px;
}

.scan-overview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
}

.overview-chart {
  max-width: 200px;
}

.overview-stats {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stat-icon {
  font-size: 1.5rem;
}

.stat-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary);
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-light);
  text-transform: uppercase;
}

/* Scroll progress bar */
.scroll-progress {
  width: 100%;
  height: 4px;
  background: #e5e7eb;
  border-radius: 2px;
  margin-top: 12px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: var(--primary);
  width: 0%;
  transition: width 0.3s;
}

/* Doelgroep hint */
.doelgroep-hint {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border: 2px solid #86efac;
  border-radius: 10px;
  padding: 12px 16px;
  margin-bottom: 16px;
  font-size: 0.88rem;
  color: #166534;
}

/* Domeinen accordion */
.domeinen-accordion {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.domein-item {
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s;
}

.domein-item.expanded {
  border-color: var(--primary);
  box-shadow: 0 4px 15px rgba(46, 204, 113, 0.15);
}

.domein-item.urgent {
  border-left: 4px solid #dc2626;
}

.domein-item.aandacht {
  border-left: 4px solid #f59e0b;
}

.domein-item.goed {
  border-left: 4px solid #10b981;
}

.domein-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  cursor: pointer;
  background: linear-gradient(to bottom, #fafafa 0%, #f0f0f0 100%);
  transition: all 0.2s;
}

.domein-header:hover {
  background: linear-gradient(to bottom, #fff 0%, #f5f5f5 100%);
}

.domein-item.expanded .domein-header {
  background: var(--primary);
  color: white;
}

.domein-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.domein-naam {
  flex: 1;
  font-weight: 600;
  font-size: 0.95rem;
}

.domein-status {
  font-size: 0.85rem;
  padding: 4px 12px;
  border-radius: 20px;
  background: #f3f4f6;
  color: #6b7280;
}

.domein-item.expanded .domein-status {
  background: rgba(255,255,255,0.25);
  color: white;
}

.domein-toggle {
  font-size: 1.2rem;
  transition: transform 0.2s;
}

.domein-item.expanded .domein-toggle {
  transform: rotate(180deg);
}

.domein-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.domein-item.expanded .domein-content {
  max-height: 2000px;
  transition: max-height 0.4s ease-in;
}

.domein-body {
  padding: 20px;
  background: white;
}

/* Status knoppen */
.status-knoppen {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.status-btn {
  flex: 1;
  min-width: 100px;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  background: white;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s;
}

.status-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.status-btn.active.status-urgent {
  border-color: #dc2626;
  background: #fee2e2;
  color: #991b1b;
}

.status-btn.active.status-aandacht {
  border-color: #f59e0b;
  background: #fef3c7;
  color: #92400e;
}

.status-btn.active.status-goed {
  border-color: #10b981;
  background: #d1fae5;
  color: #065f46;
}

/* Steun knoppen */
.steun-knoppen {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.steun-btn {
  flex: 1;
  min-width: 100px;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  background: white;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s;
}

.