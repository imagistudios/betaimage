<?php

$prompt = $_POST['prompt'];
$width = 512;
$height = 512;
$steps = 50;
$numberOfImages = 1;
$seed = 123456789;

$curl = curl_init();

curl_setopt_array($curl, [
    CURLOPT_URL => "",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => json_encode(array(
        "prompt" => $prompt,
        "width" => $width,
        "height" => $height,
        "steps" => $steps,
        "numberOfImages" => $numberOfImages,
        "seed" => $seed
    )),
    CURLOPT_HTTPHEADER => [
        "accept: application/json",
        "content-type: application/json",
        "authorization: "
    ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
    echo "cURL Error #:" . $err;
} else {
    $json = json_decode($response, true);
    if($json['status'] === 'success') {
        echo $json['data']['url'];
    } else {
        echo $json['message'];
    }
}
