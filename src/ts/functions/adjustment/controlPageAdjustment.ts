import { TIMEOUT } from "./const/timeout.js";
import { controlScroll } from "./controlScroll.js";
import type { AdjustPage, Queue } from "../types.js";

export const controlPageAdjustment = (adjustPage: AdjustPage) => {
    adjustPage();
    controlScroll();

    let queue: Queue;

    window.addEventListener("resize", () => {
        clearTimeout(queue);
        queue = setTimeout(adjustPage, TIMEOUT);
    });
};
