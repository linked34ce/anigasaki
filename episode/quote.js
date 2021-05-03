window.addEventListener("DOMContentLoaded", adjustEpisodePage);

let queue = null;

window.addEventListener("resize", function() {
    clearTimeout(queue);
    queue = setTimeout(adjustEpisodePage, 200);
});

function adjustEpisodePage() {
    let titleElement = document.getElementById("title");
    if (window.innerWidth < window.innerHeight * 0.74) {
        document.getElementById("thumbnail").style.width = "80%";
        if (titleElement.className === "card-title text-light text-nowrap") {
            titleElement.className = "card-title text-light text-nowrap fs-6";
        } else if (titleElement.className === "card-title text-dark text-nowrap") {
            titleElement.className = "card-title text-dark text-nowrap fs-6";
        }
    } else {
        document.getElementById("thumbnail").style.width = "26rem";
        if (titleElement.className === "card-title text-light text-nowrap fs-6") {
            titleElement.className = "card-title text-light text-nowrap";
        } else if (titleElement.className === "card-title text-dark text-nowrap fs-6") {
            titleElement.className = "card-title text-dark text-nowrap";
        }
    }

}

let buttonStates = {
    yu: true,
    ayumu: true,
    kasumi: true,
    shizuku: true,
    karin: true,
    ai: true,
    kanata: true,
    setsuna: true,
    emma: true,
    rina: true,
    nana: true,
    president: true,
    hanpen: true,
    other: true,
    song: true
}

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
    for (let key in buttonStates) {
        buttonStates[key] = false;
    }
    buttonStates[name] = true;
}

function displayOnlySongs() {
    let allQuotes = document.getElementsByTagName("p");
    let breaks = document.getElementById("main-contents").getElementsByTagName("br");
    let songs = document.getElementsByClassName("card p-0");
    let lylics = document.getElementsByClassName("lylic");

    for (i = 0; i < allQuotes.length; i++) {
        allQuotes.item(i).style.display = "none";
    }
    for (i = 0; i < breaks.length; i++) {
        breaks.item(i).style.display = "none";
    }
    for (i = 0; i < songs.length; i++) {
        songs.item(i).style.display = "block";
    }
    for (i = 0; i < lylics.length; i++) {
        lylics.item(i).style.display = "block";
    }

    for (let key in buttonStates) {
        buttonStates[key] = false;
    }
    buttonStates["song"] = true;
}

function displayAll() {
    let allQuotes = document.getElementsByTagName("p");
    let breaks = document.getElementById("main-contents").getElementsByTagName("br");
    let songs = document.getElementsByClassName("card p-0");

    for (i = 0; i < allQuotes.length; i++) {
        allQuotes.item(i).style.display = "block";
    }
    for (i = 0; i < breaks.length; i++) {
        breaks.item(i).style.display = "block";
    }
    for (i = 0; i < songs.length; i++) {
        songs.item(i).style.display = "block";
    }
    for (let key in buttonStates) {
        buttonStates[key] = true;
    }
}

let accordionStates = {
    opening: false,
    ending: false
}

function openAccordion(isOpening) {
    if (isOpening) {
        if (!accordionStates["opening"]) {
            document.getElementById("op-expansion").style.animation = "500ms ease 100ms 1 normal none running expand";
            setTimeout(plusToMinus, 350, isOpening);
            accordionStates["opening"] = true;
        } else {
            document.getElementById("op-expansion").style.animation = "500ms ease 100ms 1 normal none running collapse";
            setTimeout(minusToPlus, 350, isOpening);
            accordionStates["opening"] = false;
        }
    } else {
        if (!accordionStates["ending"]) {
            document.getElementById("ed-expansion").style.animation = "500ms ease 100ms 1 normal none running expand";
            setTimeout(plusToMinus, 350, isOpening);
            accordionStates["ending"] = true;
        } else {
            document.getElementById("ed-expansion").style.animation = "500ms ease 100ms 1 normal none running collapse";
            setTimeout(minusToPlus, 350, isOpening);
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
}

function minusToPlus(isOpening) {
    if (isOpening) {
        document.getElementById("op-expansion").innerHTML = "+"
        document.getElementById("op-expansion").className = "plus";
    } else if (!isOpening) {
        document.getElementById("ed-expansion").innerHTML = "+"
        document.getElementById("ed-expansion").className = "plus";
    }
}