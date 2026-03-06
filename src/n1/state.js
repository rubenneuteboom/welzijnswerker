import { KEYS } from '../shared/utils/storageKeys.js';
import { getJson, setJson, remove } from '../shared/utils/storage.js';

export let state = {
  currentScreen: 0,
  answers: {},
  ageCategory: null,
};

export function loadState() {
  const parsed = getJson(KEYS.RPA_NIVEAU1, null);
  if (!parsed || typeof parsed !== 'object') return;

  if (parsed.answers && typeof parsed.answers === 'object') {
    state.answers = parsed.answers;
    state.ageCategory = parsed.ageCategory || null;
    return;
  }

  state.answers = parsed;
}

export function saveState() {
  setJson(KEYS.RPA_NIVEAU1, {
    answers: state.answers,
    ageCategory: state.ageCategory,
  });
}

export function resetState() {
  state.answers = {};
  state.ageCategory = null;
  state.currentScreen = 0;
  remove(KEYS.RPA_NIVEAU1);
}

export function selectAnswer(domainId, value) {
  state.answers[domainId] = value;
}

export function selectAge(category) {
  state.ageCategory = state.ageCategory === category ? null : category;
}

export function setCurrentScreen(screenNum) {
  state.currentScreen = screenNum;
}
