function AdicionarFornecedor(event){
    event.preventDefault();
    let nomeFrnecedor = document.getElementById('supplierName').Value;
    let contatoFornecedor = document.getElementById('supplierContact').Value;

    fetch('../php/AdicionarFornecedor.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nomeFrnecedor, contatoFornecedor })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert(data.message); 
            TodosFornecedores(); 
            document.getElementById('supplierForm').reset(); 
        } else {
            alert('Erro: ' + data.message); 
        }
    })
    .catch(error => {
        console.error('Erro ao cadastrar fornrcedor:', error);
        alert('Ocorreu um erro ao cadastrar o fornrcedor. Tente novamente.');
    });
}

function TodosFornecedores(){
    fetch('../php/TodosFuncionarios.php', { 
        method: 'GET' 
    })
    .then(response => response.json()) 
    .then(data => {
        const productsUl = document.getElementById('suppliersUl');
        productsUl.innerHTML = ''; 

        if (data.status === 'success') {
            if (data.fornecedor.length === 0) {
                productsUl.innerHTML = '<li>Nenhum fornecedor cadastrado.</li>'; 
            } else {
                data.fornecedor.forEach(fornecedor => {
                    const li = document.createElement('li');
                    li.textContent = `${fornecedor.nome} - R$ ${fornecedor.preco.toFixed(2)}`;
                    li.setAttribute('data-id', fornecedor.id); 
                    li.onclick = () => { 
                        selectedfornecedorId = fornecedor.id;
                        document.querySelectorAll('#productsUl li').forEach(item => item.classList.remove('selected'));
                        li.classList.add('selected'); 
                    };
                    productsUl.appendChild(li);
                });
            }
        } else {
            console.error(data.message); 
        }
    })
    .catch(error => {
        console.error('Erro ao buscar fornecedor:', error); 
    });
}