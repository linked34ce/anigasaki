window.addEventListener("DOMContentLoaded", adjustEpisodePage);

let queue = null;

window.addEventListener("resize", function() {
    clearTimeout(queue);
    queue = setTimeout(adjustEpisodePage, 200);
});

function adjustEpisodePage() {
    let titleElement = document.getElementById("title");
    let buttons = document.getElementById("buttons");
    let episodes = document.getElementById("episodes");
    let episodeTable = document.getElementById("episode-table");
    let episodeLinks = episodes.getElementsByTagName("a");

    if (window.innerWidth < window.innerHeight * 0.74) {
        document.getElementById("thumbnail").style.width = "80%";
        if (titleElement.className === "card-title text-white text-nowrap") {
            titleElement.className = "card-title text-white text-nowrap fs-6";
        } else if (titleElement.className === "card-title text-black text-nowrap") {
            titleElement.className = "card-title text-black text-nowrap fs-6";
        }
        buttons.className = "row row-cols-auto g-0";
    } else {
        document.getElementById("thumbnail").style.width = "26rem";
        if (titleElement.className === "card-title text-white text-nowrap fs-6") {
            titleElement.className = "card-title text-white text-nowrap";
        } else if (titleElement.className === "card-title text-black text-nowrap fs-6") {
            titleElement.className = "card-title text-black text-nowrap";
        }
        buttons.className = "row row-cols-auto d-block g-0";
    }

    if (window.innerWidth < 370) {
        episodes.innerHTML = '<tr><td class="nav-link-hover"><a href="01.html" class="nav-link fs-6">第1話</a></td><td class="nav-link-hover"><a href="02.html" class="nav-link fs-6">第2話</a></td></tr><tr><td class="nav-link-hover"><a href="03.html" class="nav-link fs-6">第3話</a></td><td class="nav-link-hover"><a href="04.html" class="nav-link fs-6">第4話</a></td></tr><tr><td class="nav-link-hover"><a href="05.html" class="nav-link fs-6">第5話</a></td><td class="nav-link-hover"><a href="06.html" class="nav-link fs-6">第6話</a></td></tr><tr><td class="nav-link-hover"><a href="07.html" class="nav-link fs-6">第7話</a></td><td class="nav-link-hover"><a href="08.html" class="nav-link fs-6">第8話</a></td></tr><tr><td class="nav-link-hover"><a href="09.html" class="nav-link fs-6">第9話</a></td><td class="nav-link-hover"><a href="10.html" class="nav-link fs-6">第10話</a></td></tr><tr><td class="nav-link-hover"><a href="11.html" class="nav-link fs-6">第11話</a></td><td class="nav-link-hover"><a href="12.html" class="nav-link fs-6">第12話</a></td></tr><tr><td class="nav-link-hover"><a href="13.html" class="nav-link fs-6">第13話</a></td></tr>';
        if (window.innerHeight < 605) {
            episodeTable.className = "table table-sm table-dark border-white"
        }
    } else if (window.innerWidth < 570) {
        episodes.innerHTML = '<tr><td class="nav-link-hover"><a href="01.html" class="nav-link fs-5">第1話</a></td><td class="nav-link-hover"><a href="02.html" class="nav-link fs-5">第2話</a></td><td class="nav-link-hover"><a href="03.html" class="nav-link fs-5">第3話</a></td></tr><tr><td class="nav-link-hover"><a href="04.html" class="nav-link fs-5">第4話</a></td><td class="nav-link-hover"><a href="05.html" class="nav-link fs-5">第5話</a></td><td class="nav-link-hover"><a href="06.html" class="nav-link fs-5">第6話</a></td></tr><tr><td class="nav-link-hover"><a href="07.html" class="nav-link fs-5">第7話</a></td><td class="nav-link-hover"><a href="08.html" class="nav-link fs-5">第8話</a></td><td class="nav-link-hover"><a href="09.html" class="nav-link fs-5">第9話</a></td></tr><tr><td class="nav-link-hover"><a href="10.html" class="nav-link fs-5">第10話</a></td><td class="nav-link-hover"><a href="11.html" class="nav-link fs-5">第11話</a></td><td class="nav-link-hover"><a href="12.html" class="nav-link fs-5">第12話</a></td></tr><tr><td class="nav-link-hover"><a href="13.html" class="nav-link fs-5">第13話</a></td></tr>';
    } else {
        episodes.innerHTML = '<tr><td class="nav-link-hover"><a href="01.html" class="nav-link fs-5">第1話</a></td><td class="nav-link-hover"><a href="02.html" class="nav-link fs-5">第2話</a></td><td class="nav-link-hover"><a href="03.html" class="nav-link fs-5">第3話</a></td><td class="nav-link-hover"><a href="04.html" class="nav-link fs-5">第4話</a></td><td class="nav-link-hover"><a href="05.html" class="nav-link fs-5">第5話</a></tr><tr></td><td class="nav-link-hover"><a href="06.html" class="nav-link fs-5">第6話</a></td><td class="nav-link-hover"><a href="07.html" class="nav-link fs-5">第7話</a></td><td class="nav-link-hover"><a href="08.html" class="nav-link fs-5">第8話</a></td><td class="nav-link-hover"><a href="09.html" class="nav-link fs-5">第9話</a></td><td class="nav-link-hover"><a href="10.html" class="nav-link fs-5">第10話</a></td></tr><tr><td class="nav-link-hover"><a href="11.html" class="nav-link fs-5">第11話</a></td><td class="nav-link-hover"><a href="12.html" class="nav-link fs-5">第12話</a></td><td class="nav-link-hover"><a href="13.html" class="nav-link fs-5">第13話</a></td></tr>';
    }

    for (i = 0; i < episodeLinks.length; i++) {
        if (episodeLinks.item(i).href === location.href) {
            episodeLinks.item(i).parentElement.id = "in-this-page";
            episodeLinks.item(i).parentElement.innerHTML = '<a class="nav-link fs-5">第' + (i + 1) + '話</a>';
        }
    }
}

