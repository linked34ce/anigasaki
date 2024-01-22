import { TIMEOUT } from "./const/timeout";
import type { AdjustPage, Queue } from "../types";

export const controlPageAdjustment = (adjustPage: AdjustPage) => {
    adjustPage();

    let queue: Queue;

    window.addEventListener("resize", () => {
        clearTimeout(queue);
        queue = setTimeout(adjustPage, TIMEOUT);
    });
};
