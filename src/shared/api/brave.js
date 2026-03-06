import { apiFetch } from './api.js';

export async function searchActivities(query) {
  const encoded = encodeURIComponent(query);
  const response = await apiFetch('/brave-search?q=' + encoded);
  return response.json();
}
