// ========================================
// TRIAGE V2: Real-time Spider + AI
// ========================================

// Update real-time spider diagram tijdens triage
function updateTriageSpiderLive() {
    const container = document.getElementById('triageSpiderLive');
    if (!container) return;
    
    // Tel domeinen per status
    const stats = { probleem: 0, aandacht: 0, goed: 0 };
    const domainData = [];
    
    domains.forEach(d => {
        const status = state.domainStatus?.[d.id];
        if (status === 'steun-nodig') {
            stats.probleem++;
            domainData.push({ domain: d, value: 0.2 });  // Rood = klein vlak
        } else if (status === 'steun-aanwezig') {
            stats.aandacht++;
            domainData.push({ domain: d, value: 0.6 });  // Oranje = medium
        } else if (status === 'goed') {
            stats.goed++;
            domainData.push({ domain: d, value: 1.0 });   // Groen = groot vlak
        }
    });
    
    // Update stats
    if (document.getElementById('statProbleem')) document.getElementById('statProbleem').textContent = stats.probleem;
    if (document.getElementById('statAandacht')) document.getElementById('statAandacht').textContent = stats.aandacht;
    if (document.getElementById('statGoed')) document.getElementById('statGoed').textContent = stats.goed;
    if (document.getElementById('triageProgressText')) document.getElementById('triageProgressText').textContent = 
        `${stats.probleem + stats.aandacht + stats.goed}/${domains.length}`;
    
    // Als nog niks ingevuld: toon placeholder
    if (domainData.length === 0) {
        container.innerHTML = `<div style="text-align:center;color:#94a3b8;font-size:0.9rem;padding:40px;">
            <div style="font-size:2rem;margin-bottom:8px;">✨</div>
            Begin met invullen<br>om je netwerk te zien groeien
        </div>`;
        return;
    }
    
    // Render mini spider diagram
    const size = 280;
    const center = size / 2;
    const maxRadius = size / 2 - 40;
    const angleStep = (2 * Math.PI) / 11;
    
    // Bereken punten
    const points = domainData.map((item, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const radius = maxRadius * item.value;
        return {
            x: center + radius * Math.cos(angle),
            y: center + radius * Math.sin(angle),
            domain: item.domain,
            value: item.value
        };
    });
    
    // SVG genereren
    const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';
    const maxCircle = Array.from({length: 11}, (_, i) => {
        const angle = i * angleStep - Math.PI / 2;
        return {
            x: center + maxRadius * Math.cos(angle),
            y: center + maxRadius * Math.sin(angle)
        };
    });
    const maxPath = maxCircle.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';
    
    container.innerHTML = `
        <svg viewBox="0 0 ${size} ${size}" style="width:100%;height:auto;">
            <!-- Max circle (grijs) -->
            <path d="${maxPath}" fill="none" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4,4"/>
            
            <!-- Filled area (gradient) -->
            <defs>
                <linearGradient id="spiderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#22c55e;stop-opacity:0.3" />
                    <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0.3" />
                </linearGradient>
            </defs>
            <path d="${pathData}" fill="url(#spiderGrad)" stroke="#22c55e" stroke-width="2.5"/>
            
            <!-- Punten -->
            ${points.map(p => {
                const color = p.value < 0.4 ? '#dc2626' : p.value < 0.8 ? '#f59e0b' : '#22c55e';
                return `<circle cx="${p.x}" cy="${p.y}" r="5" fill="${color}" stroke="white" stroke-width="2"/>`;
            }).join('')}
            
            <!-- Labels (alleen first 3 voor leesbaarheid) -->
            ${points.slice(0, 3).map((p, i) => {
                const angle = i * angleStep - Math.PI / 2;
                const labelR = maxRadius + 25;
                const lx = center + labelR * Math.cos(angle);
                const ly = center + labelR * Math.sin(angle);
                return `<text x="${lx}" y="${ly}" text-anchor="middle" font-size="10" fill="#64748b" font-weight="600">${p.domain.emoji}</text>`;
            }).join('')}
        </svg>`;
    
    // Check for AI suggestions
    checkAISuggestions();
}

// AI suggesties genereren
function checkAISuggestions() {
    const filledCount = Object.keys(state.domainStatus || {}).length;
    if (filledCount < 3) return; // Wacht tot 3+ domeinen
    
    const aiPanel = document.getElementById('aiSuggestie');
    const aiText = document.getElementById('aiSuggestionText');
    if (!aiPanel || !aiText) return;
    
    // Simpele AI logica (kan later uitgebreid worden)
    const suggestions = [];
    
    // Check: Financiën + Huisvesting beide rood?
    if (state.domainStatus['0'] === 'steun-nodig' && state.domainStatus['2'] === 'steun-nodig') {
        suggestions.push("Je noemde problemen bij <strong>Financiën</strong> én <strong>Huisvesting</strong>. Deze hangen vaak samen - zou schuldhulpverlening kunnen helpen?");
    }
    
    // Check: Geestelijke gezondheid rood + geen sociaal netwerk?
    if (state.domainStatus['4'] === 'steun-nodig' && state.domainStatus['8'] === 'steun-nodig') {
        suggestions.push("Zowel <strong>Geestelijke gezondheid</strong> als <strong>Sociaal netwerk</strong> vragen aandacht. Een lotgenotengroep kan beide ondersteunen.");
    }
    
    // Check: Veel groene domeinen maar 1-2 rood? (focus!)
    const green = Object.values(state.domainStatus || {}).filter(s => s === 'goed').length;
    const red = Object.values(state.domainStatus || {}).filter(s => s === 'steun-nodig').length;
    if (green >= 7 && red <= 2) {
        suggestions.push("Goed nieuws: veel gebieden gaan <strong>zelfstandig</strong>! Focus op de 1-2 gebieden die aandacht vragen - dat maakt het haalbaar.");
    }
    
    // Toon eerste suggestie
    if (suggestions.length > 0) {
        aiPanel.style.display = 'block';
        aiText.innerHTML = suggestions[0];
    } else {
        aiPanel.style.display = 'none';
    }
}

// Override setStoplicht om real-time update te triggeren
const originalSetStoplicht = window.setStoplicht;
window.setStoplicht = function(domainId, value) {
    if (originalSetStoplicht) originalSetStoplicht(domainId, value);
    else {
        if (!state.domainStatus) state.domainStatus = {};
        state.domainStatus[domainId] = value;
        saveState();
        renderStoplichtGrid();
    }
    // Trigger real-time update
    setTimeout(updateTriageSpiderLive, 100);
};

console.log('✅ Triage V2: Real-time Spider + AI loaded');
