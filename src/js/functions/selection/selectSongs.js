export const selectSongs = () => {
    document.getElementById("songs").addEventListener("click", () => {
        const elements = document.getElementById("main-contents").children;

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
