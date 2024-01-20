import { openAccordion } from "./openAccordion.js";

export const controllAccordions = () => {
    const accordionOpenedStates = [false, false];
    const accordionClickedStates = [false, false];

    if (document.getElementById("opening")) {
        document
            .getElementById("opening")
            .addEventListener("click", async () => {
                if (!accordionClickedStates[0]) {
                    openAccordion(
                        true,
                        accordionOpenedStates,
                        accordionClickedStates
                    );
                }
            });
    }

    if (document.getElementById("ending")) {
        document
            .getElementById("ending")
            .addEventListener("click", async () => {
                if (!accordionClickedStates[1]) {
                    openAccordion(
                        false,
                        accordionOpenedStates,
                        accordionClickedStates
                    );
                }
            });
    }
};
