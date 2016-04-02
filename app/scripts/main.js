(function initialize() {
  // REVEAL EFFECTS https://github.com/jlmakes/scrollreveal.js
  window.sr = ScrollReveal();
  sr.reveal('#panel-2-first', {
    origin: "left",
    distance: "100%",
    duration: 500,
    delay: 300,
    reset: false,
    easing: "ease-out",
    scale: 1
  });
  sr.reveal('#panel-2-second', {
    origin: "right",
    distance: "100%",
    duration: 500,
    delay: 600,
    reset: false,
    easing: "ease-out",
    scale: 1
  });
  sr.reveal('#panel-3-fa', {
    duration: 1000,
    delay: 300,
    reset: false,
    easing: "ease-in-out",
    rotate: {
      z: 120
    }
  });
  sr.reveal('#panel-4-manu', {
    origin: "left",
    distance: "50%",
    duration: 600,
    delay: 300,
    reset: false,
    easing: "ease-out",
    scale: 1
  });
  sr.reveal('#panel-4-vicente', {
    origin: "right",
    distance: "50%",
    duration: 600,
    delay: 300,
    reset: false,
    easing: "ease-out",
    scale: 1
  });
  sr.reveal('#panel-4-david', {
    distance: "20%",
    duration: 600,
    delay: 300,
    reset: false,
    easing: "ease-out",
    scale: 1
  });

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
    auto: {
      speed: 3000,
      pauseOnHover: true
    },
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

function scroll() {
  var element = document.getElementById("panel-2");
  element.scrollIntoView({
    behavior: "smooth"
  });
}
