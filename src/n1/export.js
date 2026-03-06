import { KEYS } from '../shared/utils/storageKeys.js';
import { getJson, setJson } from '../shared/utils/storage.js';
import { state } from './state.js';
import { domains } from './domains.js';

export function saveToLocalStorage() {
  setJson(KEYS.RPA_NIVEAU1, {
    answers: state.answers,
    ageCategory: state.ageCategory,
  });
}

export function exportNaarN3() {
  const wijk = (document.getElementById('wijkNaam')?.value || '').trim() || 'onbekend';
  const record = {
    tijdstip: new Date().toISOString(),
    wijk,
    leeftijdscategorie: state.ageCategory || 'onbekend',
    scores: {},
  };

  domains.forEach((d) => {
    record.scores[d.id] = state.answers[d.id] || null;
  });

  const batch = getJson(KEYS.RPA_WIJKDATA, []);
  const limiet = Date.now() - (180 * 24 * 60 * 60 * 1000);
  const gefilterd = (Array.isArray(batch) ? batch : []).filter(
    (r) => new Date(r.tijdstip).getTime() > limiet
  );
  gefilterd.push(record);
  setJson(KEYS.RPA_WIJKDATA, gefilterd);

  const optIn = document.getElementById('wijkOptIn');
  optIn?.querySelector('div:last-child')?.style.setProperty('display', 'none');
  document.querySelectorAll('#wijkOptIn button').forEach((b) => b.style.display = 'none');
  const bevestiging = document.getElementById('wijkOptInBevestiging');
  if (bevestiging) bevestiging.style.display = 'block';

  return true;
}
