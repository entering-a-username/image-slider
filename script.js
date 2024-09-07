(function() {
    const next = document.getElementById("nextID");
    const previous = document.getElementById("prevID");
    const images = [
        "bg1.jpg", "bg2.webp", "bg4.jpg", "bg5.jpg", "bg6.png", "bg7.jpg",
    ];

    let counter = 0;

    next.addEventListener("click", function() {
        counter++;
        if (counter > images.length - 1){counter = 0}
        document.body.style.backgroundImage = `url('img/${images[counter]}')`;

    });

    previous.addEventListener("click", function() {
        counter--;
        if (counter < 0) {counter = images.length - 1};
        document.body.style.backgroundImage = `url('img/${images[counter]}')`;
    });


})();