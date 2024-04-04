import { CHARACTERS } from "./const/characters.js";
export const selectCharacter = () => {
    for (let character of CHARACTERS) {
        const characterButton = document.getElementById(character);
        if (characterButton) {
            characterButton.addEventListener("click", () => {
                const mainContents = document.getElementById("main-contents");
                const elements = mainContents.children;
                for (let element of elements) {
                    if (element.classList.contains(character)) {
                        element.classList.replace("hidden", "shown");
                    }
                    else {
                        element.classList.replace("shown", "hidden");
                    }
                }
            });
        }
    }
};
