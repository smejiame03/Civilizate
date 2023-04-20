<?php
    include("conexion.php");
    $con = conectar();
    $resul1 = "SELECT MAX(ID) AS ID FROM encuestado";
    $query= mysqli_query($con, $resul1);
    if ($row = mysqli_fetch_row($query)) 
    {
        $ID = trim($row[0]);
    }
    
    $NivelFormacion = $_POST['NivelFormacion'];
    $AñoConstruccion = $_POST['AñoConstruccion'];
    $Constructora = $_POST['Constructora'];
    $NomConstructora = $_POST['NomConstructora'];
    $AreaVivienda = $_POST['AreaVivienda'];
    $UbicacionVivienda = $_POST['UbicacionVivienda'];
    $ElementosCercanos = $_POST['ElementosCercanos'];
    $UsoVivienda = $_POST['UsoVivienda'];
    $UsoVivienda_text = implode("/", $UsoVivienda);
    $UsoDiferente = $_POST['UsoDiferente'];
    $UsoViviendaAnterior = $_POST['UsoViviendaAnterior'];
    $UsoViviendaAnterior_text = implode("/", $UsoViviendaAnterior);
    $UsoViviendaPrimerPiso = $_POST['UsoViviendaPrimerPiso'];
    $TotalPisos = $_POST['TotalPisos'];
    $PisoVivienda = $_POST['PisoVivienda'];
    $sotanos = $_POST['sotanos'];
    $muro = $_POST['muro'];
    $ElementosEspaciales = $_POST['ElementosEspaciales'];
    $ElementosEspaciales_text = implode(",", $ElementosEspaciales);
    $resultado = $_POST['resultado'];

    $consulta = "INSERT INTO exterior(ID,NivelFormacion, AñoConstruccion, Constructora, NomConstructora, AreaVivienda, UbicacionVivienda, ElementosCercanos, UsoVivienda, UsoDiferente, UsoViviendaAnterior, UsoViviendaPrimerPiso, TotalPisos, PisoVivienda, sotanos, muro, ElementosEspaciales, resultado)
    VALUES ('$ID','$NivelFormacion', '$AñoConstruccion', '$Constructora', '$NomConstructora', '$AreaVivienda', '$UbicacionVivienda','$ElementosCercanos','$UsoVivienda_text','$UsoDiferente','$UsoViviendaAnterior_text','$UsoViviendaPrimerPiso','$TotalPisos','$PisoVivienda','$sotanos','$muro','$ElementosEspaciales_text','$resultado')";
    $resul = mysqli_query($con, $consulta);
    mysqli_close($con);
    header("Location: ../templates/FrmInterior.html");
?>