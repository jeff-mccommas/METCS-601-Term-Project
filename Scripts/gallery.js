
$(function () {
    function hideAllImages() {
        $(".galleryimages img").css("display", "none");
    }
    function showAllImages() {
        $(".galleryimages img").css("display", "inherit");
    }
    function showEvenImages() {
        $(".galleryimages img:even").fadeIn(1500);
    }
    function showOddImages() {
        $(".galleryimages img:odd").fadeIn(1500);
    }
    function rightShift() {
        $(".galleryimages img:last").parent().prepend($(".galleryimages img:last"));
    }
    function leftShift() {
        $(".galleryimages img:first").parent().append($(".galleryimages img:first"));
    }
    $("button#hide").click((function () {
        hideAllImages();
    }));
    $("button#show").click((function () {
        showAllImages();
    }));
    $("button#even").click((function () {
        hideAllImages();
        showEvenImages();
    }));
    $("button#odd").click((function () {
        hideAllImages();
        showOddImages();
    }));
    $("button#rightshift").click((function () {
        showAllImages();
        rightShift();
    }));
    $("button#leftshift").click((function () {
        showAllImages();
        leftShift();
    }));
    $("document").ready(function () {
        $(".galleryimages img").addClass("wrappedElement");
    });
});