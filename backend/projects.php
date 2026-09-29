<?php
require_once __DIR__ . "/env.php";
loadEnv(__DIR__ . "/.env");

error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

$host = getenv("DB_HOST");
$dbname = getenv("DB_NAME");
$user = getenv("DB_USER");
$pass = getenv("DB_PASS");

try {
    $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);

    $stmt = $pdo->query("SELECT id, title, category, description, url, img FROM projects");
    $projects = $stmt->fetchAll();

    echo json_encode($projects);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Connexion échouée: " . $e->getMessage()]);
    exit;
}
