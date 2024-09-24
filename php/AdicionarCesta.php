<?php
header('Content-Type: application/json');

require_once '../config/databaseConnection.php'; 

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$nomeProduto = $data['nomeProduto'];

$stmt = $pdo->prepare('INSERT INTO produtos (nome, preco) VALUES (?, ?)');
if ($stmt->execute([ $nomeProduto ])) {
    $response = [
        'status' => 'success',
        'message' => 'Produto adicionado com sucesso!'
    ];
} else {
    $response = [
        'status' => 'error',
        'message' => 'Erro ao adicionar produto.'
    ];
}

echo json_encode($response);
?>