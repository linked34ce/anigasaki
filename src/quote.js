window.addEventListener("DOMContentLoaded", () => {
    adjustEpisodePage();

    let queue = null;
    window.addEventListener("resize", () => {
        clearTimeout(queue);
        queue = setTimeout(adjustEpisodePage, 200);
    });

    function adjustEpisodePage() {
        let title = document.getElementById("title");
        let buttons = document.getElementById("buttons");
        let episodes = document.getElementById("episodes");
        let episodeTable = document.getElementById("episode-table");
        let episodeLinks = episodes.getElementsByTagName("a");
        let mainContent = document.getElementById("main-contents");

        if (window.innerWidth < window.innerHeight * 0.74) {
            document.getElementById("thumbnail").style.width = "80%";
            if (title.className === "card-title text-white text-nowrap") {
                title.className = "card-title text-white text-nowrap fs-6";
            } else if (
                title.className === "card-title text-black text-nowrap"
            ) {
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

        if (window.innerWidth < 370) {
            episodes.innerHTML =
                '<tr><td class="nav-link-hover"><a href="01.html" class="nav-link fs-6">第1話</a></td><td class="nav-link-hover"><a href="02.html" class="nav-link fs-6">第2話</a></td></tr><tr><td class="nav-link-hover"><a href="03.html" class="nav-link fs-6">第3話</a></td><td class="nav-link-hover"><a href="04.html" class="nav-link fs-6">第4話</a></td></tr><tr><td class="nav-link-hover"><a href="05.html" class="nav-link fs-6">第5話</a></td><td class="nav-link-hover"><a href="06.html" class="nav-link fs-6">第6話</a></td></tr><tr><td class="nav-link-hover"><a href="07.html" class="nav-link fs-6">第7話</a></td><td class="nav-link-hover"><a href="08.html" class="nav-link fs-6">第8話</a></td></tr><tr><td class="nav-link-hover"><a href="09.html" class="nav-link fs-6">第9話</a></td><td class="nav-link-hover"><a href="10.html" class="nav-link fs-6">第10話</a></td></tr><tr><td class="nav-link-hover"><a href="11.html" class="nav-link fs-6">第11話</a></td><td class="nav-link-hover"><a href="12.html" class="nav-link fs-6">第12話</a></td></tr><tr><td class="nav-link-hover"><a href="13.html" class="nav-link fs-6">第13話</a></td></tr>';
            if (window.innerHeight < 605) {
                episodeTable.className =
                    "table table-sm table-dark border-white";
            }
        } else if (window.innerWidth < 570) {
            episodes.innerHTML =
                '<tr><td class="nav-link-hover"><a href="01.html" class="nav-link fs-5">第1話</a></td><td class="nav-link-hover"><a href="02.html" class="nav-link fs-5">第2話</a></td><td class="nav-link-hover"><a href="03.html" class="nav-link fs-5">第3話</a></td></tr><tr><td class="nav-link-hover"><a href="04.html" class="nav-link fs-5">第4話</a></td><td class="nav-link-hover"><a href="05.html" class="nav-link fs-5">第5話</a></td><td class="nav-link-hover"><a href="06.html" class="nav-link fs-5">第6話</a></td></tr><tr><td class="nav-link-hover"><a href="07.html" class="nav-link fs-5">第7話</a></td><td class="nav-link-hover"><a href="08.html" class="nav-link fs-5">第8話</a></td><td class="nav-link-hover"><a href="09.html" class="nav-link fs-5">第9話</a></td></tr><tr><td class="nav-link-hover"><a href="10.html" class="nav-link fs-5">第10話</a></td><td class="nav-link-hover"><a href="11.html" class="nav-link fs-5">第11話</a></td><td class="nav-link-hover"><a href="12.html" class="nav-link fs-5">第12話</a></td></tr><tr><td class="nav-link-hover"><a href="13.html" class="nav-link fs-5">第13話</a></td></tr>';
        } else {
            episodes.innerHTML =
                '<tr><td class="nav-link-hover"><a href="01.html" class="nav-link fs-5">第1話</a></td><td class="nav-link-hover"><a href="02.html" class="nav-link fs-5">第2話</a></td><td class="nav-link-hover"><a href="03.html" class="nav-link fs-5">第3話</a></td><td class="nav-link-hover"><a href="04.html" class="nav-link fs-5">第4話</a></td><td class="nav-link-hover"><a href="05.html" class="nav-link fs-5">第5話</a></tr><tr></td><td class="nav-link-hover"><a href="06.html" class="nav-link fs-5">第6話</a></td><td class="nav-link-hover"><a href="07.html" class="nav-link fs-5">第7話</a></td><td class="nav-link-hover"><a href="08.html" class="nav-link fs-5">第8話</a></td><td class="nav-link-hover"><a href="09.html" class="nav-link fs-5">第9話</a></td><td class="nav-link-hover"><a href="10.html" class="nav-link fs-5">第10話</a></td></tr><tr><td class="nav-link-hover"><a href="11.html" class="nav-link fs-5">第11話</a></td><td class="nav-link-hover"><a href="12.html" class="nav-link fs-5">第12話</a></td><td class="nav-link-hover"><a href="13.html" class="nav-link fs-5">第13話</a></td></tr>';
        }

        for (i = 0; i < episodeLinks.length; i++) {
            if (episodeLinks.item(i).href === location.href) {
                episodeLinks.item(i).parentElement.id = "in-this-page";
                episodeLinks.item(i).parentElement.innerHTML =
                    '<a class="nav-link fs-5">第' + (i + 1) + "話</a>";
            }
        }
    }

    let characters = [
        "yu",
        "ayumu",
        "kasumi",
        "shizuku",
        "karin",
        "ai",
        "kanata",
        "setsuna",
        "emma",
        "rina",
        "shioriko",
        "mia",
        "lanzhu",
        "nana",
        "dark-shizuku",
        "club-president",
        "hanpen",
        "iroha",
        "kyoko",
        "asagi",
        "haruka",
        "christina",
        "kasane",
        "himeno",
        "misaki",
        "vice-president",
        "secretary",
        "other",
    ];

    for (let character of characters) {
        if (document.getElementById(character)) {
            document.getElementById(character).addEventListener("click", () => {
                let elements =
                    document.getElementById("main-contents").children;

                for (let element of elements) {
                    if (element.className === character) {
                        element.style.display = "block";
                    } else {
                        element.style.display = "none";
                    }
                }
            });
        }
    }

    document.getElementById("songs").addEventListener("click", () => {
        let elements = document.getElementById("main-contents").children;
        let lyrics = document.getElementsByClassName("lyric");

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

    document.getElementById("all").addEventListener("click", () => {
        let elements = document.getElementById("main-contents").children;
        let lyrics = document.getElementsByClassName("lyric");

        for (let element of elements) {
            element.style.display = "block";
        }
        for (let lyric of lyrics) {
            lyric.style.display = "block";
        }
    });

    let accordionStates = [false, false];

    if (document.getElementById("opening")) {
        document.getElementById("opening").addEventListener("click", () => {
            openAccordion("op-expansion", 0);
        });
    }

    if (document.getElementById("ending")) {
        document.getElementById("ending").addEventListener("click", () => {
            openAccordion("ed-expansion", 1);
        });
    }

    function openAccordion(id, index) {
        if (!accordionStates[index]) {
            document.getElementById(id).style.animation =
                "350ms ease-in 0s 1 normal none running expand";
            setTimeout(() => {
                document.getElementById(id).innerHTML = "-";
                document.getElementById(id).className = "minus";
            }, 175);
            accordionStates[index] = true;
        } else {
            document.getElementById(id).style.animation =
                "350ms ease-out 0s 1 normal none running collapse";
            setTimeout(() => {
                document.getElementById(id).innerHTML = "+";
                document.getElementById(id).className = "plus";
            }, 175);
            accordionStates[index] = false;
        }
        setTimeout(() => {
            document.getElementById(id).style.animation = "";
        }, 300);
    }
});
