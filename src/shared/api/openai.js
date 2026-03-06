import { apiFetch } from './api.js';

async function callOpenAI({ messages, temperature, maxTokens }) {
  const response = await apiFetch('/openai', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages,
      temperature,
      max_tokens: maxTokens,
    }),
  });

  return response.json();
}

export async function analyzeHulpvraag(prompt) {
  return callOpenAI({
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.3,
    maxTokens: 500,
  });
}

export async function generateClientAdvice(systemPrompt, userPrompt) {
  return callOpenAI({
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    temperature: 0.7,
    maxTokens: 1500,
  });
}

export async function generateProfessionalAdvice(systemPrompt, userPrompt) {
  return callOpenAI({
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    temperature: 0.7,
    maxTokens: 1500,
  });
}
