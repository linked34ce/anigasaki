import { openAccordion } from "./openAccordion";
import { SONG_TYPES } from "./const/songTypes";
import type { AccordionStates } from "../types";

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
