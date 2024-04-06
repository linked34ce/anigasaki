import { createNavigation } from './createNavigation.js';
import { NUM_OF_EPISODES, LATEST_EPISODE } from './const/episode.js';
import { WINDOW_WIDTH } from './const/window.js';
export const adjustHomePage = () => {
    const title = document.getElementById('title');
    const cards = document.getElementsByClassName('card');
    if (window.innerWidth < WINDOW_WIDTH.SMALL) {
        title.classList.replace('mt-2', 'mt-5');
        for (let i = 0; i < NUM_OF_EPISODES; i++) {
            if (i < LATEST_EPISODE) {
                cards[i].classList.remove('link-disabled', 'col');
            }
            else {
                cards[i].classList.remove('col');
                cards[i].classList.add('link-disabled');
            }
            cards[i].classList.replace('card-large', 'card-small');
        }
    }
    else {
        title.classList.replace('mt-5', 'mt-2');
        for (let i = 0; i < NUM_OF_EPISODES; i++) {
            if (i < LATEST_EPISODE) {
                cards[i].classList.remove('link-disabled');
                cards[i].classList.add('col');
            }
            else {
                cards[i].classList.add('link-disabled', 'col');
            }
            cards[i].classList.replace('card-small', 'card-large');
        }
    }
    createNavigation();
};
