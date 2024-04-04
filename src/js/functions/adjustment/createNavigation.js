import { LATEST_EPISODE, NUM_OF_EPISODES_PER_SEASON, SEASONS, } from "./const/episode.js";
import { NAV_HEIGHT, NAV_WIDTH, NUM_OF_ITEMS_PER_ROW, } from "./const/navigation.js";
export const createNavigation = () => {
    SEASONS.forEach((season) => {
        createEpisodeTable(season);
    });
};
export const createEpisodeTable = (season) => {
    const episodeTableContents = Array();
    for (let i = 1; i <= NUM_OF_EPISODES_PER_SEASON; i++) {
        const fontSize = window.innerWidth < NAV_WIDTH.SMALL ||
            window.innerHeight < NAV_HEIGHT.MIDDLE
            ? "fs-6"
            : "fs-5";
        const link = document.createElement("a");
        const content = document.createElement("td");
        const dirName = location.pathname.includes("/episodes/")
            ? "../.."
            : ".";
        if (season === "s2" && i > LATEST_EPISODE % 13) {
            link.className = "nav-link-disabled";
            content.className = "episode-table-link-disabled";
        }
        else {
            link.href = `${dirName}/episodes/${season}/${i
                .toString()
                .padStart(2, "0")}.html`;
            link.className = "nav-link";
            content.className = "episode-table-link";
        }
        link.classList.add(fontSize);
        link.innerText = `第${i}話`;
        content.appendChild(link);
        episodeTableContents.push(content);
    }
    const episodeTableRows = Array();
    while (episodeTableContents.length > 0) {
        const row = document.createElement("tr");
        if (window.innerWidth < NAV_WIDTH.SMALL) {
            episodeTableContents
                .splice(0, NUM_OF_ITEMS_PER_ROW.SMALL)
                .forEach((content) => {
                row.appendChild(content);
            });
        }
        else if (window.innerWidth < NAV_WIDTH.MIDDLE) {
            episodeTableContents
                .splice(0, NUM_OF_ITEMS_PER_ROW.MIDDLE)
                .forEach((content) => {
                row.appendChild(content);
            });
        }
        else {
            episodeTableContents
                .splice(0, NUM_OF_ITEMS_PER_ROW.LARGE)
                .forEach((content) => {
                row.appendChild(content);
            });
        }
        episodeTableRows.push(row);
    }
    const episodes = document.getElementById(`episodes-${season}`);
    while (episodes.firstChild) {
        episodes.removeChild(episodes.firstChild);
    }
    episodeTableRows.forEach((row) => {
        episodes.appendChild(row);
    });
};
