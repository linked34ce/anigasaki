import { CHARACTERS } from "./const/characters.js";
import type { HTMLSpeechElement } from "../types.js";

export const selectCharacter = () => {
    CHARACTERS.forEach((character) => {
        const characterButton = document.getElementById(
            character,
        ) as HTMLButtonElement;

        if (characterButton) {
            characterButton.addEventListener("click", () => {
                const mainContents = document.getElementById(
                    "main-contents",
                ) as HTMLDivElement;

                const elements =
                    mainContents.children as HTMLCollectionOf<HTMLSpeechElement>;

                for (let element of elements) {
                    if (element.classList.contains(character)) {
                        element.classList.replace("hidden", "shown");
                    } else {
                        element.classList.replace("shown", "hidden");
                    }
                }
            });
        }
    });
};
