import type { HTMLSpeechElement } from '../types.js';

export const selectAll = () => {
  const allButton = document.getElementById('all') as HTMLButtonElement;

  allButton.addEventListener('click', () => {
    const mainContents = document.getElementById(
      'main-contents'
    ) as HTMLDivElement;

    const elements =
      mainContents.children as HTMLCollectionOf<HTMLSpeechElement>;

    for (let element of elements) {
      element.classList.replace('hidden', 'shown');
    }
  });
};
