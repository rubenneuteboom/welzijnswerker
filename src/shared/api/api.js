export const BASE_URL = (globalThis.__WELZIJNSWERKER_API_BASE_URL__ || 'http://localhost:3459').replace(/\/$/, '');

export async function apiFetch(path, options = {}, timeoutMs = 30000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(BASE_URL + path, {
      ...options,
      signal: controller.signal,
    });

    clearTimeout(timer);

    if (!response.ok) {
      throw new Error('HTTP ' + response.status + ': ' + response.statusText);
    }

    return response;
  } catch (err) {
    clearTimeout(timer);
    console.error('[apiFetch] Request failed:', { path, error: err });

    if (err && err.name === 'AbortError') {
      throw new Error('Verzoek verlopen (timeout na ' + timeoutMs + 'ms)');
    }

    throw err;
  }
}
