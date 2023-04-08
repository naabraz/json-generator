import { requestDocCreation } from './service/index.js';

const form: HTMLElement | null = document.querySelector('form');

if (form) {
  const workName: HTMLInputElement | null =
    document.querySelector('#work-name');
  const workYear: HTMLInputElement | null =
    document.querySelector('#work-year');
  const workType: HTMLInputElement | null =
    document.querySelector('#work-type');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (workName && workYear && workType) {
      requestDocCreation({
        name: workName.value,
        year: workYear.value,
        type: workType.value,
      });
    }
  });
}
