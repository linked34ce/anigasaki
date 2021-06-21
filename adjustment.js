window.addEventListener("DOMContentLoaded", adjustHomePage);

let queue = null;

window.addEventListener("resize", function() {
    clearTimeout(queue);
    queue = setTimeout(adjustHomePage, 200);
});

function adjustHomePage() {
    let cards = document.getElementsByClassName("card");
    let cardTitles = document.getElementsByClassName("card-title text-center");

    if (window.innerWidth < window.innerHeight * 0.74) {
        for (let i = 0; i < 6; i++) {
            cards.item(i).className = "card m-3 p-0 mx-auto d-block";
            cards.item(i).style.width = "75%";
        }
        for (let i = 6; i < cards.length; i++) {
            cards.item(i).className = "card m-3 p-0 mx-auto d-block link-disabled";
            cards.item(i).style.width = "75%";
        }
    } else {
        for (let i = 0; i < 6; i++) {
            cards.item(i).className = "card m-3 p-0 col";
            cards.item(i).style.width = "18rem";
        }
        for (let i = 6; i < cards.length; i++) {
            cards.item(i).className = "card m-3 p-0 col link-disabled";
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
}