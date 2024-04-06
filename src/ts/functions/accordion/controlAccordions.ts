import { openAccordion } from "./openAccordion.js";
import { SONG_TYPES } from "./const/songTypes.js";
import type { AccordionStates } from "../types.js";

export const controllAccordions = () => {
    const accordionOpenStates = {
        opening: false,
        ending: false,
    } satisfies AccordionStates;

    const accordionClickedStates = {
        opening: false,
        ending: false,
    } satisfies AccordionStates;

    SONG_TYPES.forEach((songType) => {
        const accrodion = document.getElementById(
            songType,
        ) as HTMLButtonElement;

        if (accrodion) {
            accrodion.addEventListener("click", () => {
                if (!accordionClickedStates[songType]) {
                    openAccordion(
                        songType,
                        accordionOpenStates,
                        accordionClickedStates,
                    );
                }
            });
        }
    });
};
