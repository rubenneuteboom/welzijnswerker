export function renderPersonList() {
  if (typeof window.renderPersonList === 'function') return window.renderPersonList();
}

export function addPerson() {
  if (typeof window.addPerson === 'function') return window.addPerson();
}

export function removePerson(id) {
  if (typeof window.removePerson === 'function') return window.removePerson(id);
}

export function updateNetworkType() {
  if (typeof window.updateNetworkType === 'function') return window.updateNetworkType();
}
