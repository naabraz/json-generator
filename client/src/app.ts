import { requestGenerator, getAPITime } from './service/index.js';

const button = document.querySelector('.button');
const apiButton = document.querySelector('.api-button');

button?.addEventListener('click', () => requestGenerator());
apiButton?.addEventListener('click', () => getAPITime());
