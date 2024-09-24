<?php
header('Content-Type: application/json');

require_once '../config/databaseConnection.php'; 

function getAllProdutos($pdo) {
    $stmt = $pdo->query('SELECT * FROM fornecedor');
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 
}

$fornecedor = getAllProdutos($pdo);

echo json_encode([
    'status' => 'success',
    'data' => $fornecedor
]);
?>