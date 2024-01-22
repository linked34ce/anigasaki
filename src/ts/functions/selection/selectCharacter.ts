import { characters } from "./const/characters";
import type { HTMLSpeechElement } from "../types";

export const selectCharacter = () => {
    for (let character of characters) {
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
                    if (element.className === character) {
                        element.style.display = "block";
                    } else {
                        element.style.display = "none";
                    }
                }
            });
        }
    }
};
