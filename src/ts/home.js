import { controlPageAdjustment } from "./functions/adjustment/controlPageAdjustment.js";
import { adjustHomePage } from "./functions/adjustment/adjustHomePage.js";

window.addEventListener("DOMContentLoaded", () => {
    controlPageAdjustment(adjustHomePage);
});
