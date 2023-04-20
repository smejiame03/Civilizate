//Interior inmueble
var contAltura=0;
function VerificarPisos(){
  if(document.getElementById('alturapisos').value=='#'){
    var span = document.getElementById("mjaltura");
    document.getElementById('mjaltura').innerHTML = "Seleccione una opcion por favor";
    contAltura=0;
  } else {
    if (document.getElementById('alturapisos').value=='2 Metros'){
      contAltura=1;
      document.getElementById('mjaltura').innerHTML = "";
    } else {
      if(document.getElementById('alturapisos').value=='2.1 a 2.5 Metros'){
        contAltura=2;
        document.getElementById('mjaltura').innerHTML = "";
      } else {
        if (document.getElementById('alturapisos').value=='2.6 a 3 Metros'){
          contAltura=3;
          document.getElementById('mjaltura').innerHTML = "";
        } else {
          contAltura=3;
          document.getElementById('mjaltura').innerHTML = "";
        }
      }
    }
  }
  return contAltura;
}

var contmaterial=0;
function Material1(obj){
  if(obj.checked){
    contmaterial=2;
    var radio = document.createElement('Input');
    document.getElementById("listaA").style.display="inline";
    document.getElementById("listaB").style.display="none";
    document.getElementById("listaC").style.display="none";
    document.getElementById("aparece").style.display="none";
    document.getElementById("txtselectC").style.display="none";
  }
  return contmaterial;
}

function Material2(obj){
  if(obj.checked){
    contmaterial=1;
    var radio = document.createElement('Input');
    document.getElementById("listaB").style.display="inline";
    document.getElementById("listaA").style.display="none";
    document.getElementById("listaC").style.display="none";
    document.getElementById("aparece").style.display="none";
    document.getElementById("txtselectC").style.display="none";
  }
  return contmaterial;
}

function Material3(obj){
  if(obj.checked){
    contmaterial=2;
    var radio = document.createElement('Input');
    document.getElementById("listaC").style.display="inline";
    document.getElementById("listaB").style.display="none";
    document.getElementById("listaA").style.display="none";
    document.getElementById("aparece").style.display="none";
    document.getElementById("txtselectC").style.display="none";
  }
  return contmaterial;
}

function Material4(obj){
  if(obj.checked){
    contmaterial=1;
    var radio = document.createElement('Input');
    document.getElementById("listaA").style.display="none";
    document.getElementById("listaB").style.display="none";
    document.getElementById("listaC").style.display="none";
    document.getElementById("aparece").style.display="none";
    document.getElementById("txtselectC").style.display="none";
  }
  return contmaterial;
}

function Material5(obj){
  if(obj.checked){
    contmaterial=2;
    var radio = document.createElement('Input');
    document.getElementById("listaA").style.display="none";
    document.getElementById("listaB").style.display="none";
    document.getElementById("listaC").style.display="none";
    document.getElementById("aparece").style.display="none";
    document.getElementById("txtselectC").style.display="none";
  }
  return contmaterial;
}

function Material6(obj){
  if(obj.checked){
    contmaterial=3;
    var radio = document.createElement('Input');
    document.getElementById("listaA").style.display="none";
    document.getElementById("listaB").style.display="none";
    document.getElementById("listaC").style.display="none";
    document.getElementById("aparece").style.display="none";
    document.getElementById("txtselectC").style.display="none";
  }
   return contmaterial;
}

function Material7(obj){
  if(obj.checked){
    contmaterial=3;
    var radio = document.createElement('Input');
    document.getElementById("listaA").style.display="none";
    document.getElementById("listaB").style.display="none";
    document.getElementById("listaC").style.display="none";
    document.getElementById("aparece").style.display="none";
    document.getElementById("txtselectC").style.display="none";
  }
  return contmaterial;
}

