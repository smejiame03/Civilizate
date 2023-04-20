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
<main class="main">
    <form name="FormularioResultado" action="../DB/db_Resultado.php" method="get">
        <header class="hero">
            <div class="contenedor">
                <div class="hero_texts">
                    <section class="result_container">
                        <h1 class="form_title">Resultado Final</h1>
                        <br><p class="form_text">Despues de elaborar nuestro formulario tu resultado final es:</p>
                        <input type="submit" class="form_return" value="Consultar"></a><br>
                        <label class="result_label"></label><br>
                        <br><a href="index.html"><input type="button" class="form_return" value="Ingresar nueva encuesta"></a><br>
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
</script>