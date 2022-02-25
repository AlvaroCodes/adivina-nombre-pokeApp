<?php

$conexion = new mysqli('localhost', 'root', '', 'pokeapp');

if ($conexion -> connect_errno){
    die('Lo siento hubo un problema con el servidor');
} else {
    $sql = 'SELECT * FROM persons LIMIT 10';
    $resultado = $conexion->query($sql);
   
    if ($resultado->num_rows){

        $arr = [];
    
    while($fila = $resultado->fetch_assoc()){

        $usuarios = [];
        $usuarios['usuario'] = $fila['usuario'];
        $usuarios['puntuacion'] = $fila['puntuacion'];
        $x = json_encode($usuarios);
       
        array_push($arr, $x);
    }



    header('Content-type: application/json; charset=utf-8');
    echo ('['.implode(',',$arr).']');

    }else {
        echo '[]';
    }
}

