var app = {
initialize: function() {
  this.bindEvents();
},

bindEvents: function(){
  document.addEventListener('deviceready', this.onDeviceReady, false);
},

onDeviceReady: function() {
  navigator.geolocation.getCurrentPosition(navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError));
},

onSuccess: function(position) {
  var longitude = position.coords.longitude;
  var latitude = position.coords.latitude;
  var latLong = new google.maps.LatLng(latitude, longitude);

  var mapOptions = {
       center: latLong,
       zoom: 13,
       mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
      position: latLong,
      map: map,
      title: 'my location'
         });
},

  onError: function(error){
    alert("the code is " + error.code + ". \n" + "message: " + error.message);
  },

};
