import { TIMEOUT } from "./const/timeout.js";
export const controlPageAdjustment = (adjustPage) => {
    adjustPage();
    let queue;
    window.addEventListener("resize", () => {
        clearTimeout(queue);
        queue = setTimeout(adjustPage, TIMEOUT);
    });
};
