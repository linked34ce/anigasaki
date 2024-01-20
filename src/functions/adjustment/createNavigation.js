import { NAV_WIDTH } from "./const/window.js";
import { NUM_OF_EPISODES_PER_SEASON } from "./const/episode.js";
import { NUM_OF_ITEMS_PER_ROW } from "./const/navigation.js";

export const createNavigation = () => {
    const episodeTableContents = [];

    for (let i = 1; i <= NUM_OF_EPISODES_PER_SEASON; i++) {
        const fontSize = window.innerWidth < NAV_WIDTH.SMALL ? "fs-6" : "fs-5";
        const link = document.createElement("a");
        const content = document.createElement("td");

        link.href = `/episode/${i.toString().padStart(2, "0")}.html`;
        link.classList.add("nav-link", fontSize);
        link.innerText = `第${i}話`;

        content.className = "nav-link-hover";
        content.appendChild(link);
        episodeTableContents.push(content);
    }

    const episodeTableRows = [];

    while (episodeTableContents.length > 0) {
        const row = document.createElement("tr");

        if (window.innerWidth < NAV_WIDTH.SMALL) {
            episodeTableContents
                .splice(0, NUM_OF_ITEMS_PER_ROW.SMALL)
                .forEach((content) => {
                    row.appendChild(content);
                });
        } else if (window.innerWidth < NAV_WIDTH.MIDDLE) {
            episodeTableContents
                .splice(0, NUM_OF_ITEMS_PER_ROW.MIDDLE)
                .forEach((content) => {
                    row.appendChild(content);
                });
        } else {
            episodeTableContents
                .splice(0, NUM_OF_ITEMS_PER_ROW.LARGE)
                .forEach((content) => {
                    row.appendChild(content);
                });
        }
        episodeTableRows.push(row);
    }

    while (episodes.firstChild) {
        episodes.removeChild(episodes.firstChild);
    }

    episodeTableRows.forEach((row) => {
        episodes.appendChild(row);
    });
};
