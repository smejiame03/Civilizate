function validarFormacion(){
    if(document.getElementById('Formacion').value=='#'){
        document.getElementById('mjformacion').innerHTML="Seleccione una opción por favor";
    } else{
        document.getElementById('mjformacion').innerHTML="";
    }
}

var contCons=0;
function validarConstruccion(){
    if(document.getElementById('Construccion').value=="#"){
        document.getElementById('mjConstruccion').innerHTML="Seleccione una opción por favor";
    } else{
        if(document.getElementById('Construccion').value=='Antes de 1963'){
            contCons=4;
            document.getElementById('mjConstruccion').innerHTML="";
        }else{
            if(document.getElementById('Construccion').value=='Entre 1963 y 1984'){
                contCons=3;
                document.getElementById('mjConstruccion').innerHTML="";
            } else{
                if(document.getElementById('Construccion').value=='Entre 1985 y 1997'){
                    contCons=3;
                    document.getElementById('mjConstruccion').innerHTML="";
                } else{
                    if(document.getElementById('Construccion').value=='Entre 1998 y 2010'){
                        contCons=2;
                        document.getElementById('mjConstruccion').innerHTML="";
                    } else{
                        if(document.getElementById('Construccion').value=='A partir del 2011'){
                            contCons=1;
                            document.getElementById('mjConstruccion').innerHTML="";
                        }
                    }
                }
            }
        }
   }
    return contCons;
}

var contConstructora=0;
function validarConstructora(elemento){
    if(document.getElementById('Constructora').value=="#"){
        document.getElementById('mjConstructora').innerHTML="Seleccione una opción por favor";
        contConstructora=0;
    } else {
        if(document.getElementById('Constructora').value=='Si'){
            contConstructora=0;
            document.getElementById('mjConstructora').innerHTML="";
        } else{
            if(document.getElementById('Constructora').value='No'){
                contConstructora=3;
                document.getElementById('mjConstructora').innerHTML="";
            }
        }
    }
    if(elemento.Constructora.options[elemento.Constructora.selectedIndex].value=='Si'){
        var textfield=document.createElement('Input');
        document.getElementById("anexoconstructora").style.display="inline";
    } else {
        document.getElementById("anexoconstructora").style.display="none";
    }
    return contConstructora;
}

function validarMetros(){
    if(document.getElementById('metros').value=='#'){
        document.getElementById('mjmetros').innerHTML="Seleccione una opción por favor";
    } else{
        document.getElementById('mjmetros').innerHTML="";
    }
}

var contUbicacion=0;
function validarUbicacion1(obj){
    if(obj.checked){
        contUbicacion=2;
    }
    return contUbicacion;
}

function validarUbicacion2(obj){
    if(obj.checked){
        contUbicacion=1;
    }
    return contUbicacion;
}

var contCercanos=0;
function validarElementos1(obj){
    if(obj.checked){
        contElementos=contCercanos+2;
    }
    return contUbicacion;
}

function validarElementos2(obj){
    if(obj.checked){
        contElementos=1;
    }
    return contUbicacion;
}

function validarElementos3(obj){
    if(obj.checked){
        contElementos=2;
    }
}

var contUso=0;
function validarUso(elemento){
    if(document.getElementById('UsoVivienda').value=='#'){
        contUso=0;
        document.getElementById('mjUsoVivienda').innerHTML="Seleccione una opción por favor";
    } else{
        if(document.getElementById('UsoVivienda').value=='Residencial'){
            contUso=0;
            document.getElementById('mjUsoVivienda').innerHTML="";
        } else {
            if(document.getElementById('UsoVivienda').value=='Comercial'){
                contUso=1;
                document.getElementById('mjUsoVivienda').innerHTML="";
            } else {
                if(document.getElementById('UsoVivienda').value=='Educacional'||document.getElementById('UsoVivienda').value=='Oficinas'||
                document.getElementById('UsoVivienda').value=='Centro de salud'||document.getElementById('UsoVivienda').value=='Hotelero'){
                    contUso=2;
                    document.getElementById('mjUsoVivienda').innerHTML="";
                } else{
                    if(document.getElementById('UsoVivienda').value=='Bodegas'||document.getElementById('UsoVivienda').value=='Instalación deportiva'){
                        contUso=3;
                        document.getElementById('mjUsoVivienda').innerHTML="";
                    } else {
                        if(document.getElementById('UsoVivienda').value=='Industrial'){
                            contUso=4;
                            document.getElementById('mjUsoVivienda').innerHTML="";
                        } else{
                            contUso=0;
                            document.getElementById('mjUsoVivienda').innerHTML="";
                        }
                    }
                }
            }
        }
    }
    if(elemento.UsoVivienda.options[elemento.UsoVivienda.selectedIndex].value=='Otro'){
        document.getElementById('anexoUsoVivienda').style.display="inline";
    } else{
        document.getElementById('anexoUsoVivienda').style.display="none";
    }
    return contUso;
}