function Material8(obj){
  if(obj.checked){
    contmaterial=3;
    var radio = document.createElement('Input');
    document.getElementById("aparece").style.display="none";
    document.getElementById("listaA").style.display="none";
    document.getElementById("listaB").style.display="none";
    document.getElementById("listaC").style.display="none";
    document.getElementById("txtselectC").style.display="none";
  }
  return contmaterial;
}

function Material9(obj){
  if(obj.checked){
    contmaterial=0;
    var radio = document.createElement('Input');
    document.getElementById("aparece").style.display="inline";
    document.getElementById("listaA").style.display="none";
    document.getElementById("listaB").style.display="none";
    document.getElementById("listaC").style.display="none";
    document.getElementById("txtselectC").style.display="none";
  }
  return contmaterial;
}

var contListA=0;
function listaA1(obj){
  if(obj.checked){
    contListA=1;
  }
  return contListA;
}

var contListaB=0;
function listaB1(obj){
  if(obj.checked){
    contListaB=1;
  }
  return contListaB;
}

function listaB2(obj){
  if(obj.checked){
    contListaB=2;
  }
  return contListaB;
}

var contListC=0;
function listaC1(obj){
  if(obj.checked){
    contListaC=2;
    document.getElementById("txtselectC").style.display="none";
  }
  return contListaC;
}

function listaC2(obj){
  if(obj.checked){
    contListaC=3;
    document.getElementById("txtselectC").style.display="none";
  }
  return contListaC;
}

function listaC3(obj){
  if(obj.checked){
    contListaC=1;
    document.getElementById("txtselectC").style.display="none";
  }
  return contListaC;
}

function listaC4(obj){
  if(obj.checked){
    contListaC=0;
    document.getElementById("txtselectC").style.display="inline";
  }
  contListC;
}

var contPiso=0;
function piso1(obj){
  if(obj.checked){
    contPiso=1;
  }
  return contPiso;
}

function piso2(obj){
  if(obj.checked){
    contPiso=2;
  }
  return contPiso;
}

var contTecho=0;
function techo1(obj){
  if(obj.checked){
    contTecho=1;
  }
  return contTecho;
}

function techo2(obj){
  if(obj.checked){
    contTecho=2;
  }
  return contTecho;
}

function techo3(obj){
  if(obj.checked){
    contTecho=3;
  }
  return contTecho;
}

var contVivienda=0;
function Hundimiento1(obj){
  if(obj.checked) {
    contVivienda=4;
    var textfield = document.createElement('Input');
    document.getElementById("AnexoEstado1").style.display = "inline";
    document.getElementById("AnexoEstado2").style.display = "inline";
  }
  return contVivienda;
}

function Hundimiento2(obj){
  if(obj.checked) {
    contVivienda=0;
    var textfield = document.createElement('Input');
    document.getElementById("AnexoEstado1").style.display = "none";
    document.getElementById("AnexoEstado2").style.display = "none";
  }
  return contVivienda;
}

var contG=0;
function Grietas1(obj){
  if(obj.checked) {
    contG=3;
    var textfield = document.createElement('Input');
    document.getElementById("grietasanexo1").style.display = "inline";
    document.getElementById("grietasanexo2").style.display = "inline";
  }
  return contG;
}

function Grietas2(obj){
  if(obj.checked) {
    contG=0;
    var textfield = document.createElement('Input');
    document.getElementById("grietasanexo1").style.display = "none";
    document.getElementById("grietasanexo2").style.display = "none";
  }
  return contG;
}

function suma(a, b, c, d, e, f, g, h, i){
  var a=contAltura, b=contmaterial, c=contListA, d=contListaB, e=contListC,f=contPiso,g=contTecho,
  h=contVivienda,i=contG;
  return a+b+c+d+e+f+g+h+i;
}

function resultadoInterior(){
  var sumaInterior=suma(contAltura,contmaterial,contListA,contListaB,contListC,contPiso,contTecho,contVivienda,contG);
  document.getElementById('resultado').value=sumaInterior;
}