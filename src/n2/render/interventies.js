import { INTERVENTIES } from '../../data/interventies.js';

export { INTERVENTIES };

export function renderInterventies() {
  if (typeof window.renderInterventiesVoorBeweging === 'function') {
    return window.renderInterventiesVoorBeweging();
  }
}

export function filterInterventies() {
  if (typeof window.filterInterventiesByPostcode === 'function') {
    return window.filterInterventiesByPostcode();
  }
}
