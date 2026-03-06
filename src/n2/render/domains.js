export function renderDomains() {
  if (typeof window.renderDomains === 'function') return window.renderDomains();
}

export function renderDomeinScherm(domainId) {
  if (!domainId) return;
  if (typeof window.goToScreenById === 'function') {
    window.goToScreenById('domains');
    setTimeout(() => {
      if (typeof window.toggleDomainCard === 'function') window.toggleDomainCard(domainId);
    }, 60);
  }
}

export function selectOption(domainId, value, element) {
  if (typeof window.setStoplicht === 'function') {
    return window.setStoplicht(domainId, value, element);
  }
}
