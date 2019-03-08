
// click the button and change the background to BLUE
$("#color1").on("click", function () {
    $(".container").toggleClass("changeToBlue");
});


// click the button and change the background to YELLOW
$("#color2").on("click", function () {
    $(".container").toggleClass("changeToYellow");
});

// click the button and change the background to RED
$("#color3").on("click", function () {
    $(".container").toggleClass("changeToRed");
});
