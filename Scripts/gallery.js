$(function () {
    $("button#hide").click((function () {
        const div = document.getElementById("grid");
        const images = document.getElementsByTagName('img')
        $("img").hide("fast");
        $("img").show(3000);


    }))
});
$(function () {
    $("button#even").click((function () {
        const div = document.getElementById("grid");
        const images = document.getElementsByTagName('img')
        for(let i = 0; i < images.length; i++){
            let image = images[i];
            console.log(i)
        };



    }))
});
