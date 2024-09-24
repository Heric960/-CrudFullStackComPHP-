let sidebar = document.getElementById('injecao');
sidebar.innerHTML = `<div class="sidebar">
    <h2>Menu</h2>
    <ul>
        <li><button class="MenuSidebar" id="bnt1" onclick="navigateToPage('../view/addFun.html')" type="button">Adicionar Funcionário</button></li>
        <li><button class="MenuSidebar" id="bnt2" onclick="navigateToPage('../view/produtos.html')" type="button">Produtos</button></li>
        <li><button class="MenuSidebar" id="bnt3" onclick="navigateToPage('../view/fornecedores.html')" type="button">Fornecedores</button></li>
        <li><button class="MenuSidebar" id="bnt4" onclick="navigateToPage('../view/cestaDeProdutos.html')" type="button">Sacola</button></li>
        <li><button class="MenuSidebar" id="bnt5" onclick="logout()" type="button">Exit</button></li>
    </ul>
</div>`;

function navigateToPage(page) {
    window.location.href = page;
}

function logout() {
    window.location.href = '../view/index.html'; 
}
