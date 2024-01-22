import { controlPageAdjustment } from "./functions/adjustment/controlPageAdjustment";
import { adjustHomePage } from "./functions/adjustment/adjustHomePage";

window.addEventListener("DOMContentLoaded", () => {
    controlPageAdjustment(adjustHomePage);
});
