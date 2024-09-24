async function AdicionarFuncionario() {
    let nome = document.getElementById('username').value;
    let senha = document.getElementById('password').value;

    if (nome === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let dadosFuncionario = {
        nomeUsuario: nome,  // Ajustado para "nomeUsuario"
        senhaUsuario: senha  // Ajustado para "senhaUsuario"
    };

    try {
        let response = await fetch('../php/adicionarFuncionario.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosFuncionario)
        });

        if (response.ok) {
            let resultado = await response.json();
            alert("Usuário adicionado com sucesso!");
        } else {
            alert("Erro ao adicionar usuário.");
        }
    } catch (erro) {
        console.error("Erro na requisição:", erro);
        alert("Falha na comunicação com o servidor.");
    }
}
