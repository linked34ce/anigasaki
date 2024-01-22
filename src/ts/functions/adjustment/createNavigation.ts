import { NUM_OF_EPISODES_PER_SEASON } from "./const/episode";
import { NAV_WIDTH, NUM_OF_ITEMS_PER_ROW } from "./const/navigation";

export const createNavigation = (isHomePage: boolean) => {
    const episodeTableContents = Array<HTMLTableCellElement>();

    for (let i = 1; i <= NUM_OF_EPISODES_PER_SEASON; i++) {
        const fontSize = window.innerWidth < NAV_WIDTH.SMALL ? "fs-6" : "fs-5";
        const link = document.createElement("a");
        const content = document.createElement("td");

        const dirName = isHomePage ? "." : "../..";

        link.href = `${dirName}/episodes/s1/${i
            .toString()
            .padStart(2, "0")}.html`;
        link.classList.add("nav-link", fontSize);
        link.innerText = `第${i}話`;

        content.className = "episode-table-link";
        content.appendChild(link);

        episodeTableContents.push(content);
    }

    const episodeTableRows = Array<HTMLTableRowElement>();

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

    const episodes = document.getElementById("episodes") as HTMLElement;

    while (episodes.firstChild) {
        episodes.removeChild(episodes.firstChild);
    }

    episodeTableRows.forEach((row) => {
        episodes.appendChild(row);
    });
};
