import { TIMEOUT } from './const/timeout.js';
import { controlScroll } from './controlScroll.js';
export const controlPageAdjustment = (adjustPage) => {
    adjustPage();
    controlScroll();
    let queue;
    window.addEventListener('resize', () => {
        clearTimeout(queue);
        queue = setTimeout(adjustPage, TIMEOUT);
    });
};
