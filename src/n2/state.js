import { KEYS } from '../shared/utils/storageKeys.js';
import { getJson, setJson, remove } from '../shared/utils/storage.js';

export const defaultState = {
  version: '3.0',
  currentScreen: 1,
  currentView: 'assessment',
  scores: {},
  domainDetails: {},
  ondersteuningsstructuur: {},
  strategischeReflectie: {},
  doelgroepen: [],
  network: [],
  ratings: {},
  ratingNotes: {},
};

export let state = { ...defaultState };

export function loadState() {
  const saved = getJson(KEYS.WELZIJNSWERKER_V2, null);
  if (saved && typeof saved === 'object') {
    state = { ...state, ...saved };
  }
  return state;
}

export function saveState() {
  state.updatedAt = new Date().toISOString();
  setJson(KEYS.WELZIJNSWERKER_V2, state);
}

export function resetState() {
  state = { ...defaultState, clientId: `client_${Date.now()}`, createdAt: new Date().toISOString() };
  remove(KEYS.WELZIJNSWERKER_V2);
  return state;
}
