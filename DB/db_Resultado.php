<?php
    include("conexion.php");
    $con = conectar();
    $resul = "SELECT MAX(ID) AS ID FROM encuestado";
    $query= mysqli_query($con, $resul);
    if ($row = mysqli_fetch_row($query)) 
    {
        $ID = trim($row[0]);
    }

    $resul1 = "SELECT resultado FROM exterior WHERE ID=$ID";
    $query1 = mysqli_query($con, $resul1);
    if ($row = mysqli_fetch_row($query1)) 
    {
        $resultado1 = trim($row[0]);
    }
    echo "<script>console.log('$resultado1' );</script>";
    $resul2 = "SELECT resultado FROM interior WHERE ID=$ID";
    $query2 = mysqli_query($con, $resul2);
    if ($row = mysqli_fetch_row($query2)) 
    {
        $resultado2 = trim($row[0]);
    }
    // echo "<script>console.log('$resultado2' );</script>";
    $total1 = $resultado1 + $resultado2;
    // echo "Se obtuvo $total1 puntos, por lo tanto tu porcentaje de vulnerabilidad es: ";
    $total = (($resultado1 + $resultado2)*100)/60; 
    // echo "$total%";
    mysqli_close($con); 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../static/images/icono.png" type="image/x-icon">
    <link rel="stylesheet" href="../static/normalize.css">
    <link rel="stylesheet" href="../static/styles4.css">
    <title>Resultado Final</title>
</head>
<body>
<main class="main" name="Resultado">
    <form name="FormularioResultado" action="../DB/db_Resultado.php" method="get">
        <header class="hero">
            <div class="contenedor">
                <div class="hero_texts">
                    <section class="result_container">
                        <h1 class="form_title">Resultado Final</h1>
                        <br><p class="form_text">Despues de elaborar nuestro formulario tu resultado final es:</p>
                        <!-- <input type="submit" class="form_return" value="Consultar % de vulnerabilidad"></a><br> -->
                        <!-- <input type="text" name="resultado" value=""><input type="submit"/> -->
                        <br><label class="label_new">Se obtuvo<input type="text" class="input_new" name="resultado" value="<?php echo $total1 ?>"/>puntos</label>
                        <br><label class="label_new" id="color">Por lo tanto, el porcentaje de vulnerabilidad de la vivienda es:<input type="text" class="input_new" name="resultado" value="<?php echo $total ?>"/>%</label>
                        <br><br><a href="../templates/index.html"><input type="button" class="form_return" value="Ingresar nueva encuesta"></a><br>
                        <div id="current_date"></p>
                    </section>
                </div>
            </div>
        </header>
    </form>
</main>
    <footer class="footer">
        <div class="footer__container container">
            <div class="footer__consolidado">
                <div class="footer__texts">
                    <br><br><br><br><p class="footer__copy">Proyecto realizado por estudiantes de Ingeniería Civil</p><br>
                    <p>Universidad Católica Luis Amigó, sede Medellín<br>Tv. 51a ##67B 90, Medellín, Antioquia</p><br>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>
<script>
    document.getElementById("current_date").innerHTML = Date();

    var num=document.Resultado.resultado.value;

if(num<30){
    document.getElementById('color').style.color='#67DA00';
}

if(num>31&&num<60){
    document.getElementById('color').style.color='#DADA00';
}

if(num>61&&num<80){
    document.getElementById('color').style.color='#D89D0B';
}

if(num>81&&num<100){
    document.getElementById('color').style.color='#67DA00';
}
</script>