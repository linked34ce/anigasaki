import { TIMEOUT } from "./const/timeout.js";
import type { AdjustPage, Queue } from "../types.js";

export const controlPageAdjustment = (adjustPage: AdjustPage) => {
    adjustPage();

    let queue: Queue;

    window.addEventListener("resize", () => {
        clearTimeout(queue);
        queue = setTimeout(adjustPage, TIMEOUT);
    });
};
