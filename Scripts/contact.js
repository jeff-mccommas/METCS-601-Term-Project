function contact() {// Add the novalidate attribute when the JS loads
    var forms = document.querySelectorAll('.validate');
    for (var i = 0; i < forms.length; i++) {
        forms[i].setAttribute('novalidate', true);
    }


// Listen to all blur events
    document.addEventListener('blur', function (event) {

        // Only run if the field is in a form to be validated
        if (!event.target.form.classList.contains('validate')) return;

        // Validate the field
        var error = event.target.validity;
        console.log(error);

    }, true);
}