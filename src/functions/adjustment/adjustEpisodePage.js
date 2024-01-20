import { NAV_HEIGHT, NAV_WIDTH, WINDOW_RATIO } from "./const/window.js";

export const adjustEpisodePage = () => {
    const title = document.getElementById("title");
    const buttons = document.getElementById("buttons");
    const episodes = document.getElementById("episodes");
    const episodeTable = document.getElementById("episode-table");
    const episodeLinks = episodes.getElementsByTagName("a");
    const mainContent = document.getElementById("main-contents");

    if (window.innerWidth < window.innerHeight * WINDOW_RATIO) {
        document.getElementById("thumbnail").style.width = "80%";
        if (title.className === "card-title text-white text-nowrap") {
            title.className = "card-title text-white text-nowrap fs-6";
        } else if (title.className === "card-title text-black text-nowrap") {
            title.className = "card-title text-black text-nowrap fs-6";
        }
        buttons.className = "row row-cols-auto g-0";
        mainContent.className = "mx-3 my-5 p-1 text-left";
    } else {
        document.getElementById("thumbnail").style.width = "26rem";
        if (title.className === "card-title text-white text-nowrap fs-6") {
            title.className = "card-title text-white text-nowrap";
        } else if (
            title.className === "card-title text-black text-nowrap fs-6"
        ) {
            title.className = "card-title text-black text-nowrap";
        }
        buttons.className = "row row-cols-auto d-block g-0";
        mainContent.className = "m-5 p-1 text-left";
    }

    if (window.innerWidth < NAV_WIDTH.SMALL) {
        episodes.innerHTML =
            '<tr><td class="nav-link-hover"><a href="01.html" class="nav-link fs-6">第1話</a></td><td class="nav-link-hover"><a href="02.html" class="nav-link fs-6">第2話</a></td></tr><tr><td class="nav-link-hover"><a href="03.html" class="nav-link fs-6">第3話</a></td><td class="nav-link-hover"><a href="04.html" class="nav-link fs-6">第4話</a></td></tr><tr><td class="nav-link-hover"><a href="05.html" class="nav-link fs-6">第5話</a></td><td class="nav-link-hover"><a href="06.html" class="nav-link fs-6">第6話</a></td></tr><tr><td class="nav-link-hover"><a href="07.html" class="nav-link fs-6">第7話</a></td><td class="nav-link-hover"><a href="08.html" class="nav-link fs-6">第8話</a></td></tr><tr><td class="nav-link-hover"><a href="09.html" class="nav-link fs-6">第9話</a></td><td class="nav-link-hover"><a href="10.html" class="nav-link fs-6">第10話</a></td></tr><tr><td class="nav-link-hover"><a href="11.html" class="nav-link fs-6">第11話</a></td><td class="nav-link-hover"><a href="12.html" class="nav-link fs-6">第12話</a></td></tr><tr><td class="nav-link-hover"><a href="13.html" class="nav-link fs-6">第13話</a></td></tr>';
        if (window.innerHeight < NAV_HEIGHT.SMALL) {
            episodeTable.className = "table table-sm table-dark border-white";
        }
    } else if (window.innerWidth < NAV_WIDTH.MIDDLE) {
        episodes.innerHTML =
            '<tr><td class="nav-link-hover"><a href="01.html" class="nav-link fs-5">第1話</a></td><td class="nav-link-hover"><a href="02.html" class="nav-link fs-5">第2話</a></td><td class="nav-link-hover"><a href="03.html" class="nav-link fs-5">第3話</a></td></tr><tr><td class="nav-link-hover"><a href="04.html" class="nav-link fs-5">第4話</a></td><td class="nav-link-hover"><a href="05.html" class="nav-link fs-5">第5話</a></td><td class="nav-link-hover"><a href="06.html" class="nav-link fs-5">第6話</a></td></tr><tr><td class="nav-link-hover"><a href="07.html" class="nav-link fs-5">第7話</a></td><td class="nav-link-hover"><a href="08.html" class="nav-link fs-5">第8話</a></td><td class="nav-link-hover"><a href="09.html" class="nav-link fs-5">第9話</a></td></tr><tr><td class="nav-link-hover"><a href="10.html" class="nav-link fs-5">第10話</a></td><td class="nav-link-hover"><a href="11.html" class="nav-link fs-5">第11話</a></td><td class="nav-link-hover"><a href="12.html" class="nav-link fs-5">第12話</a></td></tr><tr><td class="nav-link-hover"><a href="13.html" class="nav-link fs-5">第13話</a></td></tr>';
    } else {
        episodes.innerHTML =
            '<tr><td class="nav-link-hover"><a href="01.html" class="nav-link fs-5">第1話</a></td><td class="nav-link-hover"><a href="02.html" class="nav-link fs-5">第2話</a></td><td class="nav-link-hover"><a href="03.html" class="nav-link fs-5">第3話</a></td><td class="nav-link-hover"><a href="04.html" class="nav-link fs-5">第4話</a></td><td class="nav-link-hover"><a href="05.html" class="nav-link fs-5">第5話</a></tr><tr></td><td class="nav-link-hover"><a href="06.html" class="nav-link fs-5">第6話</a></td><td class="nav-link-hover"><a href="07.html" class="nav-link fs-5">第7話</a></td><td class="nav-link-hover"><a href="08.html" class="nav-link fs-5">第8話</a></td><td class="nav-link-hover"><a href="09.html" class="nav-link fs-5">第9話</a></td><td class="nav-link-hover"><a href="10.html" class="nav-link fs-5">第10話</a></td></tr><tr><td class="nav-link-hover"><a href="11.html" class="nav-link fs-5">第11話</a></td><td class="nav-link-hover"><a href="12.html" class="nav-link fs-5">第12話</a></td><td class="nav-link-hover"><a href="13.html" class="nav-link fs-5">第13話</a></td></tr>';
    }

    for (let i = 0; i < episodeLinks.length; i++) {
        if (episodeLinks.item(i).href === location.href) {
            episodeLinks.item(i).parentElement.id = "in-this-page";
            episodeLinks.item(i).parentElement.innerHTML =
                '<a class="nav-link fs-5">第' + (i + 1) + "話</a>";
        }
    }
};
