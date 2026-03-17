// NIEUWE renderInterventiesPerDomein() - ACTIEPLAN VERSIE

function renderInterventiesPerDomein() {
    console.log('🎯 renderInterventiesPerDomein - ACTIEPLAN versie');
    
    // Vind domeinen met beweging (waar "anders" gekozen is)
    const domeinenMetBeweging = domains.filter(d => {
        const bewegingData = state.beweging?.[d.id];
        return bewegingData && bewegingData.actie === 'anders';
    });
    
    console.log(`📋 ${domeinenMetBeweging.length} domeinen met beweging gevonden`);
    
    if (domeinenMetBeweging.length === 0) {
        return `
            <div style="background:#fef3c7;border:2px solid #f59e0b;border-radius:12px;padding:20px;text-align:center;">
                <p style="font-size:1.1rem;margin:0 0 10px;font-weight:700;color:#92400e;">💡 Geen beweging gepland</p>
                <p style="margin:0;color:#78350f;">
                    Ga terug naar <strong>Beweging</strong> en kies bij domeinen "Ik wil dit anders regelen" om een actieplan te maken.
                </p>
            </div>
        `;
    }
    
    const positieLabel = (type) => {
        if (type === 'formeel') return 'Professioneel';
        if (type === 'collectief') return 'Collectief';
        if (type === 'informeel') return 'Informeel';
        return 'Geen steun';
    };
    
    const richtingLabel = (richting) => {
        if (richting === 'informeel') return '🟢 Informeel (familie/vrienden)';
        if (richting === 'collectief') return '🟣 Collectief (buurt/vereniging)';
        if (richting === 'formeel') return '🔵 Professional';
        if (richting === 'minder') return '🔴 Afbouwen / minder steun';
        return richting;
    };
    
    let html = `
        <div style="background:#dbeafe;border:2px solid #3b82f6;border-radius:12px;padding:16px;margin-bottom:20px;">
            <div style="font-size:0.9rem;color:#1e40af;line-height:1.5;">
                <strong>📋 Actieplan per domein</strong><br>
                Voor elk domein waar je beweging wilt: van huidige situatie → gewenste situatie.<br>
                Vink de acties aan die je gaat ondernemen.
            </div>
        </div>
    `;
    
    domeinenMetBeweging.forEach(domein => {
        const bewegingData = state.beweging[domein.id];
        const steunDetail = state.steunDetails?.[domein.id] || {};
        const interventieData = state.interventies?.[domein.id] || { acties: [] };
        
        const acties = getActiesVoorBeweging(domein.id, bewegingData.richting);
        
        html += `
            <div style="background:white;border:2px solid #3b82f6;border-radius:12px;padding:18px;margin-bottom:20px;">
                <!-- Domein header -->
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding-bottom:12px;border-bottom:2px solid #e5e7eb;">
                    <span style="font-size:1.8rem;">${domein.emoji}</span>
                    <div style="flex:1;">
                        <div style="font-size:1.1rem;font-weight:700;color:#374151;">${domein.name}</div>
                        <div style="font-size:0.85rem;color:#6b7280;">${bewegingData.doel || 'Geen specifiek doel ingevuld'}</div>
                    </div>
                </div>
                
                <!-- Van → Naar visualisatie -->
                <div style="background:#f9fafb;border-radius:8px;padding:14px;margin-bottom:16px;">
                    <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:12px;align-items:center;">
                        <div style="text-align:center;">
                            <div style="font-size:0.75rem;color:#6b7280;font-weight:600;margin-bottom:6px;">VAN</div>
                            <div style="font-size:1.1rem;font-weight:700;color:#374151;">
                                ${steunDetail.type ? positieLabel(steunDetail.type) : '🔴 Geen steun'}
                            </div>
                            ${steunDetail.wie ? `<div style="font-size:0.8rem;color:#6b7280;margin-top:4px;">${steunDetail.wie}</div>` : ''}
                        </div>
                        <div style="font-size:2rem;color:#3b82f6;">→</div>
                        <div style="text-align:center;">
                            <div style="font-size:0.75rem;color:#6b7280;font-weight:600;margin-bottom:6px;">NAAR</div>
                            <div style="font-size:1.1rem;font-weight:700;color:#3b82f6;">
                                ${richtingLabel(bewegingData.richting)}
                            </div>
                        </div>
                    </div>
                    ${bewegingData.toelichting ? `
                    <div style="margin-top:12px;padding-top:12px;border-top:1px solid #e5e7eb;">
                        <div style="font-size:0.75rem;color:#6b7280;font-weight:600;margin-bottom:4px;">💬 Toelichting:</div>
                        <div style="font-size:0.85rem;color:#374151;font-style:italic;">${bewegingData.toelichting}</div>
                    </div>
                    ` : ''}
                </div>
                
                <!-- Actie checklist -->
                <div>
                    <div style="font-size:0.9rem;font-weight:700;color:#374151;margin-bottom:12px;">🎯 Concrete acties:</div>
                    ${acties.length > 0 ? `
                    <div style="display:grid;gap:10px;margin-bottom:12px;">
                        ${acties.map(actie => {
                            const isChecked = interventieData.acties.includes(actie.id);
                            return `
                                <label style="display:flex;gap:12px;padding:12px;border:2px solid ${isChecked ? '#3b82f6' : '#e5e7eb'};
                                       background:${isChecked ? '#eff6ff' : 'white'};border-radius:8px;cursor:pointer;transition:all 0.2s;"
                                       onchange="toggleActie('${domein.id}', '${actie.id}', this.querySelector('input').checked)">
                                    <input type="checkbox" ${isChecked ? 'checked' : ''}
                                           style="width:20px;height:20px;margin-top:2px;flex-shrink:0;cursor:pointer;">
                                    <div style="flex:1;">
                                        <div style="font-weight:600;color:#374151;margin-bottom:4px;">${actie.naam}</div>
                                        <div style="font-size:0.85rem;color:#6b7280;">${actie.beschrijving}</div>
                                        ${actie.contact && (actie.contact.telefoon || actie.contact.website) ? `
                                        <div style="font-size:0.75rem;color:#3b82f6;margin-top:6px;">
                                            ${actie.contact.telefoon ? `📞 ${actie.contact.telefoon}` : ''}
                                            ${actie.contact.website ? ` 🌐 ${actie.contact.website}` : ''}
                                        </div>
                                        ` : ''}
                                    </div>
                                </label>
                            `;
                        }).join('')}
                    </div>
                    ` : `
                    <div style="padding:12px;background:#f9fafb;border-radius:8px;color:#6b7280;font-size:0.85rem;margin-bottom:12px;">
                        💡 Geen voorgestelde acties voor deze beweging. Voeg hieronder je eigen acties toe.
                    </div>
                    `}
                    
                    <!-- Eigen actie toevoegen -->
                    <div style="margin-top:12px;">
                        <input type="text" id="custom-actie-${domein.id}" placeholder="+ Eigen actie toevoegen..."
                               style="width:100%;padding:10px;border:2px dashed #d1d5db;border-radius:8px;font-size:0.85rem;"
                               onkeypress="if(event.key==='Enter') { addCustomActie('${domein.id}', this.value); }">
                    </div>
                </div>
            </div>
        `;
    });
    
    return html;
}
