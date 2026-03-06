import { esc } from '../shared/utils/esc.js';
import { state } from './state.js';
import { domains } from './domains.js';

export function renderDomainScreens() {
  const totalDomains = domains.length;

  domains.forEach((domain, index) => {
    const screenNum = index + 1;
    const screen = document.getElementById(`screen${screenNum}`);
    if (!screen) return;

    const savedAnswer = state.answers[domain.id];
    const isLast = screenNum === totalDomains;

    screen.innerHTML = `
      <div class="card">
        <div class="domain-emoji">${domain.emoji}</div>
        <div class="domain-title">${esc(domain.title)}</div>
        <div class="domain-description">${esc(domain.description)}</div>

        ${domain.context_note ? `
        <div style="background: #eff6ff; border-left: 3px solid #93c5fd; border-radius: 8px; padding: 12px 16px; margin: 0 0 20px 0; font-size: 0.9rem; color: #1e40af; line-height: 1.5;">
          💡 ${esc(domain.context_note)}
        </div>` : ''}

        <p style="text-align: center; margin-bottom: 25px;">Hoe gaat het met ${esc(domain.title.toLowerCase())}?</p>

        <div class="options">
          <div class="option ${savedAnswer === 'goed' ? 'selected' : ''}" data-value="goed" onclick="app.selectOption('${domain.id}', 'goed', this)">
            <span class="option-emoji">🟢</span>
            <span>Gaat goed</span>
          </div>
          <div class="option ${savedAnswer === 'beter' ? 'selected' : ''}" data-value="beter" onclick="app.selectOption('${domain.id}', 'beter', this)">
            <span class="option-emoji">🟡</span>
            <span>Kan beter</span>
          </div>
          <div class="option ${savedAnswer === 'actie' ? 'selected' : ''}" data-value="actie" onclick="app.selectOption('${domain.id}', 'actie', this)">
            <span class="option-emoji">🔴</span>
            <span>Hier kan steun helpen</span>
          </div>
        </div>

        <div class="btn-group">
          <button class="btn-secondary" onclick="app.goToScreen(${screenNum - 1})">← Vorige</button>
          <button class="btn-primary" id="next${screenNum}" onclick="app.goToScreen(${screenNum + 1})" ${savedAnswer ? '' : 'disabled'}>
            ${isLast ? 'Bekijk resultaat →' : 'Volgende →'}
          </button>
        </div>
      </div>
    `;
  });
}

export function updateProgress() {
  const total = 8;
  const percentage = (state.currentScreen / total) * 100;

  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  if (progressBar) progressBar.style.width = `${percentage}%`;
  if (progressText) progressText.textContent = `Stap ${state.currentScreen} van ${total}`;

  const dpb = document.getElementById('progressBarDesktop');
  const dpt = document.getElementById('progressTextDesktop');
  if (dpb) dpb.style.width = `${percentage.toFixed(0)}%`;
  if (dpt) dpt.textContent = state.currentScreen > 0 && state.currentScreen < 8 ? `Vraag ${state.currentScreen} van 7` : '';
}

function renderHulp(hulp) {
  let html = '';

  if (hulp.info && hulp.info.length > 0) {
    html += `
      <div class="hulp-stap">
        <strong>📖 Informatie lezen (anoniem)</strong>
        <div class="hulp-links">
          ${hulp.info.map((item) => `<a href="${item.url}" target="_blank" rel="noopener noreferrer">${esc(item.name)}</a> - ${esc(item.desc || '')}`).join('')}
        </div>
      </div>
    `;
  }

  if (hulp.chat && hulp.chat.length > 0) {
    html += `
      <div class="hulp-stap">
        <strong>💬 Online chatten (anoniem, geen bellen)</strong>
        <div class="hulp-links">
          ${hulp.chat.map((item) => `<a href="${item.url || '#'}" target="_blank" rel="noopener noreferrer">${esc(item.name)}</a> ${item.desc ? `- ${esc(item.desc)}` : ''}`).join('')}
        </div>
      </div>
    `;
  }

  if (hulp.persoonlijk && hulp.persoonlijk.length > 0) {
    html += `
      <div class="hulp-stap">
        <strong>🤝 Persoonlijk gesprek</strong>
        <div class="hulp-links">
          ${hulp.persoonlijk.map((item) => `<span>${esc(item.name)}</span> - ${esc(item.desc || '')}`).join('')}
        </div>
      </div>
    `;
  }

  if (hulp.bellen && hulp.bellen.length > 0) {
    html += `
      <div class="hulp-stap">
        <strong>📞 Bellen</strong>
        <div class="hulp-links">
          ${hulp.bellen.map((item) => `<span><strong>${esc(item.name)}:</strong> ${esc(item.tel || '')}</span> ${item.desc ? `- ${esc(item.desc)}` : ''}`).join('')}
        </div>
      </div>
    `;
  }

  if (hulp.urgent) {
    html += `
      <div class="hulp-stap" style="border-left-color: #ef4444; background: #fee2e2;">
        <strong style="color: #ef4444;">🚨 Urgent</strong>
        <span style="color: #991b1b;">${esc(hulp.urgent)}</span>
      </div>
    `;
  }

  return html;
}

