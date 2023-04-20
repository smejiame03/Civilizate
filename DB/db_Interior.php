<?php
    include("conexion.php");
    $con = conectar();
    $resul1 = "SELECT MAX(ID) AS ID FROM encuestado";
    $query= mysqli_query($con, $resul1);
    if ($row = mysqli_fetch_row($query)) 
    {
        $ID = trim($row[0]);
    }
    
    $alturapisos = $_POST['alturapisos'];
    $materialconstruccion = $_POST['materialconstruccion'];
    $materialconstruccion_text = implode(" / ",$materialconstruccion);
    $TipoMamposteria = $_POST['TipoMamposteria'];
    $ConcretoReforzado = $_POST['ConcretoReforzado'];
    $Prefabricado = $_POST['Prefabricado'];
    $pisovivienda = $_POST['pisovivienda'];
    $tipotech = $_POST['tipotech'];
    $hundimiento = $_POST['hundimiento'];
    $grietas = $_POST['grietas'];
    $resultado = $_POST['resultado'];

    $consulta = "INSERT INTO interior(ID,alturapisos,materialconstruccion,TipoMamposteria,ConcretoReforzado,Prefabricado,pisovivienda,tipotech,hundimiento,grietas,resultado)
    VALUES ('$ID','$alturapisos','$materialconstruccion_text','$TipoMamposteria','$ConcretoReforzado','$Prefabricado','$pisovivienda','$tipotech','$hundimiento','$grietas','$resultado')";
    $resul = mysqli_query($con, $consulta);
    mysqli_close($con);
    header("Location: ../DB/db_Resultado.php");
?>