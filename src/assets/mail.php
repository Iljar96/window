<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

//От кого письмо
$mail->setFrom('iljar646@gmail.com', 'windows.ru');
//Кому отправить
$mail->addAddress('iljar646@gmail.com');
//Тема письма
$mail->Subject = 'Привет!';


//Тело письма
$body = '<h1>Обращение с сайта!</h1>';

if (trim(!empty($_POST['user_name']))) {
	$body .= '<p><strong>Имя:</strong> ' . $_POST['user_name'] . '</p>';
}
if (trim(!empty($_POST['user_phone']))) {
	$body .= '<p><strong>Номер телефона:</strong> ' . $_POST['user_phone'] . '</p>';
}
if (trim(!empty($_POST['form']))) {
	$body .= '<p><strong>Форма балкона:</strong> ' . $_POST['form'] . '</p>';
}
if (trim(!empty($_POST['width']))) {
	$body .= '<p><strong>Ширина:</strong> ' . $_POST['width'] . '</p>';
}
if (trim(!empty($_POST['height']))) {
	$body .= '<p><strong>Высота:</strong> ' . $_POST['height'] . '</p>';
}
if (trim(!empty($_POST['type']))) {
	$body .= '<p><strong>Тип:</strong> ' . $_POST['type'] . '</p>';
}
if (trim(!empty($_POST['temperature']))) {
	$body .= '<p><strong>Температура:</strong> ' . $_POST['temperature'] . '</p>';
}



$mail->Body = $body;

//Отправляем
if (!$mail->send()) {
	$message = 'Ошибка';
} else {
	$message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
