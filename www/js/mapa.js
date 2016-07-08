var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function initialize() {	
	directionsDisplay = new google.maps.DirectionsRenderer();
	var latlng = new google.maps.LatLng(-23.0118302,-43.5438105);
	
    var options = {
        zoom: 10,
		center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapa"), options);
	directionsDisplay.setMap(map);
	directionsDisplay.setPanel(document.getElementById("trajeto-texto"));
	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {

			pontoPadrao = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			map.setCenter(pontoPadrao);
			
			var geocoder = new google.maps.Geocoder();
			
			geocoder.geocode({
				"location": new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
            },
            function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					$("#txtEnderecoPartida").val(results[0].formatted_address);
				}
            });
		});
	}
}

initialize();

var maracana = function(){
	var localPartida = $("#txtEnderecoPartida").val();
	var latLong = "-22.9123312,-43.2323659";
	
	var request = {
		origin: localPartida,
		destination: latLong,
		travelMode: google.maps.TravelMode.TRANSIT
		
	};
	
	directionsService.route(request, function(result, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(result);
		}
		});
	}

var engenhao = function(){
	var localPartida = $("#txtEnderecoPartida").val();
	var latLong = "-22.893274,-43.292373";
	
	var request = {
		origin: localPartida,
		destination: latLong,
		travelMode: google.maps.TravelMode.TRANSIT
		
	};
	
	directionsService.route(request, function(result, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(result);
		}
		});
	}

var deodoro = function(){
	var localPartida = $("#txtEnderecoPartida").val();
	var latLong = "-22.8599457,-43.4061402";
	
	var request = {
		origin: localPartida,
		destination: latLong,
		travelMode: google.maps.TravelMode.TRANSIT
		
	};
	
	directionsService.route(request, function(result, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(result);
		}
		});
	}
	
	
	
	
$("form").submit(function(event) {
	event.preventDefault();
	
	var enderecoPartida = $("#txtEnderecoPartida").val();
	var enderecoChegada = $("#txtEnderecoChegada").val();
	
	var request = {
		origin: enderecoPartida,
		destination: enderecoChegada,
		travelMode: google.maps.TravelMode.TRANSIT
	};
	
	directionsService.route(request, function(result, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(result);
		}
	});
});