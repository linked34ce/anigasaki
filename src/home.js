import { adjustHomePage } from "./functions/adjustment";

window.addEventListener("DOMContentLoaded", () => {
    adjustHomePage();

    let queue = null;
    window.addEventListener("resize", () => {
        clearTimeout(queue);
        queue = setTimeout(adjustHomePage, 200);
    });
});
