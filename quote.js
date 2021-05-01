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
    yu: false,
    ayumu: false,
    kasumi: false,
    shizuku: false,
    karin: false,
    ai: false,
    kanata: false,
    setsuna: false,
    emma: false,
    rina: false,
    nana: false,
    president: false,
    hanpen: false,
    other: false
}

function displayOnly(name) {
    let quotes = document.getElementsByClassName(name);
    let allQuotes = document.getElementsByTagName("p");
    let breaks = document.getElementById("main-contents").getElementsByTagName("br");
    let cards = document.getElementsByClassName("card p-0");

    for (i = 0; i < allQuotes.length; i++) {
        allQuotes.item(i).style.display = "none";
    }
    for (i = 0; i < breaks.length; i++) {
        breaks.item(i).style.display = "none";
    }
    for (i = 0; i < cards.length; i++) {
        cards.item(i).style.display = "none";
    }
    for (i = 0; i < quotes.length; i++) {
        quotes.item(i).style.display = "block";
    }
    for (let buttonState in buttonStates) {
        buttonState = false;
    }
    buttonStates[name] = true;
}

function displayAll() {
    let allQuotes = document.getElementsByTagName("p");
    let breaks = document.getElementById("main-contents").getElementsByTagName("br");
    let cards = document.getElementsByClassName("card p-0");

    for (i = 0; i < allQuotes.length; i++) {
        allQuotes.item(i).style.display = "block";
    }
    for (i = 0; i < breaks.length; i++) {
        breaks.item(i).style.display = "block";
    }
    for (i = 0; i < cards.length; i++) {
        cards.item(i).style.display = "block";
    }
    for (let buttonState in buttonStates) {
        buttonState = false;
    }
}