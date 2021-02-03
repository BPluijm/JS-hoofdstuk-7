const username = document.getElementById('username');
const password = document.getElementById('password');

const usernameWarning = document.getElementById('username-warning');
const passwordWarning = document.getElementById('password-warning');

username.addEventListener('keyup', checkUsername);
password.addEventListener('keyup', checkPassWord);

function checkUsername(e) {
    if (e.target.value.includes('@')) {
        usernameWarning.textContent = 'Gebruikersnaam mag geen @ bevatten';
    } else if (e.target.value.includes('#')) {
        usernameWarning.textContent = 'Gebruikersnaam mag geen # bevatten';
    } else {
        usernameWarning.textContent = '';
    }
}

function checkPassWord (e) {
   if (e.target.value === '' || e.target.value.length > 6) {
       passwordWarning.textContent = '';
    } else {
       passwordWarning.textContent = 'Wachtwoord is te kort, gebruik minimaal 6 tekens';
    }
}