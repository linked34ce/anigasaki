import { characters } from "./const/characters.js";

export const selectCharacter = () => {
    for (let character of characters) {
        if (document.getElementById(character)) {
            document.getElementById(character).addEventListener("click", () => {
                const elements =
                    document.getElementById("main-contents").children;

                for (let element of elements) {
                    if (element.classList.contains(character)) {
                        element.classList.replace("hidden", "shown");
                    } else {
                        element.classList.replace("shown", "hidden");
                    }
                }
            });
        }
    }
};
