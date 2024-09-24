<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");


$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    
    $nome = $data['nome'];
    $senha = $data['senha'];

    // Lógica para adicionar no banco de dados ou tratar os dados
    // Exemplo simples de confirmação
    if (!empty($nome) && !empty($senha)) {
        // Aqui você pode adicionar sua lógica para salvar no banco de dados
        // Simulação de resposta de sucesso
        echo json_encode(["status" => "success", "message" => "Funcionário adicionado."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Dados incompletos."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Nenhum dado enviado."]);
}
?>
