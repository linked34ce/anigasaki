import { createNavigation } from "./createNavigation.js";
import { WINDOW_WIDTH } from "./const/window.js";
import { NAV_HEIGHT, NAV_WIDTH } from "./const/navigation.js";
export const adjustEpisodePage = () => {
    const title = document.getElementById("title");
    const thumbnail = document.getElementById("thumbnail");
    const episodes = document.getElementById("episodes");
    const episodeTable = document.getElementById("episode-table");
    const mainContent = document.getElementById("main-contents");
    const episodeLinks = episodes.getElementsByTagName("a");
    if (window.innerWidth < WINDOW_WIDTH.SMALL) {
        title.classList.add("fs-6");
        thumbnail.classList.replace("thumbnail-large", "thumbnail-small");
        mainContent.classList.replace("m-5", "mx-3");
        mainContent.classList.add("my-5");
    }
    else {
        title.classList.remove("fs-6");
        thumbnail.classList.replace("thumbnail-small", "thumbnail-large");
        mainContent.classList.replace("mx-3", "m-5");
        mainContent.classList.remove("my-5");
    }
    if (window.innerWidth < NAV_WIDTH.SMALL &&
        window.innerHeight < NAV_HEIGHT.SMALL) {
        episodeTable.classList.add("table-sm");
    }
    else {
        episodeTable.classList.remove("table-sm");
    }
    createNavigation(false);
    for (let i = 0; i < episodeLinks.length; i++) {
        const fontSize = window.innerWidth < NAV_WIDTH.SMALL ? "fs-6" : "fs-5";
        if (episodeLinks[i].href === location.href) {
            const parentCell = episodeLinks[i]
                .parentElement;
            parentCell.id = "in-this-page";
            episodeLinks[i].classList.add(fontSize);
            episodeLinks[i].removeAttribute("href");
            episodeLinks[i].innerText = `第${i + 1}話`;
            break;
        }
    }
};