function ValidarUsoDiferente(obj){
    if(obj.checked){
        document.getElementById('UsoViviendaAnterior').style.display="inline";
    }
}

function ValidarUsoDiferente1(obj){
    if(obj.checked){
        document.getElementById('UsoViviendaAnterior').style.display="none";
    }
}

function anexoUsoVivienda(Element){
    if(Element.UsoViviendaAnterior.options[Element.UsoViviendaAnterior.selectedIndex].value=='Otro'){
        document.getElementById('anexoUsoViviendaAnterior').style.display="inline";
    }else{
        document.getElementById('anexoUsoViviendaAnterior').style.display="none";
    }
}

var contPrimerPiso=0;
function ValidarPrimerPiso(){
    if(document.getElementById('UsoViviendaPrimerPiso').value=='#'){
        contPrimerPiso=0;
        document.getElementById('mjPrimerPiso').innerHTML="Seleccione una opción por favor";
    } else{
        if(document.getElementById('UsoViviendaPrimerPiso').value=='Residencial'||document.getElementById('UsoViviendaPrimerPiso').value=='No aplica'){
            contPrimerPiso=0;
            document.getElementById('mjPrimerPiso').innerHTML="";
        } else {
            if(document.getElementById('UsoViviendaPrimerPiso').value=='Comercial'){
                contPrimerPiso=1;
                document.getElementById('mjPrimerPiso').innerHTML="";
            } else{
                if(document.getElementById('UsoViviendaPrimerPiso').value=='Educacional'||document.getElementById('UsoViviendaPrimerPiso').value=='Oficinas'||
                document.getElementById('UsoViviendaPrimerPiso').value=='Centro de salud'||document.getElementById('UsoViviendaPrimerPiso').value=='Hotelero'){
                    contPrimerPiso=2;
                    document.getElementById('mjPrimerPiso').innerHTML=="";
                } else{
                    if(document.getElementById('UsoViviendaPrimerPiso').value=='Bodegas'||document.getElementById('UsoViviendaPrimerPiso').value=='Instalación deportiva'){
                        contPrimerPiso=3;
                        document.getElementById('mjPrimerPiso').innerHTML="";
                    } else{
                        if(document.getElementById('UsoViviendaPrimerPiso').value=='Industrial'){
                            contPrimerPiso=4;
                            document.getElementById('mjPrimerPiso').innerHTML="";
                        }
                    }
                }
            }
        }
    }
}

var contTotalPisos=0;
function validarTotalPisos(){
    if(document.getElementById('TotalPisos').value=='#'){
        contTotalPisos=0;
        document.getElementById('mjTotalPisos').innerHTML="Seleccione una opción por favor";
    } else{
        if(document.getElementById('TotalPisos').value=='1'||document.getElementById('TotalPisos').value=='2'||
        document.getElementById('TotalPisos').value=='3'){
            contTotalPisos=1;
            document.getElementById('mjTotalPisos').innerHTML="";
        } else{
            if(document.getElementById('TotalPisos').value=='4'||document.getElementById('TotalPisos').value=='5'||
            document.getElementById('TotalPisos').value=='6'){
                contTotalPisos=2;
                document.getElementById('mjTotalPisos').innerHTML="";
            }else{
                contTotalPisos=3;
                document.getElementById('mjTotalPisos').innerHTML="";
            }
        }
    }
    return contPrimerPiso;
}

var contPisoVivienda=0;
function validarPisoVivienda(){
    if(document.getElementById('PisoVivienda').value=='#'){
        contPisoVivienda=0;
        document.getElementById('mjPisoVivienda').innerHTML="Seleccione una opción por favor";
    } else {
        if(document.getElementById('PisoVivienda').value=='1'||document.getElementById('PisoVivienda').value=='2'||
        document.getElementById('PisoVivienda').value=='3'){
            contPisoVivienda=1;
            document.getElementById('mjPisoVivienda').innerHTML="";
        } else{
            if(document.getElementById('PisoVivienda').value=='4'||document.getElementById('PisoVivienda').value=='5'||
            document.getElementById('PisoVivienda').value=='6'){
                contPisoVivienda=2;
                document.getElementById('mjPisoVivienda').innerHTML="";
            } else{
                contPisoVivienda=3;
                document.getElementById('mjPisoVivienda').innerHTML="";
            }
        }
    }
    return contPisoVivienda;
}

