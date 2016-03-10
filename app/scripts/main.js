(function initialize() {
  var albacete = new google.maps.LatLng(38.9942400, -1.8564300)
  var mapProp = {
    center: albacete,
    zoom: 5,
    disableDefaultUI:true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var marker = new google.maps.Marker({
    position: albacete,
    title: "Albacete"
  });
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  marker.setMap(map);
})();
