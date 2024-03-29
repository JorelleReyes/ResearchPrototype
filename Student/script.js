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
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (!/^\d+$/.test(username)) {
            alert('Username must contain numbers only.');
            document.getElementById('username').value = '';
            return;
        }

        if (username !== '20221136692') {
            alert('Invalid username. Please enter a valid username.');
            document.getElementById('username').value = '';
            return;
        }

        if (password === '052505') {
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
