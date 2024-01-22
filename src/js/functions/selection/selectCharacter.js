import { characters } from "./const/characters.js";
export const selectCharacter = () => {
    for (let character of characters) {
        const characterButton = document.getElementById(character);
        if (characterButton) {
            characterButton.addEventListener("click", () => {
                const mainContents = document.getElementById("main-contents");
                const elements = mainContents.children;
                for (let element of elements) {
                    if (element.className === character) {
                        element.style.display = "block";
                    }
                    else {
                        element.style.display = "none";
                    }
                }
            });
        }
    }
};
