document.addEventListener('DOMContentLoaded', function () {
    const forgotPasswordLink = document.getElementById('forgotPassword');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');

    forgotPasswordLink.addEventListener('click', function (e) {
        e.preventDefault();
        forgotPasswordForm.style.display = 'block';
    });

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const password = document.getElementById('password').value;

        if (password === '2024') {
            window.location.href = 'Homepage/Homepage1.html';
        } else {
            alert('Invalid credentials. Please try again.');
            document.getElementById("password").value = ""
        }
    });

    const sendResetLinkButton = document.getElementById('sendResetLink');
    sendResetLinkButton.addEventListener('click', function (e) {
        e.preventDefault();
        alert('The reset link has been sent to your E-Mail')
        window.location.href = 'login.html';
    });
});
