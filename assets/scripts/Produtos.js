let selectedProductId = null; 

function CadastrarProdutos(event) {
    event.preventDefault(); 

    let nomeProduto = document.getElementById('productName').value;
    let precoProduto = parseFloat(document.getElementById('productPrice').value);

    if (isNaN(precoProduto)) {
        alert('Por favor, insira um preço válido.');
        return; 
    }

    fetch('../php/AdicionarProduto.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nomeProduto, precoProduto })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert(data.message); 
            TodosProdutos(); 
            document.getElementById('productForm').reset(); 
        } else {
            alert('Erro: ' + data.message); 
        }
    })
    .catch(error => {
        console.error('Erro ao cadastrar produto:', error);
        alert('Ocorreu um erro ao cadastrar o produto. Tente novamente.');
    });
}


function TodosProdutos() {
    fetch('../php/TodosProdutos.php', { 
        method: 'GET' 
    })
    .then(response => response.json()) 
    .then(data => {
        const productsUl = document.getElementById('productsUl');
        productsUl.innerHTML = ''; 

        if (data.status === 'success') {
            if (data.produtos.length === 0) {
                productsUl.innerHTML = '<li>Nenhum produto cadastrado.</li>'; 
            } else {
                data.produtos.forEach(produto => {
                    const li = document.createElement('li');
                    li.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
                    li.setAttribute('data-id', produto.id); 
                    li.onclick = () => { 
                        selectedProductId = produto.id;
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
        console.error('Erro ao buscar produtos:', error); 
    });
}


function DeletarProduto() {
    if (!selectedProductId) {
        alert('Por favor, selecione um produto para deletar.');
        return;
    }

    if (confirm('Tem certeza que deseja deletar este produto?')) {
        fetch('../php/DeletarProduto.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: selectedProductId })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert(data.message); 
                TodosProdutos(); 
                selectedProductId = null; 
            } else {
                alert('Erro: ' + data.message); 
            }
        })
        .catch(error => {
            console.error('Erro ao deletar produto:', error);
            alert('Ocorreu um erro ao deletar o produto. Tente novamente.');
        });
    }
}


window.onload = TodosProdutos;
