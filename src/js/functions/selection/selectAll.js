export const selectAll = () => {
    document.getElementById("all").addEventListener("click", () => {
        const elements = document.getElementById("main-contents").children;

        for (let element of elements) {
            element.classList.replace("hidden", "shown");
        }
    });
};
