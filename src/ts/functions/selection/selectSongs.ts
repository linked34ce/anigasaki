import type { HTMLLyricElement, HTMLSpeechElement } from "../types";

export const selectSongs = () => {
    const songButton = document.getElementById("songs") as HTMLDivElement;
    songButton.addEventListener("click", () => {
        const mainContents = document.getElementById(
            "main-contents",
        ) as HTMLDivElement;
        const elements =
            mainContents.children as HTMLCollectionOf<HTMLSpeechElement>;
        const lyrics = document.getElementsByClassName(
            "lyric",
        ) as HTMLCollectionOf<HTMLLyricElement>;

        for (let element of elements) {
            if (
                element.className === "card p-0 song" ||
                element.className === "accordion"
            ) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        }

        for (let lyric of lyrics) {
            lyric.style.display = "block";
        }
    });
};
