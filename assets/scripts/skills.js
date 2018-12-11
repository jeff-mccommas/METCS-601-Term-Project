/*jslint browser:true*/
var skillsObject = [{
    name: "HTML5, CSS3",
    years: 7,
    rating: 10
}, {
    name: "JavaScript, jQuery",
    years: 7,
    rating: 8
}, {
    name: "<b>Adobe CC</b>: Photoshop, Illustrator, inDesign, Edge, Audition, Premiere",
    years: 2,
    rating: 7
}, {
    name: "<b>JS Frameworks</b> BackboneJS &amp; Angular2+ React Vue",
    years: 4,
    rating: 8
}, {
    name: "<b>eCommerce:</b> Magento, Prestashop, osCommerce",
    years: 3,
    rating: 9
}, {
    name: "<b>CMS:</b> WordPress, Drupal, Joomla",
    years: 2,
    rating: 7
}, {
    name: "<b>OSs</b>: Win &amp; Mac,Linux",
    years: 7,
    rating: 10
}, {
    name: "<b>UX</b> Balsamiq Mockups,Keynote,HTML_CodeSniffer",
    years: 5,
    rating: 9
}, {
    name: "<b>Responsive Development</b> Bootstrap4, Foundation5",
    years: 6,
    rating: 9
}, {
    name: "<b>IDE</b> WebStorm, Visual Studio,Pycharm",
    years: 4,
    rating: 10
}];

function animateProgress(elem, tillWhat) {
    "use strict";
    var width = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (width >= tillWhat) {
            clearInterval(id);
        } else {
            width += 1;
            elem.style.setProperty("width", width + "%");
        }
    }
}

function animateSkillsProgress() {
    "use strict";
    var skillBars = document.getElementsByClassName("skills-ratings");
    var i = 0;
    while (i < skillBars.length) {
        var ratingValue = skillBars[i].getAttribute('data-rating');
        var valuePercentToGoTo = (parseFloat(ratingValue) * 100) / 10;
//        console.log(valuePercentToGoTo);
        animateProgress(skillBars[i], valuePercentToGoTo);
        i++;
    }

}

function buildSkills() {
    "use strict";
    var skillsContainer = document.getElementById("myskills");
    var html = "";
    skillsObject.forEach(function(item) {
        html += '<div class="item">';
        html += '<h3 class="level-title">' + item.name + '<span class="level-label">' + item.years + ' years</span></h3>';
        html += '<div class="level-bar">';
        html += "<div class='level-bar-inner skills-ratings'  data-rating='" + item.rating + "' >";
        html += '</div>';
        html += '</div>';
        html += '</div>';
    });

//    var htmlLeft = '<div class="left-half">';
//    htmlLeft += '<article>';
//    htmlLeft += '<h3>Software Knowledge</h3>';
//    htmlLeft += '<ul class="skills-list">';
//    var htmlRight = '<div class="right-half">';
//    htmlRight += '<article class="progress-section">';
//    htmlRight += '<h3>Ratings</h3>';
//    skillsObject.forEach(function(item) {
//        htmlLeft += '<li>' + item.name + '</li>';
//        htmlRight += "<div class='progress skills-ratings' data-rating='" + item.rating + "'></div>";
//    });
//    htmlLeft += '</ul>';
//    htmlLeft += '</article>';
//    htmlLeft += '</div>';
//    htmlRight += '</article>';
//    htmlRight += '</div>';
    skillsContainer.innerHTML = html;
    animateSkillsProgress();
}
buildSkills();