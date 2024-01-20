export const selectSongs = () => {
    document.getElementById("songs").addEventListener("click", () => {
        const elements = document.getElementById("main-contents").children;
        const lyrics = document.getElementsByClassName("lyric");

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
