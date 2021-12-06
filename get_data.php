<?php

if( (!isset($_GET['callback'])) || (empty($_GET['callback'])) ){ //jeżeli w GET (w adresie wysyłanym pod ten adres) nie będzie callback 
    //lub bedzie sam callback http://eduweb.dev/get_data.php?callback-showData
    header('HTTP/1.0 404 Not Found'); //zwróć ten nagłówek
    die();

}

// Dane pobierane z bazy danych
$data = array(
    'firstName' => 'Jan',
    'lastName' => 'Kowalski Nowak',
    'age' => 28
);

//echo json_encode($data);
//header('Content-Type: text/javascript'); //dodanie nagłówka, którego oczekujemy w odpowiedzi, dzięki temu 
//echo 'alert("Witaj")'; //to będzie traktowane jako javascript dzięki temu na stronie zostanie wyświetlony alert jako okienko (jakby wykonał sie kod js)

// showData({
//     firstName: "John"
// });

header('Content-Type: text/javascript'); 
?>


<?php echo $_GET['callback']; ?>(<?php echo json_encode($data); ?>);