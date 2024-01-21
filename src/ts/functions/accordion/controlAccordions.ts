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
        if (document.getElementById(songType)) {
            document.getElementById(songType)?.addEventListener("click", () => {
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
