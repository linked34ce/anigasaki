import { openAccordion } from "./openAccordion.js";
import { SONG_TYPES } from "./const/songTypes.js";
export const controllAccordions = () => {
    const accordionOpenedStates = {
        opening: false,
        ending: false,
    };
    const accordionClickedStates = {
        opening: false,
        ending: false,
    };
    for (let songType of SONG_TYPES) {
        const accrodion = document.getElementById(songType);
        if (accrodion) {
            accrodion.addEventListener("click", () => {
                if (!accordionClickedStates[songType]) {
                    openAccordion(songType, accordionOpenedStates, accordionClickedStates);
                }
            });
        }
    }
};
