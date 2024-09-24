<?php
header('Content-Type: application/json');

require_once '../config/databaseConnection.php'; 

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$nomeFrnecedor = $data['nomeFrnecedor'];
$contatoFornecedor = $data['contatoFornecedor'];

$stmt = $pdo->prepare('INSERT INTO fornecedor (nome, contato) VALUES (?, ?)');
if ($stmt->execute([$nomeFrnecedor, $contatoFornecedor])) {
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