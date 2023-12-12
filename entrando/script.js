function entrar() {
    // Exibir a tela de carregamento
    document.getElementById("loadingContainer").style.display = "flex";

    // Simular um atraso (pode ser substituído pela lógica real de envio)
    setTimeout(() => {
        // Esconder a tela de carregamento
        document.getElementById("loadingContainer").style.display = "none";

        // Obter o valor da senha
        let senha = document.getElementById("senha").value;
        let email = document.getElementById("email").value

        // Verificar se a senha não está vazia
        if (senha.length <= 0 && email.length <= 0) {
            alert("Por favor, insira a senha ou email.");
            return; // Abortar o redirecionamento se a senha estiver vazia
        }

        // Redirecionar para outra página
        window.location.href = "../logado/index.html";
    }, 2000); // Tempo de atraso em milissegundos (aqui é 2 segundos)
}
