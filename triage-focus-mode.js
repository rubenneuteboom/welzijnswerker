// ========================================
// TRIAGE FOCUS MODE: 1 domein per keer
// ========================================

let focusIndex = 0; // Huidige domein index
let focusDomains = []; // Te tonen domeinen

// Initialize focus mode
function initFocusMode() {
    // Bepaal welke domeinen te tonen (Track A filter)
    if (state.selectedTrack === 'hulpvraag' && state.hulpvraagSelectedDomains && state.hulpvraagSelectedDomains.length > 0) {
        focusDomains = domains.filter(d => state.hulpvraagSelectedDomains.includes(d.id));
    } else {
        focusDomains = domains;
    }
    
    focusIndex = 0;
    renderFocusDomain();
}

// Render huidige domein
function renderFocusDomain() {
    const container = document.getElementById('focusDomainCard');
    if (!container || focusDomains.length === 0) return;
    
    const domain = focusDomains[focusIndex];
    const status = state.domainStatus?.[domain.id] || null;
    const beleving = state.clientBeleving?.[domain.id] || null;
    
    // Update progress
    const progress = Math.round(((focusIndex + 1) / focusDomains.length) * 100);
    document.getElementById('focusProgress').textContent = `${focusIndex + 1} van ${focusDomains.length}`;
    document.getElementById('focusProgressBar').style.width = progress + '%';
    
    // Update buttons
    document.getElementById('btnFocusPrev').disabled = focusIndex === 0;
    const nextBtn = document.getElementById('btnFocusNext');
    if (focusIndex === focusDomains.length - 1) {
        nextBtn.textContent = 'Afronden →';
        nextBtn.onclick = () => saveTriageAndContinue();
    } else {
        nextBtn.textContent = 'Volgende →';
        nextBtn.onclick = () => focusNavigate(1);
    }
    
    // Render domein card
    container.innerHTML = `
        <!-- Domein header -->
        <div style="text-align: center; margin-bottom: 24px;">
            <div style="font-size: 4rem; margin-bottom: 12px;">${domain.emoji}</div>
            <h2 style="font-size: 1.8rem; color: #0f172a; margin: 0 0 8px 0; font-weight: 700;">${domain.name}</h2>
            <p style="font-size: 0.9rem; color: #64748b; margin: 0;">${domain.description || 'Hoe gaat het hier?'}</p>
        </div>
        
        <!-- Vraag 1: Hoe gaat het? (Subjectief) -->
        <div style="margin-bottom: 28px;">
            <label style="display: block; font-size: 1.05rem; color: #1e293b; font-weight: 700; margin-bottom: 14px;">
                💭 Hoe gaat dit voor jou?
            </label>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
                ${createBigButton('prima', '😊', 'Prima', '#22c55e', '#dcfce7', beleving === 'prima', `setClientBeleving('${domain.id}','prima'); renderFocusDomain();`)}
                ${createBigButton('gaat-wel', '😐', 'Gaat wel', '#f59e0b', '#fef3c7', beleving === 'gaat-wel', `setClientBeleving('${domain.id}','gaat-wel'); renderFocusDomain();`)}
                ${createBigButton('zwaar', '😟', 'Zwaar', '#dc2626', '#fee2e2', beleving === 'zwaar', `setClientBeleving('${domain.id}','zwaar'); renderFocusDomain();`)}
            </div>
        </div>
        
        <!-- Vraag 2: Is er steun? (Objectief) -->
        <div style="margin-bottom: 28px;">
            <label style="display: block; font-size: 1.05rem; color: #1e293b; font-weight: 700; margin-bottom: 14px;">
                🤝 Is er steun bij dit gebied?
            </label>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
                ${createBigButton('goed', '🟢', 'Zelfstandig', '#22c55e', '#dcfce7', status === 'goed', `setStoplichtFocus('${domain.id}','goed'); renderFocusDomain();`)}
                ${createBigButton('steun-aanwezig', '🟡', 'Steun nodig', '#f59e0b', '#fef3c7', status === 'steun-aanwezig', `setStoplichtFocus('${domain.id}','steun-aanwezig'); renderFocusDomain();`)}
                ${createBigButton('steun-nodig', '🔴', 'Urgent', '#dc2626', '#fee2e2', status === 'steun-nodig', `setStoplichtFocus('${domain.id}','steun-nodig'); renderFocusDomain();`)}
            </div>
        </div>
        
        <!-- Wie helpt? (alleen bij steun aanwezig/nodig) -->
        ${(status === 'steun-aanwezig' || status === 'steun-nodig') ? `
        <div style="background: #f8fafc; border-radius: 10px; padding: 18px; margin-bottom: 20px; border: 2px solid #e2e8f0;">
            <label style="display: block; font-size: 0.95rem; color: #475569; font-weight: 700; margin-bottom: 10px;">
                👥 Wie helpt hierbij?
            </label>
            <input type="text" 
                   id="focusWieHelpt" 
                   placeholder="Bijv: mijn zus, maatschappelijk werk..." 
                   value="${state.steunDetails?.[domain.id]?.wie || ''}"
                   onchange="saveFocusWieHelpt('${domain.id}', this.value)"
                   style="width: 100%; padding: 12px 16px; border: 2px solid #cbd5e1; border-radius: 8px; font-size: 0.95rem; font-family: inherit;">
            <p style="font-size: 0.8rem; color: #64748b; margin: 8px 0 0 0;">
                💡 Je kunt meerdere personen/organisaties noemen
            </p>
        </div>
        ` : ''}
    `;
    
    // Update mini spider
    updateMiniSpider();
    
    // Check AI suggestions
    checkAISuggestions();
}

