import type { HTMLSpeechElement } from "../types.js";

export const selectSongs = () => {
    const songsButton = document.getElementById("songs") as HTMLButtonElement;
    songsButton.addEventListener("click", () => {
        const mainContents = document.getElementById(
            "main-contents",
        ) as HTMLDivElement;

        const elements =
            mainContents.children as HTMLCollectionOf<HTMLSpeechElement>;

        for (let element of elements) {
            if (
                element.classList.contains("song") ||
                element.classList.contains("lyric")
            ) {
                element.classList.replace("hidden", "shown");
            } else {
                element.classList.replace("shown", "hidden");
            }
        }
    });
};
