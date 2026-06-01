document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica para Ocultar/Mostrar Senha
    const togglePasswordButton = document.querySelector('#togglePassword');
    const passwordInput = document.querySelector('#password');
    const eyeIcon = document.querySelector('#eyeIcon');

    togglePasswordButton.addEventListener('click', () => {
        // Alterna o tipo do input entre 'password' e 'text'
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Altera o ícone do olho
        if (type === 'text') {
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        } else {
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        }
    });

    // 2. Lógica de Submissão do Formulário (Validação Inicial)
    const loginForm = document.querySelector('#loginForm');
    
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o recarregamento padrão da página
        
        const usernameValue = document.querySelector('#username').value.trim();
        const passwordValue = passwordInput.value;
        const rememberMeChecked = document.querySelector('#rememberMe').checked;

        // Validação simples
        if (!usernameValue || !passwordValue) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        console.log('Tentativa de login enviada:', {
            usuario: usernameValue,
            lembrar: rememberMeChecked
            // Evite dar console.log na senha em produção por motivos de segurança
        });

        window.location.href = "../system/medcare_pro.html";

       
    });
});