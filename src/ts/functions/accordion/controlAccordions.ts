import { openAccordion } from "./openAccordion.js";
import { SONG_TYPES } from "./const/songTypes.js";
import type { AccordionStates } from "../types.js";

export const controllAccordions = () => {
    const accordionOpenedStates: AccordionStates = {
        opening: false,
        ending: false,
    };

    const accordionClickedStates: AccordionStates = {
        opening: false,
        ending: false,
    };

    for (let songType of SONG_TYPES) {
        const accrodion = document.getElementById(
            songType,
        ) as HTMLButtonElement;

        if (accrodion) {
            accrodion.addEventListener("click", () => {
                if (!accordionClickedStates[songType]) {
                    openAccordion(
                        songType,
                        accordionOpenedStates,
                        accordionClickedStates,
                    );
                }
            });
        }
    }
};
