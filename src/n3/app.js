import { loadN2Data } from './import.js';
import { buildDashboardPayload } from './report.js';

        const app = {
            data: null,
            currentScreen: 1,
            casussen: [], // gestapelde casussen
            kosten: {
                informeel: 0,
                collectief: 150,
                thuiszorg: 400,
                begeleiding: 900,
                ggz: 2200,
                formeel: 800  // gemiddeld formeel
            },

            init() {
                this.n2Data = loadN2Data();
                this.dashboardPayload = buildDashboardPayload(this.n2Data);
                this.setupDragDrop();
                console.log('RPA Strategische Netwerkimpactanalyse geladen');
            },

            setupDragDrop() {
                const upload = document.getElementById('fileUpload');
                
                upload.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    upload.classList.add('dragover');
                });

                upload.addEventListener('dragleave', () => {
                    upload.classList.remove('dragover');
                });

                upload.addEventListener('drop', (e) => {
                    e.preventDefault();
                    upload.classList.remove('dragover');
                    const file = e.dataTransfer.files[0];
                    if (file) this.processFile(file);
                });
            },

            // Check bij laden of er data vanuit Niveau 2 klaarstaat
            checkNiveau2Import() {
                // Laad caseload uit localStorage
                const caseloadRaw = localStorage.getItem('rpa_caseload');
                const caseload = caseloadRaw ? JSON.parse(caseloadRaw) : [];

                const caseloadBlok = document.getElementById('caseloadBlok');
                const geenBlok = document.getElementById('geenCaseloadBlok');

                if (caseload.length > 0) {
                    caseloadBlok.style.display = 'block';
                    geenBlok.style.display = 'none';
                    this.renderCaseloadLijst(caseload);
                } else {
                    // Fallback: check oude enkelvoudige import
                    const raw = localStorage.getItem('rpa_niveau3_import');
                    if (raw) {
                        try {
                            const data = JSON.parse(raw);
                            const fakeLoad = [data];
                            caseloadBlok.style.display = 'block';
                            geenBlok.style.display = 'none';
                            this.renderCaseloadLijst(fakeLoad);
                        } catch(e) {}
                    }
                }
            },

            renderCaseloadLijst(caseload) {
                const lijst = document.getElementById('caseloadLijst');
                lijst.innerHTML = caseload.map((c, i) => {
                    const datum = new Date(c.metadata.exportDatum).toLocaleDateString('nl-NL', {day:'numeric', month:'short', hour:'2-digit', minute:'2-digit'});
                    const naam = c.metadata.displayNaam || `Cliënt ${i+1}`;
                    const dg = (c.metadata.doelgroepen||[]).join(', ') || '—';
                    const bewegingen = (c.domeinen||[]).filter(d => d.bewegingsrichting).length;
                    const positie = c.netwerkpositie ? c.netwerkpositie.label : '—';
                    return `<label style="display:flex;align-items:center;gap:12px;background:white;border:2px solid #e5e7eb;border-radius:10px;padding:12px 16px;cursor:pointer;transition:border-color 0.15s;" 
                                onmouseover="this.style.borderColor='#667eea'" onmouseout="this.style.borderColor=this.querySelector('input').checked?'#667eea':'#e5e7eb'">
                        <input type="checkbox" value="${i}" onchange="app.updateAnalyseerBtn()" 
                            style="width:18px;height:18px;accent-color:#667eea;cursor:pointer;">
                        <div style="flex:1;min-width:0;">
                            <div style="font-weight:700;color:#1f2937;">${naam}</div>
                            <div style="font-size:0.8rem;color:#6b7280;">${positie} · ${bewegingen} domein${bewegingen!==1?'en':''} in beweging · ${dg}</div>
                        </div>
                        <div style="font-size:0.75rem;color:#9ca3af;white-space:nowrap;">${datum}</div>
                    </label>`;
                }).join('');
                this._caseload = caseload;
                this.updateAnalyseerBtn();
            },

            updateAnalyseerBtn() {
                const checkboxes = document.querySelectorAll('#caseloadLijst input[type=checkbox]');
                const aantalGeselecteerd = [...checkboxes].filter(c => c.checked).length;
                const btn = document.getElementById('analyseerBtn');
                if (btn) {
                    btn.disabled = aantalGeselecteerd === 0;
                    btn.style.opacity = aantalGeselecteerd > 0 ? '1' : '0.5';
                    btn.style.cursor = aantalGeselecteerd > 0 ? 'pointer' : 'default';
                    btn.textContent = aantalGeselecteerd > 0
                        ? `Analyseer ${aantalGeselecteerd} geselecteerde cliënt${aantalGeselecteerd > 1 ? 'en' : ''} →`
                        : 'Analyseer geselecteerde cliënten →';
                    // Update labels borderkleuren
                    document.querySelectorAll('#caseloadLijst label').forEach((lbl, i) => {
                        const cb = lbl.querySelector('input');
                        lbl.style.borderColor = cb && cb.checked ? '#667eea' : '#e5e7eb';
                        lbl.style.background = cb && cb.checked ? '#f5f3ff' : 'white';
                    });
                }
            },

            selecteerAlles() {
                document.querySelectorAll('#caseloadLijst input[type=checkbox]').forEach(cb => cb.checked = true);
                this.updateAnalyseerBtn();
            },

            analyseerGeselecteerd() {
                const checkboxes = [...document.querySelectorAll('#caseloadLijst input[type=checkbox]')];
                const geselecteerd = checkboxes.filter(cb => cb.checked).map(cb => this._caseload[parseInt(cb.value)]);
                if (geselecteerd.length === 0) return;

                // Laad eerste als primaire data, voeg rest toe aan casussen-stapel
                this.casussen = geselecteerd;
                this.data = geselecteerd[0];

                document.getElementById('importSection').classList.add('hidden');
                document.getElementById('analysisContainer').classList.remove('hidden');

                this.vulExecutiveSummaryMulti();
                this.vulOverzicht();
                this.berekenKosten();
                this.berekenMaatschappelijkeImpact();
                this.berekenSchaalscenarios();
                this.genereerRapportage();
            },

            vulExecutiveSummaryMulti() {
                const n = this.casussen.length;
                // Som van alle besparing over alle casussen
                let totalBesparing = 0;
                this.casussen.forEach(c => {
                    const orig = this.data;
                    this.data = c;
                    totalBesparing += this.berekenBesparingMaand() * 12;
                    this.data = orig;
                });

                const positieTeller = {};
                this.casussen.forEach(c => {
                    const p = c.netwerkpositie ? c.netwerkpositie.positie : 'onbekend';
                    positieTeller[p] = (positieTeller[p]||0) + 1;
                });
                const meestVoorkomend = Object.entries(positieTeller).sort((a,b)=>b[1]-a[1])[0];

                document.getElementById('exTitle').textContent = n === 1
                    ? (this.casussen[0].netwerkpositie ? this.casussen[0].netwerkpositie.label : '—')
                    : `${n} cliënten geanalyseerd`;

                const totalBewegingen = this.casussen.reduce((s, c) => s + (c.domeinen||[]).filter(d => d.bewegingsrichting).length, 0);
                document.getElementById('exSubtitel').textContent = `${totalBewegingen} domeinen in beweging · meest voorkomend: ${meestVoorkomend ? meestVoorkomend[0] : '—'}`;

                const el = document.getElementById('exBesparing');
                if (totalBesparing > 0) {
                    el.textContent = `€ ${totalBesparing.toLocaleString('nl-NL')}`;
                } else if (totalBesparing < 0) {
                    el.textContent = `+ € ${Math.abs(totalBesparing).toLocaleString('nl-NL')}`;
                    el.style.opacity = '0.7';
                } else {
                    el.textContent = 'n.v.t.';
                }

                document.getElementById('exN').textContent = `Op basis van ${n} casus${n>1?'sen':''}`;
                document.getElementById('exCasussenLabel').textContent = `${n} cliënt${n>1?'en':''} geselecteerd`;

                const disc = document.getElementById('exDisclaimer');
                if (disc) disc.style.display = n < 10 ? 'block' : 'none';
            },

            renderWijkDashboard() {
                const raw = localStorage.getItem('rpa_wijkdata');
                const batch = raw ? JSON.parse(raw) : [];
                const el = document.getElementById('wijkDashboardInhoud');
                if (!el) return;

                if (batch.length === 0) {
                    el.innerHTML = `<div style="background:#f8fafc;border:2px dashed #cbd5e1;border-radius:12px;padding:32px;text-align:center;">
                        <div style="font-size:2.5rem;margin-bottom:12px;">📊</div>
                        <div style="font-weight:600;color:#374151;margin-bottom:6px;">Nog geen wijkdata beschikbaar</div>
                        <div style="font-size:0.88rem;color:#6b7280;">Deel de KrachtCheck met inwoners. Aan het einde kunnen zij anoniem bijdragen aan de wijkdata.</div>
                    </div>`;
                    return;
                }

                // Domeinlijst
                const domeinen = ['financien','dagbesteding','huisvesting','huiselijk','geestelijk','lichamelijk','verslaving','adl','sociaal','participatie','justitie'];
                const domeinEmoji = {'financien':'💰','dagbesteding':'💼','huisvesting':'🏠','huiselijk':'👨‍👩‍👧','geestelijk':'🧠','lichamelijk':'💪','verslaving':'🚭','adl':'🛁','sociaal':'👥','participatie':'🤝','justitie':'⚖️'};
                const domeinNaam = {'financien':'Financiën','dagbesteding':'Dagbesteding','huisvesting':'Huisvesting','huiselijk':'Huiselijke relaties','geestelijk':'Geestelijke gezondheid','lichamelijk':'Lichamelijke gezondheid','verslaving':'Verslaving','adl':'ADL','sociaal':'Sociaal netwerk','participatie':'Participatie','justitie':'Justitie'};

                // Groepeer per wijk
                const wijken = {};
                batch.forEach(r => {
                    const w = r.wijk || 'onbekend';
                    if (!wijken[w]) wijken[w] = [];
                    wijken[w].push(r);
                });

                // Disclaimer
                const disclaimer = batch.length < 30
                    ? `<div class="alert alert-warning" style="margin-bottom:20px;"><span>⚠️</span><div><strong>Indicatief (n=${batch.length}):</strong> Minder dan 30 ingevulde checks. Trek nog geen populatieconclusies.</div></div>`
                    : `<div class="alert alert-info" style="margin-bottom:20px;"><span>📊</span><div><strong>${batch.length} ingevulde checks</strong> — betrouwbaar genoeg voor een eerste wijkdiagnose.</div></div>`;

                let html = disclaimer;

                // Per wijk: staafdiagram per domein
                Object.entries(wijken).forEach(([wijk, records]) => {
                    html += `<div style="background:white;border-radius:12px;border:1px solid #e5e7eb;padding:20px;margin-bottom:20px;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:8px;">
                            <h3 style="color:#1f2937;margin:0;">📍 ${wijk} <span style="font-size:0.82rem;font-weight:400;color:#6b7280;">(${records.length} ${records.length===1?'persoon':'personen'})</span></h3>
                        </div>
                        <div style="display:flex;flex-direction:column;gap:10px;">`;

                    domeinen.forEach(id => {
                        const metScore = records.filter(r => r.scores[id]);
                        if (metScore.length === 0) return;
                        const goed = metScore.filter(r => r.scores[id]==='goed').length;
                        const beter = metScore.filter(r => r.scores[id]==='beter').length;
                        const actie = metScore.filter(r => r.scores[id]==='actie').length;
                        const n = metScore.length;
                        const pctGoed = Math.round(goed/n*100);
                        const pctBeter = Math.round(beter/n*100);
                        const pctActie = Math.round(actie/n*100);

                        html += `<div>
                            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                                <span style="font-size:0.88rem;font-weight:600;">${domeinEmoji[id]} ${domeinNaam[id]}</span>
                                <span style="font-size:0.75rem;color:#9ca3af;">${actie>0?`🔴 ${pctActie}% actie`:''}${beter>0?` 🟡 ${pctBeter}% aandacht`:''}${goed>0?` 🟢 ${pctGoed}% goed`:''}</span>
                            </div>
                            <div style="display:flex;border-radius:6px;overflow:hidden;height:18px;">
                                ${actie>0?`<div style="flex:${actie};background:#ef4444;" title="${actie} actie nodig"></div>`:''}
                                ${beter>0?`<div style="flex:${beter};background:#f59e0b;" title="${beter} kan beter"></div>`:''}
                                ${goed>0?`<div style="flex:${goed};background:#22c55e;" title="${goed} gaat goed"></div>`:''}
                            </div>
                        </div>`;
                    });

                    html += `</div></div>`;
                });

                el.innerHTML = html;
            },

            downloadWijkdata() {
                const raw = localStorage.getItem('rpa_wijkdata');
                const batch = raw ? JSON.parse(raw) : [];
                if (batch.length === 0) { alert('Geen wijkdata beschikbaar.'); return; }

                const domeinen = ['financien','dagbesteding','huisvesting','huiselijk','geestelijk','lichamelijk','verslaving','adl','sociaal','participatie','justitie'];
                const header = ['tijdstip','wijk','leeftijd',...domeinen].join(',');
                const rows = batch.map(r => [
                    r.tijdstip, r.wijk, r.leeftijdscategorie,
                    ...domeinen.map(d => r.scores[d] || '')
                ].join(','));
                const csv = [header,...rows].join('\n');

                const blob = new Blob([csv], {type:'text/csv'});
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `wijkdata-${new Date().toISOString().split('T')[0]}.csv`;
                a.click();
            },

            verwijderWijkdata() {
                if (!confirm('Wijkdata verwijderen? Dit verwijdert alle anonieme KrachtCheck scores.')) return;
                localStorage.removeItem('rpa_wijkdata');
                this.renderWijkDashboard();
            },

            verwijderCaseload() {
                if (!confirm(`Weet je zeker dat je de caseload wilt verwijderen?\n\nDe analyses worden uit de browser verwijderd.`)) return;
                localStorage.removeItem('rpa_caseload');
                localStorage.removeItem('rpa_niveau3_import');
                localStorage.removeItem('rpa_niveau3_datum');
                document.getElementById('caseloadBlok').style.display = 'none';
                document.getElementById('geenCaseloadBlok').style.display = 'block';
            },

            exportWethouderA4() {
                if (!this.data) { alert('Laad eerst een caseload.'); return; }
                const besparing = document.getElementById('exBesparing')?.textContent || '—';
                const n = this.casussen.length;
                const doelgroepen = [...new Set(this.casussen.flatMap(c => c.metadata.doelgroepen||[]))].join(', ') || 'Divers';
                const totalBewegingen = this.casussen.reduce((s,c) => s+(c.domeinen||[]).filter(d=>d.bewegingsrichting).length, 0);
                const vandaag = new Date().toLocaleDateString('nl-NL',{day:'numeric',month:'long',year:'numeric'});

                // Top 3 domeinen met meeste beweging
                const domeinTeller = {};
                this.casussen.forEach(c => (c.domeinen||[]).filter(d=>d.bewegingsrichting).forEach(d => { domeinTeller[d.naam]=(domeinTeller[d.naam]||0)+1; }));
                const top3 = Object.entries(domeinTeller).sort((a,b)=>b[1]-a[1]).slice(0,3);

                const w = window.open('','_blank');
                w.document.write(`<!DOCTYPE html><html lang="nl"><head><meta charset="UTF-8">
                    <title>Bestuurlijke notitie — RPA</title>
                    <style>
                        body { font-family: Georgia, serif; max-width:680px; margin:40px auto; padding:0 32px; color:#1f2937; font-size:14pt; line-height:1.7; }
                        h1 { font-size:20pt; color:#065f46; margin-bottom:4px; }
                        .meta { font-size:10pt; color:#6b7280; margin-bottom:24px; }
                        .kader { background:#f0fdf4; border-left:4px solid #059669; padding:16px 20px; border-radius:0 8px 8px 0; margin:20px 0; }
                        .kader .getal { font-size:28pt; font-weight:800; color:#065f46; line-height:1.1; }
                        .kader .label { font-size:10pt; color:#6b7280; }
                        h2 { font-size:13pt; color:#374151; margin-top:24px; border-bottom:1px solid #e5e7eb; padding-bottom:4px; }
                        ul { margin-left:20px; }
                        .disclaimer { font-size:9pt; color:#9ca3af; margin-top:32px; border-top:1px solid #e5e7eb; padding-top:12px; }
                        .no-print { background:#fef9c3; padding:8px 12px; border-radius:6px; font-size:10pt; margin-bottom:20px; font-family:sans-serif; }
                        @media print { .no-print { display:none; } }
                    </style></head><body>
                    <div class="no-print">💡 Druk <strong>Ctrl+P</strong> om op te slaan als PDF.</div>
                    <h1>Bestuurlijke notitie — Positionele aanpak netwerken</h1>
                    <div class="meta">${vandaag} · RPA Strategische Analyse · ${n} casus${n>1?'sen':''}</div>
                    <div class="kader">
                        <div class="label">Geschatte besparing op jaarbasis</div>
                        <div class="getal">${besparing}</div>
                        <div class="label">Op basis van ${n} geanalyseerde cliënten · doelgroepen: ${doelgroepen}</div>
                    </div>
                    <h2>Wat speelt er?</h2>
                    <p>In de geanalyseerde caseload zijn <strong>${totalBewegingen} domeinen</strong> geïdentificeerd waar een positionele verschuiving mogelijk is. De drie meest voorkomende gebieden:</p>
                    <ul>${top3.map(([naam,n])=>`<li><strong>${naam}</strong> — ${n} cliënten</li>`).join('')}</ul>
                    <h2>Wat is de aanpak?</h2>
                    <p>Door formele ondersteuning gedeeltelijk te verschuiven naar informele en collectieve draaglagen — zonder afbouw van kwaliteit — ontstaat een duurzamer en proportioneler ondersteuningsaanbod. De RPA Positionele Analyse begeleidt professionals bij deze bewuste keuze per cliënt.</p>
                    <h2>Wat vraagt dit?</h2>
                    <ul>
                        <li>Structurele inzet van de positionele methodiek in wijkteams</li>
                        <li>Investering in collectief aanbod als alternatief voor 1-op-1 begeleiding</li>
                        <li>Monitoring via de KrachtCheck (Niveau 1) voor vroeg-signalering</li>
                    </ul>
                    <div class="disclaimer">
                        ⚠️ Indicatieve berekening. Gebaseerd op ${n} casus${n>1?'sen':''}. 
                        ${n<10?'Bij minder dan 10 casussen zijn populatieconclusies niet verantwoord.':''}
                        Kostenberekening op basis van gemiddelde draaglaagkosten. Gegenereerd met RPA Suite · SIJN methodiek.
                    </div>
                </body></html>`);
                w.document.close();
            },

            vulExecutiveSummary() {
                const n = this.casussen.length;
                const doelgroepen = this.data.metadata.doelgroepen || [];
                const bewegingen = (this.data.domeinen||[]).filter(d => d.bewegingsrichting);
                const besparingMaand = this.berekenBesparingMaand();
                const besparingJaar = besparingMaand * 12;

                // Titel
                const netwerkLabel = this.data.netwerkpositie ? this.data.netwerkpositie.label : '—';
                document.getElementById('exTitle').textContent = netwerkLabel;

                // Subtitel
                const richting = bewegingen.length > 0
                    ? `${bewegingen.length} domein${bewegingen.length > 1 ? 'en' : ''} in beweging`
                    : 'Geen bewegingen geregistreerd';
                const dg = doelgroepen.length > 0 ? ` · ${doelgroepen.join(', ')}` : '';
                document.getElementById('exSubtitel').textContent = richting + dg;

                // Besparing
                const el = document.getElementById('exBesparing');
                if (besparingJaar > 0) {
                    el.textContent = `€ ${besparingJaar.toLocaleString('nl-NL')}`;
                    el.style.color = 'white';
                } else if (besparingJaar < 0) {
                    el.textContent = `+ € ${Math.abs(besparingJaar).toLocaleString('nl-NL')}`;
                    el.style.opacity = '0.7';
                } else {
                    el.textContent = 'n.v.t.';
                }

                // N casussen
                document.getElementById('exN').textContent = n > 1 ? `Op basis van ${n} casussen` : 'Op basis van 1 casus';
                document.getElementById('exCasussenLabel').textContent = `${n} casus${n > 1 ? 'sen' : ''} geladen`;

                // Disclaimer
                const disc = document.getElementById('exDisclaimer');
                if (disc) disc.style.display = n < 10 ? 'block' : 'none';
            },

            berekenBesparingMaand() {
                if (!this.data || !this.data.domeinen) return 0;
                let huidig = 0, nieuw = 0;
                this.data.domeinen.forEach(d => {
                    const hl = d.huidigeDraaglagen || [];
                    const nl = d.gewensteDraaglagen || hl;
                    const kostenVoor = hl.includes('formeel') ? this.kosten.formeel : hl.includes('collectief') ? this.kosten.collectief : 0;
                    const kostenNa = nl.includes('formeel') ? this.kosten.formeel : nl.includes('collectief') ? this.kosten.collectief : 0;
                    huidig += kostenVoor;
                    nieuw += kostenNa;
                });
                return huidig - nieuw;
            },

            voegCasusToe() {
                document.getElementById('extraCasusInput').click();
            },

            laadExtraCasus(event) {
                const file = event.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const data = JSON.parse(e.target.result);
                        if (!data.metadata || !data.domeinen) { alert('Ongeldig bestand'); return; }
                        this.casussen.push(data);
                        this.vulExecutiveSummary();
                        alert(`✅ Casus toegevoegd. Totaal: ${this.casussen.length} casussen.`);
                    } catch(err) { alert('Fout: ' + err.message); }
                };
                reader.readAsText(file);
                event.target.value = '';
            },

            laadVanuitNiveau2() {
                const raw = localStorage.getItem('rpa_niveau3_import');
                if (!raw) return;
                try {
                    const data = JSON.parse(raw);
                    this.loadData(data);
                } catch(e) {
                    alert('Fout bij laden: ' + e.message);
                }
            },

            handleFile(event) {
                const file = event.target.files[0];
                if (file) this.processFile(file);
            },

            processFile(file) {
                if (!file.name.endsWith('.json')) {
                    alert('❌ Alleen JSON bestanden zijn toegestaan');
                    return;
                }

                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const data = JSON.parse(e.target.result);
                        this.loadData(data);
                    } catch (err) {
                        alert('❌ Fout bij het lezen van het bestand:\n' + err.message);
                    }
                };
                reader.readAsText(file);
            },

            loadData(data) {
                if (!data.metadata || !data.domeinen) {
                    alert('❌ Ongeldig bestand. Dit lijkt geen RPA export te zijn.');
                    return;
                }

                this.data = data;
                // Voeg toe aan casussen-stapel als nog niet aanwezig
                if (!this.casussen.some(c => c.metadata && c.metadata.exportDatum === data.metadata.exportDatum)) {
                    this.casussen.push(data);
                }

                // Toon analyse container
                document.getElementById('importSection').classList.add('hidden');
                document.getElementById('analysisContainer').classList.remove('hidden');

                // Vul executive summary
                this.vulExecutiveSummary();

                // Vul overzicht
                this.vulOverzicht();
                this.berekenKosten();
                this.berekenMaatschappelijkeImpact();
                this.berekenSchaalscenarios();
                this.genereerRapportage();

                console.log('Data geladen:', data);
            },

            vulOverzicht() {
                const domeinenMetBeweging = this.data.domeinen.filter(d => d.bewegingsrichting);
                
                document.getElementById('metricDomeinen').textContent = domeinenMetBeweging.length;
                
                const netwerk = this.data.netwerkpositie;
                document.getElementById('metricNetwerk').textContent = netwerk.label || 'Onbekend';
                document.getElementById('metricNetwerkDesc').textContent = netwerk.beschrijving || '';

                const doelgroepen = this.data.metadata.doelgroepen || [];
                const doelgroepLabels = {
                    'ggz': '🧠 GGZ',
                    'jongeren': '👤 Jongeren',
                    'mantelzorgers': '🤝 Mantelzorgers',
                    'ouderen': '👴 Ouderen',
                    'multiproblem': '🔄 Multi-problematiek',
                    'sociaalmaatschappelijk': '🏘️ Sociaal-maatschappelijk'
                };
                document.getElementById('metricDoelgroep').textContent = 
                    doelgroepen.map(d => doelgroepLabels[d] || d).join(', ') || 'Geen';

                // Bewegingen overzicht
                const container = document.getElementById('bewegingenOverzicht');
                container.innerHTML = domeinenMetBeweging.map(d => {
                    const huidig = d.huidigeDraaglagen.map(dr => 
                        `<span class="draaglaag-badge draaglaag-${dr}">${dr}</span>`
                    ).join('');
                    
                    const gewenst = d.gewensteDraaglagen.map(dr => 
                        `<span class="draaglaag-badge draaglaag-${dr}">${dr}</span>`
                    ).join('');

                    const bewegingLabels = {
                        'stabiliseren': 'Stabiliseren',
                        'vervangen': 'Vervangen',
                        'opschalen': 'Opschalen',
                        'afschalen': 'Afschalen',
                        'stoppen': 'Stoppen'
                    };

                    return `
                        <div class="domain-card">
                            <div class="domain-header">
                                <span style="font-size: 2rem;">${d.emoji}</span>
                                <h3>${d.naam}</h3>
                            </div>
                            <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 10px;">
                                <div>
                                    <div style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 5px;">Huidig:</div>
                                    ${huidig}
                                </div>
                                <span class="beweging-arrow">→</span>
                                <div>
                                    <div style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 5px;">Gewenst:</div>
                                    ${gewenst}
                                </div>
                            </div>
                            <div style="margin-top: 12px; padding: 10px; background: var(--bg); border-radius: 6px;">
                                <strong>Beweging:</strong> ${bewegingLabels[d.bewegingsrichting] || d.bewegingsrichting}
                            </div>
                        </div>
                    `;
                }).join('');
            },

            berekenKosten() {
                // Haal kosten aannames op
                this.kosten.informeel = parseFloat(document.getElementById('kostenInformeel')?.value || 0);
                this.kosten.collectief = parseFloat(document.getElementById('kostenCollectief')?.value || 150);
                this.kosten.formeel = parseFloat(document.getElementById('kostenFormeel')?.value || 800);

                let totaalHuidig = 0;
                let totaalNieuw = 0;

                const domeinenMetBeweging = this.data.domeinen.filter(d => d.bewegingsrichting);
                
                const container = document.getElementById('kostenPerDomein');
                container.innerHTML = domeinenMetBeweging.map(d => {
                    // Bereken huidige kosten
                    const huidigKosten = d.huidigeDraaglagen.reduce((sum, draag) => {
                        return sum + (this.kosten[draag] || 0);
                    }, 0);

                    // Bereken nieuwe kosten
                    const nieuwKosten = d.gewensteDraaglagen.reduce((sum, draag) => {
                        return sum + (this.kosten[draag] || 0);
                    }, 0);

                    totaalHuidig += huidigKosten;
                    totaalNieuw += nieuwKosten;

                    const verschil = nieuwKosten - huidigKosten;
                    const verschilKleur = verschil < 0 ? 'var(--success)' : verschil > 0 ? 'var(--danger)' : 'var(--text-light)';

                    return `
                        <div class="domain-card">
                            <div class="domain-header">
                                <span style="font-size: 1.5rem;">${d.emoji}</span>
                                <h3 style="font-size: 1rem;">${d.naam}</h3>
                            </div>
                            <div class="cost-breakdown">
                                <div class="cost-item">
                                    <span>Huidig (${d.huidigeDraaglagen.join(', ')})</span>
                                    <span>€ ${huidigKosten.toFixed(2)}</span>
                                </div>
                                <div class="cost-item">
                                    <span>Nieuw (${d.gewensteDraaglagen.join(', ')})</span>
                                    <span>€ ${nieuwKosten.toFixed(2)}</span>
                                </div>
                                <div class="cost-item" style="color: ${verschilKleur};">
                                    <span>Verschil</span>
                                    <span>${verschil >= 0 ? '+' : ''}€ ${verschil.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');

                // Totalen
                document.getElementById('totaalHuidig').textContent = totaalHuidig.toFixed(2);
                document.getElementById('totaalHuidigJaar').textContent = (totaalHuidig * 12).toFixed(0);
                document.getElementById('totaalNieuw').textContent = totaalNieuw.toFixed(2);
                document.getElementById('totaalNieuwJaar').textContent = (totaalNieuw * 12).toFixed(0);
                
                const verschil = totaalNieuw - totaalHuidig;
                const verschilElement = document.getElementById('verschil');
                const verschilJaarElement = document.getElementById('verschilJaar');
                const impactKleur = document.getElementById('impactKleur');
                
                verschilElement.textContent = Math.abs(verschil).toFixed(2);
                verschilJaarElement.textContent = Math.abs(verschil * 12).toFixed(0);
                
                if (verschil < 0) {
                    impactKleur.style.color = 'var(--success)';
                    verschilElement.parentElement.innerHTML = `€ ${Math.abs(verschil).toFixed(2)} <span style="font-size: 0.8rem;">besparing</span>`;
                } else if (verschil > 0) {
                    impactKleur.style.color = 'var(--danger)';
                    verschilElement.parentElement.innerHTML = `€ ${verschil.toFixed(2)} <span style="font-size: 0.8rem;">extra kosten</span>`;
                } else {
                    impactKleur.style.color = 'var(--text-light)';
                    verschilElement.parentElement.innerHTML = `€ 0 <span style="font-size: 0.8rem;">geen verschil</span>`;
                }

                // Investeringskosten
                const ekc = parseFloat(document.getElementById('investEkc')?.value || 0);
                const uren = parseFloat(document.getElementById('investTijd')?.value || 0);
                const investMaand = (ekc / 12) + (uren * 75);
                const investEl = document.getElementById('investTotaal');
                if (investEl) {
                    if (investMaand > 0) {
                        investEl.textContent = `Totale investering: ≈ €${investMaand.toFixed(0)}/maand (€${(investMaand*12).toFixed(0)}/jaar)`;
                    } else {
                        investEl.textContent = 'Vul investeringskosten in voor een eerlijk totaalplaatje.';
                    }
                }
                // Netto besparing (besparing min investering)
                const nettoBesparing = Math.abs(verschil) - investMaand;
                this.nettoBesparing = nettoBesparing;

                // Sla op voor schaalscenario's
                this.kostenVerschil = verschil;
            },

            berekenMaatschappelijkeImpact() {
                const domeinenMetBeweging = this.data.domeinen.filter(d => d.bewegingsrichting);
                
                // Bereken scores per dimensie
                const scores = {
                    preventie: 0,
                    participatie: 0,
                    zelfredzaamheid: 0,
                    netwerkversterking: 0,
                    duurzaamheid: 0,
                    proportionaliteit: 0
                };

                domeinenMetBeweging.forEach(d => {
                    // Beweging naar informeel/collectief = hogere impact
                    const naarInformeel = d.gewensteDraaglagen.includes('informeel') && !d.huidigeDraaglagen.includes('informeel');
                    const naarCollectief = d.gewensteDraaglagen.includes('collectief') && !d.huidigeDraaglagen.includes('collectief');
                    const wegVanFormeel = d.huidigeDraaglagen.includes('formeel') && !d.gewensteDraaglagen.includes('formeel');

                    if (naarInformeel) {
                        scores.participatie += 3;
                        scores.netwerkversterking += 3;
                        scores.duurzaamheid += 2;
                    }

                    if (naarCollectief) {
                        scores.participatie += 2;
                        scores.preventie += 2;
                        scores.duurzaamheid += 2;
                    }

                    if (wegVanFormeel) {
                        scores.zelfredzaamheid += 2;
                        scores.proportionaliteit += 2;
                    }

                    // Plan/reflectie scores (nieuw datamodel)
                    if (d.duur && d.duur !== 'n.v.t.') scores.duurzaamheid += 1;
                    if (d.heeftConcreetPlan) scores.duurzaamheid += 1;
                    if (d.planKlopt === 'ja') scores.proportionaliteit += 2;
                    if (d.planKlopt === 'nee') scores.proportionaliteit += 3;
                    if (d.heeftVerantwoordelijke) scores.zelfredzaamheid += 1;
                });

                // Normaliseer naar 0-10
                const maxScore = domeinenMetBeweging.length * 3;
                Object.keys(scores).forEach(key => {
                    scores[key] = Math.min(10, (scores[key] / maxScore) * 10);
                });

                // Render impact matrix
                const labels = {
                    preventie: '🛡️ Preventie van escalatie',
                    participatie: '👥 Maatschappelijke participatie',
                    zelfredzaamheid: '💪 Zelfredzaamheid',
                    netwerkversterking: '🤝 Netwerkversterking',
                    duurzaamheid: '🌱 Duurzaamheid oplossing',
                    proportionaliteit: '⚖️ Proportionaliteit'
                };

                const container = document.getElementById('impactMatrix');
                container.innerHTML = Object.keys(scores).map(key => {
                    const score = scores[key].toFixed(1);
                    const kleur = score >= 7 ? '' : score >= 4 ? 'medium' : 'low';
                    return `
                        <div class="impact-item">
                            <h4>${labels[key]}</h4>
                            <div class="impact-score ${kleur}">${score}/10</div>
                            <p style="font-size: 0.85rem; color: var(--text-light);">
                                ${this.getImpactToelichting(key, score)}
                            </p>
                        </div>
                    `;
                }).join('');

                // Render radar chart
                this.renderImpactRadar(scores, labels);

                // Sla op voor rapportage
                this.impactScores = scores;
            },

            getImpactToelichting(dimensie, score) {
                if (score >= 7) return 'Hoge impact verwacht';
                if (score >= 4) return 'Matige impact verwacht';
                return 'Lage impact verwacht';
            },

            renderImpactRadar(scores, labels) {
                const ctx = document.getElementById('impactRadar');
                if (!ctx) return;

                if (this.radarChart) this.radarChart.destroy();

                this.radarChart = new Chart(ctx, {
                    type: 'radar',
                    data: {
                        labels: Object.keys(scores).map(k => labels[k]),
                        datasets: [{
                            label: 'Maatschappelijke Impact',
                            data: Object.values(scores),
                            backgroundColor: 'rgba(102, 126, 234, 0.2)',
                            borderColor: 'rgba(102, 126, 234, 1)',
                            borderWidth: 2,
                            pointBackgroundColor: 'rgba(102, 126, 234, 1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(102, 126, 234, 1)'
                        }]
                    },
                    options: {
                        scales: {
                            r: {
                                min: 0,
                                max: 10,
                                ticks: { stepSize: 2 }
                            }
                        },
                        plugins: {
                            legend: { display: false }
                        }
                    }
                });
            },

            berekenSchaalscenarios() {
                const verschilPerJaar = (this.kostenVerschil || 0) * 12;

                document.getElementById('schaal1jaar').textContent = Math.abs(verschilPerJaar).toFixed(0);
                document.getElementById('schaal10jaar').textContent = Math.abs(verschilPerJaar * 10).toFixed(0);
                document.getElementById('schaal50jaar').textContent = Math.abs(verschilPerJaar * 50).toFixed(0);
                document.getElementById('schaal100jaar').textContent = Math.abs(verschilPerJaar * 100).toFixed(0);

                // Render chart
                this.renderSchaalChart();
            },

            renderSchaalChart() {
                const ctx = document.getElementById('schaalChart');
                if (!ctx) return;

                if (this.schaalChart) this.schaalChart.destroy();

                const verschilPerJaar = (this.kostenVerschil || 0) * 12;

                this.schaalChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['1 persoon', '10 personen', '50 personen', '100 personen'],
                        datasets: [{
                            label: 'Besparing per jaar (€)',
                            data: [
                                Math.abs(verschilPerJaar * 1),
                                Math.abs(verschilPerJaar * 10),
                                Math.abs(verschilPerJaar * 50),
                                Math.abs(verschilPerJaar * 100)
                            ],
                            backgroundColor: [
                                'rgba(102, 126, 234, 0.6)',
                                'rgba(102, 126, 234, 0.7)',
                                'rgba(102, 126, 234, 0.8)',
                                'rgba(102, 126, 234, 0.9)'
                            ],
                            borderColor: 'rgba(102, 126, 234, 1)',
                            borderWidth: 2
                        }]
                    },
                    options: {
                        scales: {
                            y: { beginAtZero: true }
                        },
                        plugins: {
                            legend: { display: false }
                        }
                    }
                });
            },

            genereerRapportage() {
                const domeinenMetBeweging = this.data.domeinen.filter(d => d.bewegingsrichting).length;
                const totaalHuidig = parseFloat(document.getElementById('totaalHuidig')?.textContent || 0);
                const totaalNieuw = parseFloat(document.getElementById('totaalNieuw')?.textContent || 0);
                const verschil = totaalNieuw - totaalHuidig;
                const verschilJaar = verschil * 12;

                const rapport = `
                    <div style="background: white; padding: 25px; border-radius: 12px; margin-bottom: 20px;">
                        <h3 style="color: var(--primary); margin-bottom: 15px;">Samenvatting</h3>
                        <p style="line-height: 1.8; color: var(--text);">
                            Deze strategische analyse is gebaseerd op een RPA Positionele Analyse (Niveau 2) uitgevoerd op
                            <strong>${new Date(this.data.metadata.exportDatum).toLocaleDateString('nl-NL')}</strong>.
                        </p>
                        <p style="line-height: 1.8; color: var(--text); margin-top: 10px;">
                            Er zijn <strong>${domeinenMetBeweging}</strong> domeinen waarbij een positionele beweging is voorgesteld.
                            De doelgroep(en): <strong>${this.data.metadata.doelgroepen.join(', ') || 'Algemeen'}</strong>.
                        </p>
                    </div>

                    <div style="background: white; padding: 25px; border-radius: 12px; margin-bottom: 20px;">
                        <h3 style="color: var(--primary); margin-bottom: 15px;">💰 Kosten-impact</h3>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="border-bottom: 2px solid var(--border);">
                                <td style="padding: 12px 0; font-weight: 600;">Huidige maandkosten</td>
                                <td style="padding: 12px 0; text-align: right; color: var(--danger);">€ ${totaalHuidig.toFixed(2)}</td>
                            </tr>
                            <tr style="border-bottom: 2px solid var(--border);">
                                <td style="padding: 12px 0; font-weight: 600;">Nieuwe maandkosten</td>
                                <td style="padding: 12px 0; text-align: right; color: var(--warning);">€ ${totaalNieuw.toFixed(2)}</td>
                            </tr>
                            <tr style="border-bottom: 3px solid var(--primary);">
                                <td style="padding: 12px 0; font-weight: 700; font-size: 1.1rem;">Impact per jaar</td>
                                <td style="padding: 12px 0; text-align: right; font-weight: 700; font-size: 1.1rem; color: ${verschil < 0 ? 'var(--success)' : 'var(--danger)'};">
                                    ${verschil < 0 ? '-' : '+'}€ ${Math.abs(verschilJaar).toFixed(0)}
                                </td>
                            </tr>
                        </table>
                        <p style="margin-top: 15px; font-size: 0.9rem; color: var(--text-light); font-style: italic;">
                            ${verschil < 0 
                                ? `✅ Potentiële besparing van € ${Math.abs(verschilJaar).toFixed(0)} per jaar.`
                                : verschil > 0 
                                ? `⚠️ Extra kosten van € ${verschilJaar.toFixed(0)} per jaar. Dit kan gerechtvaardigd zijn als het leidt tot betere uitkomsten.`
                                : '➖ Geen kostenimpact, wel verandering in ondersteuningsstructuur.'}
                        </p>
                    </div>

                    <div style="background: white; padding: 25px; border-radius: 12px; margin-bottom: 20px;">
                        <h3 style="color: var(--primary); margin-bottom: 15px;">🌍 Maatschappelijke impact</h3>
                        <p style="line-height: 1.8; color: var(--text);">
                            De voorgestelde positionele bewegingen scoren gemiddeld:
                        </p>
                        <ul style="margin: 15px 0; line-height: 2; color: var(--text);">
                            ${Object.keys(this.impactScores || {}).map(key => {
                                const score = (this.impactScores[key] || 0).toFixed(1);
                                const labels = {
                                    preventie: 'Preventie',
                                    participatie: 'Participatie',
                                    zelfredzaamheid: 'Zelfredzaamheid',
                                    netwerkversterking: 'Netwerkversterking',
                                    duurzaamheid: 'Duurzaamheid',
                                    proportionaliteit: 'Proportionaliteit'
                                };
                                return `<li><strong>${labels[key]}:</strong> ${score}/10</li>`;
                            }).join('')}
                        </ul>
                    </div>

                    <div style="background: white; padding: 25px; border-radius: 12px;">
                        <h3 style="color: var(--primary); margin-bottom: 15px;">📈 Schaaleffect (100 personen)</h3>
                        <p style="line-height: 1.8; color: var(--text);">
                            Als deze positionele beweging wordt toegepast op <strong>100 vergelijkbare cliënten</strong>:
                        </p>
                        <ul style="margin: 15px 0; line-height: 2; color: var(--text);">
                            <li>Totale impact: <strong>${verschil < 0 ? '-' : '+'}€ ${Math.abs(verschilJaar * 100).toFixed(0)}</strong> per jaar</li>
                            <li>Preventie-effect: <strong>Structureel</strong></li>
                            <li>Wijkniveau: <strong>Gemeentelijk systeemeffect</strong></li>
                        </ul>
                        <p style="margin-top: 15px; padding: 15px; background: #e0f2fe; border-left: 4px solid #0284c7; border-radius: 6px; color: #075985; line-height: 1.6;">
                            💡 <strong>Conclusie:</strong> Bij opschaling doorbreek je het systeemplafond en creëer je basis voor strategische investeringen in collectieve infrastructuur.
                        </p>
                    </div>
                `;

                document.getElementById('rapportageInhoud').innerHTML = rapport;
            },

            showScreen(num) {
                document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
                document.getElementById(`screen${num}`).classList.add('active');
                this.currentScreen = num;
                window.scrollTo({ top: 0, behavior: 'smooth' });
            },

            showScenario(id) {
                document.querySelectorAll('.scenario-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.scenario-content').forEach(c => c.classList.remove('active'));
                
                event.target.classList.add('active');
                document.getElementById(`scenario-${id}`).classList.add('active');
            },

            downloadPDF() {
                const inhoud = document.getElementById('rapportageInhoud');
                if (!inhoud || !inhoud.innerHTML.trim()) {
                    alert('Genereer eerst de rapportage (stap 5).');
                    return;
                }
                const vandaag = new Date().toLocaleDateString('nl-NL',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
                const besparing = document.getElementById('exBesparing') ? document.getElementById('exBesparing').textContent : '—';
                const w = window.open('','_blank');
                w.document.write(`<!DOCTYPE html><html lang="nl"><head>
                    <meta charset="UTF-8">
                    <title>Strategische Analyse — RPA</title>
                    <style>
                        body { font-family: -apple-system,sans-serif; max-width:780px; margin:40px auto; padding:0 24px; color:#1f2937; }
                        h1 { color:#065f46; } h2 { color:#374151; border-bottom:2px solid #e5e7eb; padding-bottom:6px; margin-top:28px; }
                        .banner { background:linear-gradient(135deg,#065f46,#059669); color:white; border-radius:12px; padding:20px 24px; margin-bottom:28px; }
                        .banner h2 { color:white; border:none; margin-top:0; }
                        .no-print { background:#fef9c3; padding:10px 16px; border-radius:8px; margin-bottom:20px; font-size:0.88rem; }
                        @media print { .no-print { display:none; } }
                    </style>
                </head><body>
                    <div class="no-print">💡 Druk <strong>Ctrl+P</strong> om op te slaan als PDF.</div>
                    <div class="banner">
                        <h2>📊 Strategische Netwerkimpactanalyse</h2>
                        <div>${vandaag} · Verwachte besparing/jaar: <strong>${besparing}</strong></div>
                        <div style="font-size:0.8rem;opacity:0.75;margin-top:4px;">${this.casussen.length} casus${this.casussen.length>1?'sen':''} · RPA Positionele Analyse</div>
                    </div>
                    ${inhoud.innerHTML}
                    <div style="margin-top:32px;font-size:0.75rem;color:#9ca3af;text-align:center;">Gegenereerd met RPA Strategische Analyse · SIJN methodiek</div>
                </body></html>`);
                w.document.close();
            },

            resetImport() {
                if (confirm('Weet je zeker dat je een nieuw bestand wilt importeren?\n\nDe huidige analyse gaat verloren.')) {
                    document.getElementById('analysisContainer').classList.add('hidden');
                    document.getElementById('importSection').classList.remove('hidden');
                    document.getElementById('fileInput').value = '';
                    this.data = null;
                }
            }
        };

        document.addEventListener('DOMContentLoaded', () => {
            // TOEGANGSCODE CHECK (N3 — professionals + beleidsmakers)
            (function checkToegangN3() {
                const params = new URLSearchParams(window.location.search);
                const urlCode = params.get('code');
                if (urlCode) { sessionStorage.setItem('rpa_n3_toegang', urlCode.toUpperCase()); }
                const stored = sessionStorage.getItem('rpa_n3_toegang');
                if (stored === 'SIJN2026' || stored === 'BELEID2026') {
                    app.init();
                    app.checkNiveau2Import();
                    return;
                }
                // Bouw overlay
                const overlay = document.createElement('div');
                overlay.id = 'toegangOverlay';
                overlay.style.cssText = 'position:fixed;inset:0;background:rgba(17,24,39,0.92);z-index:99999;display:flex;align-items:center;justify-content:center;padding:20px;';
                overlay.innerHTML = `
                    <div style="background:white;border-radius:20px;padding:36px 32px;max-width:420px;width:100%;text-align:center;box-shadow:0 24px 64px rgba(0,0,0,0.3);">
                        <div style="font-size:2.5rem;margin-bottom:12px;">🔐</div>
                        <h2 style="color:#1f2937;font-size:1.4rem;margin-bottom:6px;">Niveau 3 — Strategische analyse</h2>
                        <p style="color:#6b7280;font-size:0.9rem;margin-bottom:24px;">Toegang voor beleidsmakers en geautoriseerde professionals.</p>
                        <input id="toegangsInput" type="password" placeholder="Voer toegangscode in"
                            style="width:100%;padding:12px 16px;border:2px solid #e5e7eb;border-radius:10px;font-size:1rem;margin-bottom:12px;text-align:center;letter-spacing:2px;"
                            onkeydown="if(event.key==='Enter')submitToegangN3()">
                        <div id="toegangFout" style="display:none;color:#dc2626;font-size:0.85rem;margin-bottom:10px;">❌ Onjuiste code. Vraag de code op bij je organisatie of beleidscoördinator.</div>
                        <button onclick="submitToegangN3()"
                            style="width:100%;background:#667eea;color:white;border:none;border-radius:10px;padding:13px;font-size:1rem;font-weight:700;cursor:pointer;">
                            Toegang →
                        </button>
                        <p style="font-size:0.75rem;color:#9ca3af;margin-top:16px;">
                            Professionals: gebruik code <strong>SIJN2026</strong><br>
                            Beleidsmakers: gebruik code <strong>BELEID2026</strong>
                        </p>
                    </div>`;
                document.body.appendChild(overlay);
                setTimeout(() => document.getElementById('toegangsInput')?.focus(), 100);
            })();
        });

        function submitToegangN3() {
            const code = document.getElementById('toegangsInput')?.value.trim().toUpperCase();
            if (code === 'SIJN2026' || code === 'BELEID2026') {
                sessionStorage.setItem('rpa_n3_toegang', code);
                document.getElementById('toegangOverlay')?.remove();
                app.init();
                app.checkNiveau2Import();
            } else {
                document.getElementById('toegangFout').style.display = 'block';
                document.getElementById('toegangsInput').style.borderColor = '#dc2626';
            }
        }

// Expose app API expected by inline handlers.
window.app = app;
window.submitToegangN3 = submitToegangN3;
