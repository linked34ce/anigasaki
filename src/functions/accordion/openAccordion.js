import { TIMEOUT } from "./const/timeout.js";

export const openAccordion = (
    isOp,
    accordionOpenedStates,
    accordionClickedStates
) => {
    const index = isOp ? 0 : 1;
    const id = (isOp ? "op" : "ed") + "-expansion";

    accordionClickedStates[index] = true;

    if (!accordionOpenedStates[index]) {
        document.getElementById(id).style.animation =
            "350ms ease-in 0s 1 normal none running expand";
        setTimeout(() => {
            document.getElementById(id).innerHTML =
                "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' class='bi bi-dash' viewBox='0 0 12 15'><path d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z'/></svg>";
            document.getElementById(id).className = "minus";
        }, TIMEOUT.DELAY);
        accordionOpenedStates[index] = true;
    } else {
        document.getElementById(id).style.animation =
            "350ms ease-out 0s 1 normal none running collapse";
        setTimeout(() => {
            document.getElementById(id).innerHTML =
                "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' class='bi bi-plus' viewBox='0 0 12 15'><path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z'/></svg>";
            document.getElementById(id).className = "plus";
        }, TIMEOUT.DELAY);
        accordionOpenedStates[index] = false;
    }

    setTimeout(() => {
        document.getElementById(id).style.animation = "";
        accordionClickedStates[index] = false;
    }, TIMEOUT.DURATION);
};
