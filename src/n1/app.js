import { domains } from './domains.js';
import {
  state,
  loadState,
  saveState,
  resetState,
  selectAnswer,
  selectAge,
  setCurrentScreen,
} from './state.js';
import { renderDomainScreens, renderResults, updateProgress } from './render.js';
import { saveToLocalStorage, exportNaarN3 } from './export.js';

function goToScreen(num) {
  const resultsScreen = domains.length + 1;

  if (num === resultsScreen) {
    const unanswered = domains.filter((d) => !state.answers[d.id]);
    if (unanswered.length > 0) {
      const first = unanswered[0];
      const firstScreenNum = domains.indexOf(first) + 1;
      alert(`Nog niet ingevuld: ${first.emoji} ${first.title}\n\nBeantwoord dit onderdeel eerst.`);
      num = firstScreenNum;
    }
  }

  document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
  document.getElementById(`screen${num}`)?.classList.add('active');

  setCurrentScreen(num);
  updateProgress();

  if (num === resultsScreen) {
    renderResults();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectOption(domainId, value, element) {
  element.parentElement.querySelectorAll('.option').forEach((opt) => opt.classList.remove('selected'));
  element.classList.add('selected');

  selectAnswer(domainId, value);
  saveState();

  const screenNum = domains.findIndex((d) => d.id === domainId) + 1;
  const nextBtn = document.getElementById(`next${screenNum}`);
  if (nextBtn) nextBtn.disabled = false;
}

function selectAgeCategory(category, element) {
  selectAge(category);
  document.querySelectorAll('.age-chip').forEach((c) => c.classList.remove('selected'));
  if (state.ageCategory && element) element.classList.add('selected');
  saveState();
}

function init() {
  loadState();
  renderDomainScreens();
  updateProgress();

  if (state.ageCategory) {
    const chip = document.querySelector(`.age-chip[data-cat="${state.ageCategory}"]`);
    if (chip) chip.classList.add('selected');
  }
}

function reset() {
  if (!confirm('Weet je zeker dat je opnieuw wilt beginnen? Je antwoorden worden gewist.')) return;
  resetState();
  document.querySelectorAll('.age-chip').forEach((c) => c.classList.remove('selected'));
  goToScreen(0);
}

window.app = {
  init,
  goToScreen,
  selectOption,
  selectAge: selectAgeCategory,
  bijdragenAanWijkdata: exportNaarN3,
  saveToLocalStorage,
  exportNaarN3,
  reset,
  renderDomainScreens,
  renderResults,
};

document.addEventListener('DOMContentLoaded', () => {
  init();
});
