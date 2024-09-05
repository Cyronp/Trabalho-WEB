document.addEventListener('DOMContentLoaded', () => {
    const emailField = document.getElementById('email');
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    
    const emailError = document.getElementById('emailError');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    function validateEmail() {
        const emailValue = emailField.value;
        if (!emailValue) {
            emailError.textContent = 'O campo de email é obrigatório.';
            emailField.classList.add('error');
        } else if (!emailField.validity.valid) {
            emailError.textContent = 'Por favor, insira um email válido!';
            emailField.classList.add('error');
        } else {
            emailError.textContent = '';
            emailField.classList.remove('error');
        }
    }

    function validateUsername() {
        const usernameValue = usernameField.value;
        if (!usernameValue) {
            usernameError.textContent = 'O campo de nome é obrigatório.';
            usernameField.classList.add('error');
        } else if (usernameValue.length < 3) {
            usernameError.textContent = 'O nome deve ter pelo menos 3 caracteres.';
            usernameField.classList.add('error');
        } else {
            usernameError.textContent = '';
            usernameField.classList.remove('error');
        }
    }

    function validatePassword() {
        const passwordValue = passwordField.value;
        if (!passwordValue) {
            passwordError.textContent = 'O campo de senha é obrigatório!';
            passwordField.classList.add('error');
        } else if (passwordValue.length < 6)  {
            passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres!';
            passwordField.classList.add('error');
        } else if (!passwordValue.match(/[0-9]/)){
            passwordError.textContent = "Sua senha deve conter numeros!"
        } else if (!passwordValue.match(/[A-Z]/)){
            passwordError.textContent = "Sua senha deve conter um caractere maiusculo!"
        } else if (!passwordValue.match(/[$*&@#!%^&*()-+_=]/)){
            passwordError.textContent = "Sua senha deve conter um caracteres especial!"
        } else {
            passwordError.textContent = '';
            passwordField.classList.remove('error');
        }
        
    }

    emailField.addEventListener('input', validateEmail);
    usernameField.addEventListener('input', validateUsername);
    passwordField.addEventListener('input', validatePassword);

    document.getElementById('loginForm').addEventListener('submit', (event) => {
        validateEmail();
        validateUsername();
        validatePassword();

        if (emailError.textContent || usernameError.textContent || passwordError.textContent) {
            event.preventDefault();
            alert('Corrija os erros antes de enviar o formulário.');
        }
    });
});
