function sendmail() {
    var current = new Date();
    var templateParams = {
        firstname: document.getElementById('firstName').value,
        lastname: document.getElementById('lastName').value,
        email: document.getElementById('emailInfo').value,
        message: document.getElementById('formMessage').value,
        datetime : current.toLocaleString(),
    };

    emailjs.send('service_acrf4ba', 'template_yx5m4qr', templateParams, 'user_fT6t8t1EZhOQK2Kk7XaQu')
    document.getElementById("myForm").reset();
}