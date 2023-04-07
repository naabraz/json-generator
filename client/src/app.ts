import { requestGenerator } from './service/index.js';

const button = document.querySelector('.button');

button?.addEventListener('click', () => requestGenerator());
