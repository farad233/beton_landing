<?php
//Сбор данных из полей формы. 
$adress = $_POST['adres'];
$phone = $_POST['phone'];

$token = "1347406482:AAEIt7OerLibwrh5ekYT-yL1NppW9Sp9qgM";
$chat_id = "-453731432";

$arr = array(

  'Адресс: ' => $adress,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>