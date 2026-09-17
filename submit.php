<?php
$servername = "localhost:2212";
$username = "ahcode";
$password = "1234567890";
$dbname = "Marine Web Form/contacts";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$continent = $_POST['continent'];

$sql = "INSERT INTO contact_messages (name, email, message, continent) VALUES ('$name', '$email', '$message', '$continent')";

if ($conn->query($sql) === TRUE) {
    echo "Registration Success";
} else {
    echo "错误: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>