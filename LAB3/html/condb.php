<?
$host = "db";
$username = "root";
$password = "1234"
$db = "internet";

try{
$conn = ysqli_connect($host,$username,$password,$db);
mysqli_query($conn,"SET NAME utf8");
}
catch(Exception $e){ 
    $error = $e->getMessage();
    error_log($error);
    echo $error;
}

?>