export const selectAll = () => {
    document.getElementById("all").addEventListener("click", () => {
        const elements = document.getElementById("main-contents").children;
        const lyrics = document.getElementsByClassName("lyric");

        for (let element of elements) {
            element.style.display = "block";
        }

        for (let lyric of lyrics) {
            lyric.style.display = "block";
        }
    });
};
