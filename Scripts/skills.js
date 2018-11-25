/*jslint browser:true*/
var barsMax = 400;
var skillsObject = [{
    name: "HTML5, CSS3",
    rating: 10
}, {
    name: "JavaScript, jQuery",
    rating: 8
}, {
    name: "<b>Adobe CC</b>: Photoshop, Illustrator, inDesign, Edge, Audition, Premiere",
    rating: 7
}, {
    name: "<b>JS Frameworks</b> BackboneJS &amp; Angular2+ React Vue",
    rating: 8
}, {
    name: "<b>eCommerce:</b> Magento, Prestashop, osCommerce",
    rating: 9
}, {
    name: "<b>CMS:</b> WordPress, Drupal, Joomla",
    rating: 7
}, {
    name: "<b>OSs</b>: Win &amp; Mac,Linux",
    rating: 10
}, {
    name: "<b>UX</b> Balsamiq Mockups,Keynote,HTML_CodeSniffer",
    rating: 9
}, {
    name: "<b>Responsive Development</b> Bootstrap4, Foundation5",
    rating: 9
}, {
    name: "<b>IDE</b> WebStorm, Visual Studio,Pycharm",
    rating: 10
}];

function animateProgress(elem, tillWhat) {
    "use strict";
    var width = 10;
    var id = setInterval(frame, 1);
    function frame() {
        if (width >= (tillWhat * 10)) {
            clearInterval(id);
        } else {
            width += 1;
            elem.style.setProperty("--p", -(barsMax - width) + "px");
        }
    }
}

function animateSkillsProgress() {
    "use strict";
    var skillBars = document.getElementsByClassName("skills-ratings");
    var i = 0;
    while (i < skillBars.length) {
        var ratingValue = skillBars[i].getAttribute('data-rating');
        var valuePercentToGoTo = (parseFloat(ratingValue) * barsMax) / 100;
        animateProgress(skillBars[i], valuePercentToGoTo);
        i++;
    }

}

function buildSkills() {
    "use strict";
    var skillsContainer = document.getElementById("myskills");
    var htmlLeft = '<div class="left-half">';
    htmlLeft += '<article>';
    htmlLeft += '<h3>Software Knowledge</h3>';
    htmlLeft += '<ul class="skills-list">';
    var htmlRight = '<div class="right-half">';
    htmlRight += '<article class="progress-section">';
    htmlRight += '<h3>Ratings</h3>';
    skillsObject.forEach(function(item) {
        htmlLeft += '<li>' + item.name + '</li>';
        htmlRight += "<div class='progress skills-ratings' data-rating='" + item.rating + "'></div>";
    });
    htmlLeft += '</ul>';
    htmlLeft += '</article>';
    htmlLeft += '</div>';
    htmlRight += '</article>';
    htmlRight += '</div>';
    skillsContainer.innerHTML = htmlLeft + htmlRight;
    animateSkillsProgress();
}
buildSkills();