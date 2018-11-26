
$(function() {
    $("button.filter-btn").click((function () {
        const grid = document.getElementById("grid");
        const images = document.getElementsByTagName('img')
        $("img").fadeToggle("fast");

    }))
    });


// $(document).ready(function(){
//     $("button").click(function(){
//         $("#div1").fadeToggle();
//         $("#div2").fadeToggle("slow");
//         $("#div3").fadeToggle(3000);
//     });
// });
$("p").hide();