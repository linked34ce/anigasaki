import { TIMEOUT } from "./const/timeout";
import type { AccordionStates, HTMLSvgElement, SongType } from "../types";

export const openAccordion = (
    songType: SongType,
    accordionOpenedStates: AccordionStates,
    accordionClickedStates: AccordionStates,
) => {
    const id = `${songType}-expansion`;

    accordionClickedStates[songType] = true;
    const accordion = document.getElementById(id) as HTMLDivElement;
    const parentHeader = accordion.parentElement as HTMLHeadingElement;
    const svg = accordion.children[0] as HTMLSvgElement;

    if (!accordionOpenedStates[songType]) {
        accordion.style.animation =
            "350ms ease-in 0s 1 normal none running expand";
        parentHeader.classList.remove("accordion-collapsed");

        accordionOpenedStates[songType] = true;

        setTimeout(() => {
            svg.classList.replace("bi-plus", "bi-dash");
            svg.children[0].setAttribute(
                "d",
                "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z",
            );
            accordion.classList.replace("plus", "minus");
        }, TIMEOUT.DELAY);
    } else {
        accordion.style.animation =
            "350ms ease-out 0s 1 normal none running collapse";
        accordionOpenedStates[songType] = false;

        setTimeout(() => {
            svg.classList.replace("bi-dash", "bi-plus");
            svg.children[0].setAttribute(
                "d",
                "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z",
            );
            accordion.classList.replace("minus", "plus");
        }, TIMEOUT.DELAY);

        setTimeout(() => {
            parentHeader.classList.add("accordion-collapsed");
        }, TIMEOUT.DURATION);
    }

    setTimeout(() => {
        accordion.style.animation = "";
        accordionClickedStates[songType] = false;
    }, TIMEOUT.DURATION);
};
