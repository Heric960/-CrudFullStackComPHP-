async function AdicionarFuncionario() {
    
    let nome = document.getElementById('username').value;
    let senha = document.getElementById('password').value;

    
    if (nome === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    
    let dadosFuncionario = {
        nome: nome,
        senha: senha
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
            alert("Funcionário adicionado com sucesso!");
        } else {
            alert("Erro ao adicionar funcionário.");
        }
    } catch (erro) {
        console.error("Erro na requisição:", erro);
        alert("Falha na comunicação com o servidor.");
    }
}
