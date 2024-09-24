<?php
header('Content-Type: application/json');
require_once '../config/databaseConnection.php'; 

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (isset($data['nomeUsuario']) && isset($data['senhaUsuario'])) {
    $nomeUsuario = $data['nomeUsuario'];
    $senhaUsuario = $data['senhaUsuario'];

    
    $stmt = $pdo->prepare('INSERT INTO usuario (nome, senha) VALUES (?, ?)');
    if ($stmt->execute([$nomeUsuario, $senhaUsuario])) {
        $response = [
            'status' => 'success',
            'message' => 'Usuário adicionado com sucesso!'
        ];
    } else {
        $response = [
            'status' => 'error',
            'message' => 'Erro ao adicionar usuário.'
        ];
    }
} else {
    $response = [
        'status' => 'error',
        'message' => 'Dados incompletos fornecidos.'
    ];
}


echo json_encode($response);
?>