// Helper: Create big button
function createBigButton(value, emoji, label, color, bgColor, selected, onclick) {
    return `
        <button onclick="${onclick}" 
                style="padding: 18px 16px; 
                       border: 3px solid ${selected ? color : '#e2e8f0'}; 
                       background: ${selected ? bgColor : 'white'}; 
                       border-radius: 12px; 
                       cursor: pointer; 
                       transition: all 0.2s;
                       font-family: inherit;">
            <div style="font-size: 2rem; margin-bottom: 8px;">${emoji}</div>
            <div style="font-size: 0.9rem; font-weight: 700; color: ${selected ? color : '#94a3b8'};">${label}</div>
        </button>
    `;
}

// Navigate tussen domeinen
function focusNavigate(direction) {
    focusIndex += direction;
    if (focusIndex < 0) focusIndex = 0;
    if (focusIndex >= focusDomains.length) focusIndex = focusDomains.length - 1;
    renderFocusDomain();
}

// Set stoplicht in focus mode
function setStoplichtFocus(domainId, value) {
    if (!state.domainStatus) state.domainStatus = {};
    state.domainStatus[domainId] = value;
    saveState();
}

// Save wie helpt
function saveFocusWieHelpt(domainId, value) {
    if (!state.steunDetails) state.steunDetails = {};
    if (!state.steunDetails[domainId]) state.steunDetails[domainId] = {};
    state.steunDetails[domainId].wie = value;
    saveState();
}

// Update mini spider diagram
function updateMiniSpider() {
    const container = document.getElementById('miniSpider');
    if (!container) return;
    
    // Tel stats
    let stats = { probleem: 0, aandacht: 0, goed: 0 };
    const filledDomains = [];
    
    focusDomains.forEach((d, idx) => {
        if (idx > focusIndex) return; // Alleen tot huidige
        const status = state.domainStatus?.[d.id];
        if (status === 'steun-nodig') {
            stats.probleem++;
            filledDomains.push({ domain: d, value: 0.3 });
        } else if (status === 'steun-aanwezig') {
            stats.aandacht++;
            filledDomains.push({ domain: d, value: 0.6 });
        } else if (status === 'goed') {
            stats.goed++;
            filledDomains.push({ domain: d, value: 1.0 });
        }
    });
    
    // Update stats
    if (document.getElementById('miniStatProbleem')) document.getElementById('miniStatProbleem').textContent = stats.probleem;
    if (document.getElementById('miniStatAandacht')) document.getElementById('miniStatAandacht').textContent = stats.aandacht;
    if (document.getElementById('miniStatGoed')) document.getElementById('miniStatGoed').textContent = stats.goed;
    
    // Als nog niks: placeholder
    if (filledDomains.length === 0) {
        container.innerHTML = `<div style="text-align:center;color:#94a3b8;font-size:0.85rem;">
            <div style="font-size:1.5rem;margin-bottom:4px;">✨</div>
            Start met invullen
        </div>`;
        return;
    }
    
    // Render mini spider (simplified)
    const size = 180;
    const center = size / 2;
    const maxRadius = size / 2 - 25;
    const angleStep = (2 * Math.PI) / focusDomains.length;
    
    const points = filledDomains.map((item, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const radius = maxRadius * item.value;
        return {
            x: center + radius * Math.cos(angle),
            y: center + radius * Math.sin(angle)
        };
    });
    
    const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';
    
    container.innerHTML = `
        <svg viewBox="0 0 ${size} ${size}" style="width:100%;height:100%;">
            <defs>
                <linearGradient id="miniGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#22c55e;stop-opacity:0.4" />
                    <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0.4" />
                </linearGradient>
            </defs>
            <path d="${pathData}" fill="url(#miniGrad)" stroke="#22c55e" stroke-width="2"/>
            ${points.map(p => `<circle cx="${p.x}" cy="${p.y}" r="3" fill="#22c55e" stroke="white" stroke-width="1.5"/>`).join('')}
        </svg>
    `;
}

// Check for AI suggestions (simplified for focus mode)
function checkAISuggestions() {
    if (focusIndex < 2) return; // Wacht tot 3e domein
    
    const aiPanel = document.getElementById('aiSuggestie');
    const aiText = document.getElementById('aiSuggestionText');
    if (!aiPanel || !aiText) return;
    
    const suggestions = [];
    
    // Simpele patronen
    const redCount = Object.values(state.domainStatus || {}).filter(s => s === 'steun-nodig').length;
    const greenCount = Object.values(state.domainStatus || {}).filter(s => s === 'goed').length;
    
    if (greenCount >= 5) {
        suggestions.push(`Goed nieuws! <strong>${greenCount} gebieden</strong> gaan zelfstandig. Focus op de gebieden die aandacht vragen.`);
    }
    
    if (redCount >= 3) {
        suggestions.push(`Er zijn <strong>${redCount} gebieden urgent</strong>. Overweeg eerst te stabiliseren voordat je nieuwe stappen zet.`);
    }
    
    if (suggestions.length > 0) {
        aiPanel.style.display = 'block';
        aiText.innerHTML = suggestions[0];
    } else {
        aiPanel.style.display = 'none';
    }
}

// Override goToScreen voor triage
const originalGoToScreen = window.goToScreen;
window.goToScreen = function(...args) {
    originalGoToScreen(...args);
    // Check if we landed on triage
    const currentConfig = getScreenConfig();
    const currentScreen = currentConfig[state.currentScreen - 1];
    if (currentScreen && currentScreen.id === 'triage') {
        setTimeout(initFocusMode, 100);
    }
};

console.log('✅ Triage Focus Mode loaded');
