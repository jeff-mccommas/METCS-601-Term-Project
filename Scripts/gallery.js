$(function () {
    $("button#hide").click((function () {
        const div = document.getElementById("grid");
        const images = document.getElementsByTagName('img')
        $("img").fadeOut(1500);
        $("img").fadeIn(1500);


    }))
});
$(function () {
    $("button#even").click((function () {
        const div = document.getElementById("grid");
        const images = document.getElementsByTagName('img')
        $( "img:even" ).css( "border 1 px solid", "#bbf" );


    }))
});