/*
let buttonStates = {
    "yu": true,
    "ayumu": true,
    "kasumi": true,
    "shizuku": true,
    "karin": true,
    "ai": true,
    "kanata": true,
    "setsuna": true,
    "emma": true,
    "rina": true,
    "nana": true,
    "dark-shizuku": true,
    "club-president": true,
    "hanpen": true,
    "iroha": true,
    "kyoko": true,
    "asagi": true,
    "haruka": true,
    "christina": true,
    "kasane": true,
    "himeno": true,
    "misaki": true,
    "vice-president": true,
    "secretary": true,
    "other": true,
    "song": true
}
*/

function displayOnly(name) {
    let quotes = document.getElementsByClassName(name);
    let allQuotes = document.getElementsByTagName("p");
    let breaks = document.getElementById("main-contents").getElementsByTagName("br");
    let songs = document.getElementsByClassName("card p-0");

    for (i = 0; i < allQuotes.length; i++) {
        allQuotes.item(i).style.display = "none";
    }
    for (i = 0; i < breaks.length; i++) {
        breaks.item(i).style.display = "none";
    }
    for (i = 0; i < songs.length; i++) {
        songs.item(i).style.display = "none";
    }
    for (i = 0; i < quotes.length; i++) {
        quotes.item(i).style.display = "block";
    }
}

function displayOnlySongs() {
    let allQuotes = document.getElementsByTagName("p");
    let breaks = document.getElementById("main-contents").getElementsByTagName("br");
    let songs = document.getElementsByClassName("song");
    let lyrics = document.getElementsByClassName("lyric");

    for (i = 0; i < allQuotes.length; i++) {
        allQuotes.item(i).style.display = "none";
    }
    for (i = 0; i < breaks.length; i++) {
        breaks.item(i).style.display = "none";
    }
    for (i = 0; i < songs.length; i++) {
        songs.item(i).style.display = "block";
    }
    for (i = 0; i < lyrics.length; i++) {
        lyrics.item(i).style.display = "block";
    }
}

function displayAll() {
    let allQuotes = document.getElementsByTagName("p");
    let breaks = document.getElementById("main-contents").getElementsByTagName("br");
    let songs = document.getElementsByClassName("song");

    for (i = 0; i < allQuotes.length; i++) {
        allQuotes.item(i).style.display = "block";
    }
    for (i = 0; i < breaks.length; i++) {
        breaks.item(i).style.display = "block";
    }
    for (i = 0; i < songs.length; i++) {
        songs.item(i).style.display = "block";
    }
}

let accordionStates = {
    opening: false,
    ending: false
}

function openAccordion(isOpening) {
    if (isOpening) {
        if (!accordionStates["opening"]) {
            document.getElementById("op-expansion").style.animation = "350ms ease-in 0s 1 normal none running expand";
            setTimeout(plusToMinus, 175, isOpening);
            accordionStates["opening"] = true;
        } else {
            document.getElementById("op-expansion").style.animation = "350ms ease-out 0s 1 normal none running collapse";
            setTimeout(minusToPlus, 175, isOpening);
            accordionStates["opening"] = false;
        }
    } else {
        if (!accordionStates["ending"]) {
            document.getElementById("ed-expansion").style.animation = "350ms ease-in 0s 1 normal none running expand";
            setTimeout(plusToMinus, 175, isOpening);
            accordionStates["ending"] = true;
        } else {
            document.getElementById("ed-expansion").style.animation = "350ms ease-out 0s 1 normal none running collapse";
            setTimeout(minusToPlus, 175, isOpening);
            accordionStates["ending"] = false;
        }
    }
}

function plusToMinus(isOpening) {
    if (isOpening) {
        document.getElementById("op-expansion").innerHTML = "-"
        document.getElementById("op-expansion").className = "minus";
    } else if (!isOpening) {
        document.getElementById("ed-expansion").innerHTML = "-"
        document.getElementById("ed-expansion").className = "minus";
    }
    setTimeout(reset, 300);
}

function minusToPlus(isOpening) {
    if (isOpening) {
        document.getElementById("op-expansion").innerHTML = "+"
        document.getElementById("op-expansion").className = "plus";
    } else if (!isOpening) {
        document.getElementById("ed-expansion").innerHTML = "+"
        document.getElementById("ed-expansion").className = "plus";
    }
    setTimeout(reset, 300);
}

function reset() {
    document.getElementById("op-expansion").style.animation = "";
    document.getElementById("ed-expansion").style.animation = "";
}