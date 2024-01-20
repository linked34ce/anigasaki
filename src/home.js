import {
    adjustHomePage,
    controlPageAdjustment,
} from "./functions/adjustment/index.js";

window.addEventListener("DOMContentLoaded", () => {
    controlPageAdjustment(adjustHomePage);
});
