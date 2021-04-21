window.onload = function() {
    if (window.innerWidth < window.innerHeight * 0.74) {
        let cards = document.getElementsByClassName("card");
        cards.item(0).className = "card m-3 p-0 mx-auto d-block";
        for (let i = 1; i < cards.length; i++) {
            cards.item(i).className = "card m-3 p-0 mx-auto d-block link-disabled";
        }
    }
}

window.onresize = function() {
    if (window.innerWidth < window.innerHeight * 0.74) {
        let cards = document.getElementsByClassName("card");
        cards.item(0).className = "card m-3 p-0 mx-auto d-block";
        for (let i = 1; i < cards.length; i++) {
            cards.item(i).className = "card m-3 p-0 mx-auto d-block link-disabled";
        }
    } else {
        let cards = document.getElementsByClassName("card");
        cards.item(0).className = "card m-3 p-0 col";
        for (let i = 1; i < cards.length; i++) {
            cards.item(i).className = "card m-3 p-0 col link-disabled";
        }
    }
}