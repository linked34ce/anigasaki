import type { HTMLSpeechElement, HTMLLyricElement } from "../types";

export const selectAll = () => {
    const allButton = document.getElementById("all") as HTMLDivElement;

    allButton.addEventListener("click", () => {
        const mainContents = document.getElementById(
            "main-contents",
        ) as HTMLDivElement;
        const elements =
            mainContents.children as HTMLCollectionOf<HTMLSpeechElement>;
        const lyrics = document.getElementsByClassName(
            "lyric",
        ) as HTMLCollectionOf<HTMLLyricElement>;

        for (let element of elements) {
            element.style.display = "block";
        }

        for (let lyric of lyrics) {
            lyric.style.display = "block";
        }
    });
};