var contSotano=0;
function validarSotanos(){
    if(document.getElementById('sotanos').value=='#'){
        contSotano=0;
        document.getElementById('mjSotanos').innerHTML="Seleccione una opción por favor";
    } else{
        if(document.getElementById('sotanos').value=='Ninguno'){
            contSotano=0;
            document.getElementById('mjSotanos').innerHTML="";
        } else{
            if(document.getElementById('sotanos').value=='1'){
                contSotano=1;
                document.getElementById('mjSotanos').innerHTML="";
            } else {
                if(document.getElementById('sotanos').value=='2'){
                    contSotano=2;
                    document.getElementById('mjSotanos').innerHTML="";
                } else {
                    if(document.getElementById('sotanos').value=='3'||document.getElementById('sotanos').value=='4'){
                        contSotano=3;
                        document.getElementById('mjSotanos').innerHTML="";
                    } else{
                        contSotano=4;
                        document.getElementById('mjSotanos').innerHTML="";
                    }
                }
            }
        }
    }
    return contSotano;
}

var contMuro=0;
function validarMuro1(){
    contMuro=3;
    return contMuro;
}

function validarMuro2(){
    contMuro=0;
    return contMuro;
}

function checkbox(){
$(document).ready(function(){
    var cantidadMaxima=2;
// Evento que se ejecuta al soltar una tecla en el input
$("#cantidad").keydown(function(){
    $("input[type=checkbox]").prop('checked', false);
    $("#seleccionados").html("0");
});

// Evento que se ejecuta al pulsar en un checkbox
$("input[type=checkbox]").change(function(){
    // Cogemos el elemento actual
    var elemento=this;
    var contador=0;
    // Recorremos todos los checkbox para contar los que estan seleccionados
    $("input[type=checkbox]").each(function(){
        if($(this).is(":checked"))
            contador++;
    });
    // Comprovamos si supera la cantidad máxima indicada
    if(contador>cantidadMaxima)
    {
        alert("Has seleccionado un numero mayor de opciones permitidas");
        // Desmarcamos el ultimo elemento
        $(elemento).prop('checked', false);
        contador--;
    }
    $("#seleccionados").html(contador);
});
});
}

var contElementos=0;
function otros1(value){
    if(value==true){
	document.getElementById("anexoElementosEspaciales").style.display="none";
    contElementos=contElementos + 4;
	}else if(value==false){
	document.getElementById("anexoElementosEspaciales").style.display="none";
	}
}

function otros2(value){
    if(value==true){
	document.getElementById("anexoElementosEspaciales").style.display="none";
    contElementos=contElementos + 3;
	}else if(value==false){
	document.getElementById("anexoElementosEspaciales").style.display="none";
	}
}

function otros3(value){
    if(value==true){
	document.getElementById("anexoElementosEspaciales").style.display="none";
    contElementos=contElementos + 3;
	}else if(value==false){
	document.getElementById("anexoElementosEspaciales").style.display="none";
	}
}

function otros4(value){
    if(value==true){
	document.getElementById("anexoElementosEspaciales").style.display="none";
    contElementos=contElementos + 4;
	}else if(value==false){
	document.getElementById("anexoElementosEspaciales").style.display="none";
	}
}

function otros5(value){
    if(value==true){
	document.getElementById("anexoElementosEspaciales").style.display="none";
    contElementos=contElementos + 4;
	}else if(value==false){
	document.getElementById("anexoElementosEspaciales").style.display="none";
	}
}

function otros6(value){
    if(value==true){
	document.getElementById("anexoElementosEspaciales").style.display="none";
    contElementos=contElementos + 3;
	}else if(value==false){
	document.getElementById("anexoElementosEspaciales").style.display="none";
	}
}

function otros7(value){
    if(value==true){
	document.getElementById("anexoElementosEspaciales").style.display="none";
    contElementos=contElementos + 0;
	}else if(value==false){
	document.getElementById("anexoElementosEspaciales").style.display="none";
	}
}

function otros8(value){
    if(value==true){
	document.getElementById("anexoElementosEspaciales").style.display="inline";
    contElementos=contElementos + 0;
	}else if(value==false){
	document.getElementById("anexoElementosEspaciales").style.display="none";
	}
}

function sumar(a, b, c, d, e, f, g, h, i, j, k){
    var a=contCons, b=contConstructora, c=contUbicacion, d=contCercanos,e=contUso,f=contPrimerPiso, g=contTotalPisos,
    h=contPisoVivienda, i=contSotano, j=contMuro, k=contElementos;
    return a+b+c+d+e+f+g+h+i+j+k;
}

function resultadoExterior(){
    sumaExterior=sumar(contCons,contConstructora,contUbicacion,contCercanos,
    contUso,contPrimerPiso,contTotalPisos,contPisoVivienda,contSotano,contMuro,contElementos);
    document.getElementById('resultado').value=sumaExterior;
}