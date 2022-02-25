<?php

// header('Content-type: application/json; charset=utf-8');

 if (!empty($_POST['usuario']) && !empty($_POST['puntuacion'])){
    
    $user = $_POST['usuario'];
    $point = intval($_POST['puntuacion']);



    $conexion = new mysqli('localhost', 'root', '', 'pokeapp');

    if ($conexion -> connect_errno){
        die('Lo siento hubo un problema con el servidor');
    } else {

        $statement = $conexion->prepare ("INSERT INTO persons(id,usuario,puntuacion) VALUES(?,?,?)");
        $statement->bind_param('ssi', $id, $user, $point); 
        $id = NULL;

        $statement ->execute();

        header("Location: http://localhost/DOC/Practica%206%20Pokemon/index-preubas.html");
        die();
    }


} else {
    // 0 o sin valor o cualquier error
    header("Location: http://localhost/DOC/Practica%206%20Pokemon/index-preubas.html");
    die();
}


