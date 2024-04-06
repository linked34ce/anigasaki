import { LATEST_EPISODE, NUM_OF_EPISODES_PER_SEASON, SEASONS, } from './const/episode.js';
import { WINDOW_WIDTH_FOR_NAV, NUM_OF_ITEMS_PER_ROW, } from './const/navigation.js';
const createTableContents = (season, numOfContents) => {
    const episodeTableContents = new Array(numOfContents);
    for (let i = 1; i <= numOfContents; i++) {
        const fontSize = window.innerWidth < WINDOW_WIDTH_FOR_NAV.SMALL ? 'fs-6' : 'fs-5';
        const link = document.createElement('a');
        const content = document.createElement('td');
        const dirName = location.pathname.includes('/episodes/') ? '../..' : '.';
        if (season === 's2' && i > LATEST_EPISODE % 13) {
            link.className = 'nav-link-disabled';
            content.className = 'episode-table-link-disabled';
        }
        else {
            link.href = `${dirName}/episodes/${season}/${i
                .toString()
                .padStart(2, '0')}.html`;
            link.className = 'nav-link';
            content.className = 'episode-table-link';
        }
        link.classList.add(fontSize);
        link.innerText = `第${i}話`;
        content.appendChild(link);
        episodeTableContents[i - 1] = content;
    }
    return episodeTableContents;
};
const createRow = (cells, numOfCellsPerRow) => {
    const row = document.createElement('tr');
    cells.splice(0, numOfCellsPerRow).forEach((content) => {
        row.appendChild(content);
    });
    return row;
};
const createEpisodeTable = (season) => {
    const episodeTableContents = createTableContents(season, NUM_OF_EPISODES_PER_SEASON);
    const episodeTableRows = Array();
    while (episodeTableContents.length > 0) {
        const row = window.innerWidth < WINDOW_WIDTH_FOR_NAV.SMALL
            ? createRow(episodeTableContents, NUM_OF_ITEMS_PER_ROW.SMALL)
            : window.innerWidth < WINDOW_WIDTH_FOR_NAV.MIDDLE
                ? createRow(episodeTableContents, NUM_OF_ITEMS_PER_ROW.MIDDLE)
                : createRow(episodeTableContents, NUM_OF_ITEMS_PER_ROW.LARGE);
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
export const createNavigation = () => {
    SEASONS.forEach((season) => {
        createEpisodeTable(season);
    });
};
