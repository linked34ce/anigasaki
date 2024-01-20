export const adjustHomePage = () => {
    const NUM_OF_EPISODES = 26;
    const LATEST_EPISODE = 13;

    const title = document.getElementById("title");
    const cards = document.getElementsByClassName("card");
    const cardTitles = document.getElementsByClassName(
        "card-title text-center"
    );
    const episodes = document.getElementById("episodes");
    const episodeTable = document.getElementById("episode-table");

    if (window.innerWidth < window.innerHeight * 0.74) {
        title.className = "text-center display-4 mt-5";
        for (let i = 0; i < NUM_OF_EPISODES; i++) {
            cards.item(i).className = "card border-secondary m-3 p-0 mx-auto";
            cards.item(i).style.width = "75%";
        }
        for (let i = LATEST_EPISODE; i < cards.length; i++) {
            cards.item(i).className =
                "card border-secondary m-3 p-0 mx-auto link-disabled";
            cards.item(i).style.width = "75%";
        }
    } else {
        title.className = "text-center display-4 mt-2";
        for (let i = 0; i < NUM_OF_EPISODES; i++) {
            cards.item(i).className =
                "card border-secondary m-3 p-0 mx-auto col";
            cards.item(i).style.width = "18rem";
        }
        for (let i = LATEST_EPISODE; i < cards.length; i++) {
            cards.item(i).className =
                "card border-secondary m-3 p-0 mx-auto col link-disabled";
            cards.item(i).style.width = "18rem";
        }
    }

    if (window.innerWidth < 350) {
        for (let i = 0; i < cardTitles.length; i++) {
            cardTitles.item(i).className = "card-title text-center fs-6";
        }
    } else {
        for (let i = 0; i < cardTitles.length; i++) {
            cardTitles.item(i).className = "card-title text-center";
        }
    }

    if (window.innerWidth < 370) {
        episodes.innerHTML =
            '<tr><td class="nav-link-hover"><a href="episode/01.html" class="nav-link fs-6">第1話</a></td><td class="nav-link-hover"><a href="episode/02.html" class="nav-link fs-6">第2話</a></td></tr><tr><td class="nav-link-hover"><a href="episode/03.html" class="nav-link fs-6">第3話</a></td><td class="nav-link-hover"><a href="episode/04.html" class="nav-link fs-6">第4話</a></td></tr><tr><td class="nav-link-hover"><a href="episode/05.html" class="nav-link fs-6">第5話</a></td><td class="nav-link-hover"><a href="episode/06.html" class="nav-link fs-6">第6話</a></td></tr><tr><td class="nav-link-hover"><a href="episode/07.html" class="nav-link fs-6">第7話</a></td><td class="nav-link-hover"><a href="episode/08.html" class="nav-link fs-6">第8話</a></td></tr><tr><td class="nav-link-hover"><a href="episode/09.html" class="nav-link fs-6">第9話</a></td><td class="nav-link-hover"><a href="episode/10.html" class="nav-link fs-6">第10話</a></td></tr><tr><td class="nav-link-hover"><a href="episode/11.html" class="nav-link fs-6">第11話</a></td><td class="nav-link-hover"><a href="episode/12.html" class="nav-link fs-6">第12話</a></td></tr><tr><td class="nav-link-hover"><a href="episode/13.html" class="nav-link fs-6">第13話</a></td></tr>';
        if (window.innerHeight < 605) {
            episodeTable.className = "table table-sm table-dark border-white";
        }
    } else if (window.innerWidth < 570) {
        episodes.innerHTML =
            '<tr><td class="nav-link-hover"><a href="episode/01.html" class="nav-link fs-5">第1話</a></td><td class="nav-link-hover"><a href="episode/02.html" class="nav-link fs-5">第2話</a></td><td class="nav-link-hover"><a href="episode/03.html" class="nav-link fs-5">第3話</a></td></tr><tr><td class="nav-link-hover"><a href="episode/04.html" class="nav-link fs-5">第4話</a></td><td class="nav-link-hover"><a href="episode/05.html" class="nav-link fs-5">第5話</a></td><td class="nav-link-hover"><a href="episode/06.html" class="nav-link fs-5">第6話</a></td></tr><tr><td class="nav-link-hover"><a href="episode/07.html" class="nav-link fs-5">第7話</a></td><td class="nav-link-hover"><a href="episode/08.html" class="nav-link fs-5">第8話</a></td><td class="nav-link-hover"><a href="episode/09.html" class="nav-link fs-5">第9話</a></td></tr><tr><td class="nav-link-hover"><a href="episode/10.html" class="nav-link fs-5">第10話</a></td><td class="nav-link-hover"><a href="episode/11.html" class="nav-link fs-5">第11話</a></td><td class="nav-link-hover"><a href="episode/12.html" class="nav-link fs-5">第12話</a></td></tr><tr><td class="nav-link-hover"><a href="episode/13.html" class="nav-link fs-5">第13話</a></td></tr>';
    } else {
        episodes.innerHTML =
            '<tr><td class="nav-link-hover"><a href="episode/01.html" class="nav-link fs-5">第1話</a></td><td class="nav-link-hover"><a href="episode/02.html" class="nav-link fs-5">第2話</a></td><td class="nav-link-hover"><a href="episode/03.html" class="nav-link fs-5">第3話</a></td><td class="nav-link-hover"><a href="episode/04.html" class="nav-link fs-5">第4話</a></td><td class="nav-link-hover"><a href="episode/05.html" class="nav-link fs-5">第5話</a></tr><tr></td><td class="nav-link-hover"><a href="episode/06.html" class="nav-link fs-5">第6話</a></td><td class="nav-link-hover"><a href="episode/07.html" class="nav-link fs-5">第7話</a></td><td class="nav-link-hover"><a href="episode/08.html" class="nav-link fs-5">第8話</a></td><td class="nav-link-hover"><a href="episode/09.html" class="nav-link fs-5">第9話</a></td><td class="nav-link-hover"><a href="episode/10.html" class="nav-link fs-5">第10話</a></td></tr><tr><td class="nav-link-hover"><a href="episode/11.html" class="nav-link fs-5">第11話</a></td><td class="nav-link-hover"><a href="episode/12.html" class="nav-link fs-5">第12話</a></td><td class="nav-link-hover"><a href="episode/13.html" class="nav-link fs-5">第13話</a></td></tr>';
    }
};
