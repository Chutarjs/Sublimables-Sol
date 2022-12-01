//muestra tu ubicacion usando geolocalizacion
var localizacion, latL, lonL;

function initMap(){

    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();


    var options={
        zoom:16,
        center:{lat:10.127033 ,lng:-84.265476}
    }

    var mapa = new google.maps.Map(document.getElementById("mapa"), options);
    var map = new google.maps.Map(document.getElementById("map"), options);
    
    const marker = new google.maps.Marker({
      position: {lat:10.127033 ,lng:-84.265476},
      map: mapa,
    });

    const successCallback = (position) => {
      localizacion = position;
      latL = localizacion.coords.latitude;
      lonL = localizacion.coords.longitude;

      directionsRenderer.setMap(map);
      if(map != null){
        Ruta(directionsService,directionsRenderer);
      }
    };

    const errorCallback = (error) => {
      console.log(error);
    };


    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

function Ruta(directionsService, directionsRenderer){
    directionsService.route({
      origin: {lat: parseFloat(latL), lng: parseFloat(lonL)},
      destination: {lat:10.127033 ,lng:-84.265476},

      travelMode: google.maps.TravelMode["DRIVING"]
    })

    .then((response)=>{
      directionsRenderer.setDirections(response)
    })

    .catch((e) => window.alert(e));
}