export function renderResults() {
  const container = document.getElementById('resultsSummary');
  if (!container) return;

  const goed = domains.filter((d) => state.answers[d.id] === 'goed');
  const beter = domains.filter((d) => state.answers[d.id] === 'beter');
  const actie = domains.filter((d) => state.answers[d.id] === 'actie');

  const ageLabelMap = {
    jongere: '🧒 Jongere (12–23)',
    jongvolwassene: '👨 Jongvolwassene (18–35)',
    volwassene: '👩 Volwassene (30–64)',
    ouder: '👴 Ouder (65+)',
  };

  const getTips = (domain) => {
    if (state.ageCategory && domain.tips_leeftijd && domain.tips_leeftijd[state.ageCategory]) {
      return domain.tips_leeftijd[state.ageCategory];
    }
    return domain.tips_beter;
  };

  let html = '<div class="result-summary">';

  if (state.ageCategory) {
    html += `<div style="text-align:center; margin-bottom: 16px;"><span style="background:#059669; color:white; padding:6px 16px; border-radius:999px; font-size:0.85rem; font-weight:600;">Tips op maat voor: ${ageLabelMap[state.ageCategory]}</span></div>`;
  }

  html += `
    <div style="text-align: center; margin-bottom: 25px; font-size: 1.1rem;">
      <div style="margin-bottom: 10px;"><span style="color: #22c55e; font-weight: 700; font-size: 1.5rem;">✓ ${goed.length}</span> <span style="color: #718096;">gaat goed</span></div>
      <div style="margin-bottom: 10px;"><span style="color: #f59e0b; font-weight: 700; font-size: 1.5rem;">⚠ ${beter.length}</span> <span style="color: #718096;">kan beter</span></div>
      <div><span style="color: #ef4444; font-weight: 700; font-size: 1.5rem;">🔴 ${actie.length}</span> <span style="color: #718096;">steun kan helpen</span></div>
    </div>
  `;

  if (goed.length > 0) {
    html += `<div class="result-item goed"><strong style="display:block; margin-bottom:8px;">🟢 Gaat goed (${goed.length})</strong>${goed.map((d) => `${d.emoji} ${esc(d.title)}`).join(', ')}
      <div class="hulp-toggle" onclick="this.nextElementSibling.classList.toggle('open')" style="margin-top:12px; background:#dcfce7; border-color:#22c55e;"><strong>💡 Blijf zo doorgaan - tips ▼</strong></div>
      <div class="hulp-content">${goed.map((d) => `<div style="margin-bottom: 12px;"><strong style="color: #22c55e;">${d.emoji} ${esc(d.title)}:</strong><ul style="margin: 8px 0 0 20px; line-height: 1.8;">${d.tips_goed.map((tip) => `<li>${esc(tip)}</li>`).join('')}</ul></div>`).join('')}</div>
    </div>`;
  }

  if (beter.length > 0) {
    beter.forEach((domain) => {
      html += `<div class="result-item beter"><strong style="display:block; margin-bottom:8px;">🟡 ${domain.emoji} ${esc(domain.title)}</strong>
        <div class="hulp-toggle" onclick="this.nextElementSibling.classList.toggle('open')" style="background:#fef3c7; border-color:#f59e0b;"><strong>💪 Wat kan helpen? Klik hier ▼</strong></div>
        <div class="hulp-content"><ul style="margin: 8px 0 0 20px; line-height: 1.8;">${getTips(domain).map((tip) => `<li>${esc(tip)}</li>`).join('')}</ul></div>
      </div>`;
    });
  }

  if (actie.length > 0) {
    actie.forEach((domain) => {
      html += `<div class="result-item actie"><strong style="display:block; margin-bottom:8px;">🔴 ${domain.emoji} ${esc(domain.title)} — steun kan hier helpen</strong>
        <div class="hulp-toggle" onclick="this.nextElementSibling.classList.toggle('open')"><strong>💙 Waar kan je terecht? Klik hier ▼</strong></div>
        <div class="hulp-content">${renderHulp(domain.hulp)}</div>
      </div>`;
    });
  }

  html += '</div>';
  container.innerHTML = html;
}

export function renderWijkkaart() {
  const el = document.getElementById('wijkDashboardInhoud');
  if (!el) return;
}
