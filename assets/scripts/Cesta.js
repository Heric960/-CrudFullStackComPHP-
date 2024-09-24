function AdicionarPordutosCesta(event){
    event.preventDefault();
    let produto = document.getElementById('supplierName').Value;

    fetch('../php/AdicionarCesta.php', {
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