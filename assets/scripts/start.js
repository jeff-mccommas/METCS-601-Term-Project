// place all JS code here
function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
}

function vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
}

function vmin(v) {
    return Math.min(vh(v), vw(v));
}

function vmax(v) {
    return Math.max(vh(v), vw(v));
}
console.info(vh(20), Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
console.info(vw(30), Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
console.info(vmin(20));
console.info(vmax(20));
//assignment 3 user prompt
/*jslint browser: true*/
/*global alert, prompt*/
var programConst = {
    welcomeMessage: "Welcome to my Portfolio Website!",
    promptName: "Please enter your name",
    promptInputNumber: "Please enter two numbers sperated by comma. Example: 2, 6",
    invalidNumberInput: "Please input valid numbers",
    sumMessage: "The sum of your two numbers is: ",
    addTwoNumberAgain: "Want to add two numbers again? (yes/no)",
    thanksForUsing: "Thanks for using program.",
    invalidInputForAddMoreNumber: "Please enter yes or no or press cancel.",
    bigNumber: "That is a big number.",
    smallNumber: "That is a small number."
};

function sumTwoNumbers(a, b) {
    "use strict";
    return parseFloat(a) + parseFloat(b);
}

function validateInputNumbers(input) {
    "use strict";
    if (input.length === 2 && input[0] && input[1] && !isNaN(input[0]) && !isNaN(input[1])) {
        return true;
    }
    return false;
}

function welcomeMessage() {
    "use strict";
    alert(programConst.welcomeMessage);
}

function showPromptBox(message) {
    "use strict";
    return prompt(message);
}

function showWelcome() {
    "use strict";
    welcomeMessage();
}

function askUserName() {
    "use strict";
    var personName = showPromptBox(programConst.promptName);
    alert("Welcome " + personName + "!");
}

function performAdditionOfTwoNumber(dontPromptContinue) {
    "use strict";
    var numbersInputted = showPromptBox(programConst.promptInputNumber);
    var sum;
    if (numbersInputted !== null) {
        numbersInputted = numbersInputted.split(",");
        if (validateInputNumbers(numbersInputted)) {
            sum = sumTwoNumbers(numbersInputted[0], numbersInputted[1]);
            alert(programConst.sumMessage + sum);
            if (sum > 10) {
                alert(programConst.bigNumber);
            } else {
                alert(programConst.smallNumber);
            }
        } else {
            alert(programConst.invalidNumberInput);
            performAdditionOfTwoNumber(true);
        }
        if (!dontPromptContinue) {
            wantToPerformMoreAddition();
        }
    }
}

function wantToPerformMoreAddition() {
    "use strict";
    var result = showPromptBox(programConst.addTwoNumberAgain);
    if (result === "yes") {
        performAdditionOfTwoNumber();
    } else if (result === "no") {
        alert(programConst.thanksForUsing);
    } else if (result !== null) {
        alert(programConst.invalidInputForAddMoreNumber);
        wantToPerformMoreAddition();
    }
}

function startProgram() {
    "use strict";
    showWelcome();
    askUserName();
    performAdditionOfTwoNumber();
}