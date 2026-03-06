import { safeParse } from './safeParse.js';

export function getJson(key, fallback = null) {
  return safeParse(localStorage.getItem(key), fallback);
}
export function setJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function remove(key) {
  localStorage.removeItem(key);
}
export function getRaw(key) {
  return localStorage.getItem(key);
}
