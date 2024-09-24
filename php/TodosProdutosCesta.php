<?php
header('Content-Type: application/json');

require_once '../config/databaseConnection.php'; 

function getAllProdutos($pdo) {
    $stmt = $pdo->query('SELECT * FROM produtosCesta');
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 
}

$produtosCesta = getAllProdutos($pdo);

echo json_encode([
    'status' => 'success',
    'data' => $produtosCesta
]);
?>