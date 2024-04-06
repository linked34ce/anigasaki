import { openAccordion } from './openAccordion.js';
import { SONG_TYPES } from './const/songTypes.js';
export const controllAccordions = () => {
    const accordionOpenStates = {
        opening: false,
        ending: false,
    };
    const accordionClickedStates = {
        opening: false,
        ending: false,
    };
    SONG_TYPES.forEach((songType) => {
        const accrodion = document.getElementById(songType);
        if (accrodion) {
            accrodion.addEventListener('click', () => {
                if (!accordionClickedStates[songType]) {
                    openAccordion(songType, accordionOpenStates, accordionClickedStates);
                }
            });
        }
    });
};
