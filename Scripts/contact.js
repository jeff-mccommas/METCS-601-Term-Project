function contact() {
    const name = document.forms["RegForm"]["Name"];

    if (firstName.value === "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }
    if (facilitator.value === "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    // if (lastName.value === "") {
    //     window.alert("Please enter your address.");
    //     name.focus();
    //     return false;
    // }
    //
    // if (email.value === "") {
    //     window.alert("Please enter a valid e-mail address.");
    //     email.focus();
    //     return false;
    // }
    //
    // if (email.value.indexOf("@", 0) < 0) {
    //     window.alert("Please enter a valid e-mail address.");
    //     email.focus();
    //     return false;
    // }
    //
    // if (email.value.indexOf(".", 0) < 0) {
    //     window.alert("Please enter a valid e-mail address.");
    //     email.focus();
    //     return false;
    // }
    //
    // if (phone.value == "") {
    //     window.alert("Please enter your telephone number.");
    //     phone.focus();
    //     return false;
    // }
    //
    // if (password.value == "") {
    //     window.alert("Please enter your password");
    //     password.focus();
    //     return flase;
    // }
    //
    // if (what.selectedIndex < 1) {
    //     alert("Please enter your course.");
    //     what.focus();
    //     return false;
    // }

    return true;
}