//index.html
function validarAutorizacionNo(obj){
    if(obj.checked){
        window.alert("Si no aceptas los terminos no podemos continuar con la encuesta");
        document.getElementById("BotonNext").disabled = true;
    }
}

function validarAutorizacionSi(obj){
    if(obj.checked){
        document.getElementById("BotonNext").disabled = false;
    }
}

//Mapa
function showPosition() {
  if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showMap, showError);
  } else {
      window.alert("Lo siento pero su buscador no soporta la geolocalizacion.");
  }
}

// Define callback function for successful attempt
function showMap(position) {
  // Get location data
  lat = position.coords.latitude;
  long = position.coords.longitude;
  var latlong = new google.maps.LatLng(lat, long);
  
  var myOptions = {
      center: latlong,
      zoom: 16,
      mapTypeControl: true,
      navigationControlOptions: {
          style:google.maps.NavigationControlStyle.SMALL
      }
  }
  
  var map = new google.maps.Map(document.getElementById("embedMap"), myOptions);
  var marker = new google.maps.Marker({ position:latlong, map:map, title:"You are here!" });
}

// Define callback function for failed attempt
function showError(error) {
  if(error.code == 1) {
      window.alert("Tu elegiste no compartir tu posicion, pero esta bien, Nosotros no te volveremos a preguntar");
  } else if(error.code == 2) {
      window.alert("La red esta fallando o el servicio de posicion no te encuentra");
  } else if(error.code == 3) {
      window.alert("El tiempo de espera, no podemos obtener los datos de localización");
  } else {
      window.alert("La localizacion fallo por un error desconocido");
  }
}