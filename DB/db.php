<?php
        //Generando la conexion con el servidor
        include("conexion.php");
        $con = conectar();

            $PrimerNombre=$_POST['PrimerNombre'];
            $SegundoNombre=$_POST['SegundoNombre'];
            $PrimerApellido=$_POST['PrimerApellido'];
            $SegundoApellido=$_POST['SegundoApellido'];
            $Celular=$_POST['Celular'];
            $Correo=$_POST['Correo'];
            $Cedula=$_POST['Cedula'];
            $Direccion=$_POST['Direccion'];
            $NomUnidad=$_POST['NomUnidad'];
            $Departamento=$_POST['Departamento'];
            $Municipio=$_POST['Municipio'];
            $Barrio=$_POST['Barrio'];

            $consulta = "INSERT INTO encuestado (PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, Celular, Correo, Cedula, Direccion, NomUnidad, Departamento, Municipio, Barrio) 
            VALUES ('$PrimerNombre', '$SegundoNombre', '$PrimerApellido', '$SegundoApellido', '$Celular', '$Correo', '$Cedula', '$Direccion', '$NomUnidad', '$Departamento', '$Municipio', '$Barrio')";
            $resul = mysqli_query($con, $consulta);
            mysqli_close($con);
            header("Location: ../templates/FrmExterior.html");
?>
