function AdicionarPordutosCesta(event){
    event.preventDefault();
    let produto = document.getElementById('supplierName').Value;

    fetch('../php/AdicionarCesta.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ produto })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert(data.message); 
            TodosProdutosCesta();
            document.getElementById('basket-list').reset(); 
        } else {
            alert('Erro: ' + data.message); 
        }
    })
    .catch(error => {
        console.error('Erro ao adicionar o produto na cesta:', error);
        alert('Ocorreu um erro ao adicionar o produto na cesta. Tente novamente.');
    });
}

function TodosProdutosCesta(){
        fetch('../php/TodosProdutos.php', { 
            method: 'GET' 
        })
        .then(response => response.json()) 
        .then(data => {
            const productsUl = document.getElementById('productsUl');
            productsUl.innerHTML = ''; 
    
            if (data.status === 'success') {
                if (data.produtosCesta.length === 0) {
                    productsUl.innerHTML = '<li>Nenhum produto cadastrado.</li>'; 
                } else {
                    data.produtosCesta.forEach(produtosCesta => {
                        const li = document.createElement('li');
                        li.textContent = `${produtosCesta.nome}`;
                        li.setAttribute('data-id', produtosCesta.id); 
                        li.onclick = () => { 
                            selectedProductId = produtosCesta.id;
                            document.querySelectorAll('#basketUlli').forEach(item => item.classList.remove('produtosCesta'));
                            li.classList.add('produtosCesta'); 
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