(function initialize() {
  // REVEAL EFFECTS https://github.com/jlmakes/scrollreveal.js
  window.sr = ScrollReveal();
  sr.reveal('#panel-2-first', {origin: "left", delay: "200", distance: "200px", mobile: "false", reset: "true"});
  sr.reveal('#panel-2-second', {origin: "rigt"});

  // MAP
  var albacete = new google.maps.LatLng(38.9942400, -1.8564300)
  var mapProp = {
    center: albacete,
    zoom: 5,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var marker = new google.maps.Marker({
    position: albacete,
    title: "Albacete"
  });
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  marker.setMap(map);

  // SLIDESHOW
  var opts = {
    auto: false,
    fullScreen: false,
    swipe: true
  };
  makeBSS('.bss-slides', opts);
})();

// CONTACT FORM
function onFocus(element) {
  var lb = element.getAttribute("name");
  var label = document.getElementById(lb);
  label.style.top = "-1em";
  label.style["font-size"] = ".8em";
  label.style.color = "#78bdf2";
}

function focusLost(element) {
  var lb = element.getAttribute("name");
  var label = document.getElementById(lb);
  if (element.value == "") {
    if (label == "message") {
      label.style.top = "3em";
    } else {
      label.style.top = "1em";
    }
    label.style["font-size"] = "initial";
    label.style.color = "initial";
  }
}
