<?php
function conectar(){
            $user = "root";
            $pass = "";
            $server = "localhost";
            $db = "encuestaingcivil";
            $con = mysqli_connect($server,$user,$pass,$db) or die ("Error al conectar el servidor".mysqli_error());
            //mysqli_select_db($db,$con) or die ("Error de conexion con la base de datos".msqli_error());
            return $con;
        }
?>