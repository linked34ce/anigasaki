window.onload = function() {
    let titleClassName = document.getElementById("title").className;
    if (window.innerWidth < window.innerHeight * 0.74) {
        document.getElementById("thumbnail").style.width = "80%";
        if (titleClassName === "card-title text-light text-nowrap") {
            titleClassName = "card-title text-light text-nowrap fs-6";
        } else {
            titleClassName = "card-title text-dark text-nowrap fs-6";
        }
    }
}

window.onresize = function() {
    let titleClassName = document.getElementById("title").className;
    if (window.innerWidth < window.innerHeight * 0.74) {
        document.getElementById("thumbnail").style.width = "80%";
        if (titleClassName === "card-title text-light text-nowrap") {
            titleClassName = "card-title text-light text-nowrap fs-6";
        } else {
            titleClassName = "card-title text-dark text-nowrap fs-6";
        }
    } else {
        document.getElementById("thumbnail").style.width = "26rem";
        if (titleClassName === "card-title text-light text-nowrap fs-6") {
            titleClassName = "card-title text-light text-nowrap";
        } else {
            titleClassName = "card-title text-dark text-nowrap";
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

let isOpeningPressed = false;
let isEndingPressed = false;

function openAccordion(isOpening) {
    if (isOpening) {
        if (!isOpeningPressed) {
            document.getElementById("op-expansion").style.animation = "expand 500ms ease 100ms 1 normal none running";
            setTimeout(minusToPlus, 350);
            isOpeningPressed = true;
        } else {
            setTimeout(plusToMinus, 350);
            document.getElementById("op-expansion").style.animation = "collapse 500ms ease 100ms 1 normal none running";
            isOpeningPressed = false;
        }
    } else {
        if (!isEndingPressed) {
            document.getElementById("ed-expansion").style.animation = "expand 500ms ease 100ms 1 normal none running";
            setTimeout(minusToPlus, 350);
            isEndingPressed = true;
        } else {
            setTimeout(plusToMinus, 350);
            document.getElementById("ed-expansion").style.animation = "collapse 500ms ease 100ms 1 normal none running";
            isEndingPressed = false;
        }
    }
}

function minusToPlus() {
    document.getElementById("op-expansion").innerHTML = "-"
    document.getElementById("op-expansion").className = "minus";
}

function plusToMinus() {
    document.getElementById("op-expansion").innerHTML = "+"
    document.getElementById("op-expansion").className = "plus";
}