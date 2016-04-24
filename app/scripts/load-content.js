window.onload = function firstLoad(e) {
  var page = document.getElementsByTagName('title');
  page = page[0].dataset.title;
  // Detect browser storage support and set default
  if (typeof(Storage) !== 'undefined') {
    if (localStorage.getItem("language") === null) {
      localStorage.setItem("language", "es");
    }
  } else {
    alert("Your browser is very old, try upgrading it");
  }

  var languageToggle = document.getElementById("language-toggle");
  languageToggle.value = localStorage.getItem("language");
  translateHeader(localStorage.getItem("language"));
  translateContent(localStorage.getItem("language"), page);
};

function translateHeader(lang) {
  var header = {
    "es": {
      "components": "Componentes",
      "circuits": "Circuitos",
      "code": "Código"
    },
    "en": {
      "components": "Components",
      "circuits": "Circuits",
      "code": "Code"
    }
  }
  var components = document.getElementById("components");
  var circuits = document.getElementById("circuits");
  var code = document.getElementById("code");
  var languageToggle = document.getElementById("language-toggle");
  components.innerHTML = header[lang].components;
  circuits.innerHTML = header[lang].circuits;
  code.innerHTML = header[lang].code;
  languageToggle.style.background = "url('../images/flags/" + lang + ".png') 50% 50%";
}

function translateContent(lang, page) {
  // Markdown parser for JS https://github.com/chjj/marked
  var fileName = "";
  var file = new XMLHttpRequest();
  if (page !== "index") {
    fileName = page + "-" + lang + ".md";
  } else {
    fileName = page + "-" + lang + ".json";
  }
  file.open("GET", "./markdown/" + fileName, true);
  file.send();
  file.onreadystatechange = function() {
    // Makes sure the document exists and is ready to parse.
    if (file.readyState === 4 && file.status === 200) {
      if(page !== "index") {
        var mdText = file.responseText;
        document.getElementById('md-content').innerHTML = marked(mdText);
      }else {
        translateIndex(JSON.parse(file.responseText));
      }
    }
  }
}

function translateIndex(content) {
  document.getElementById("panel1-subtitle").innerHTML = content.panel1.subtitle;
  document.getElementById("panel2-title").innerHTML = content.panel2.title;
  document.getElementById("panel-2-first").innerHTML = content.panel2.first;
  document.getElementById("panel-2-second").innerHTML = content.panel2.second;
  document.getElementById("panel3-title").innerHTML = content.panel3.title;
  document.getElementById("cap-1").innerHTML = content.panel3.cap1;
  document.getElementById("cap-2").innerHTML = content.panel3.cap2;
  document.getElementById("cap-3").innerHTML = content.panel3.cap3;
  document.getElementById("cap-4").innerHTML = content.panel3.cap4;
  document.getElementById("cap-8").innerHTML = content.panel3.cap8;
  document.getElementById("cap-9").innerHTML = content.panel3.cap9;
  document.getElementById("cap-10").innerHTML = content.panel3.cap10;
  document.getElementById("cap-11").innerHTML = content.panel3.cap11;
  document.getElementById("panel4-title").innerHTML = content.panel4.title;
  document.getElementById("panel4-manu-description").innerHTML = content.panel4.manu;
  document.getElementById("panel4-david-description").innerHTML = content.panel4.david;
  document.getElementById("panel4-vicente-description").innerHTML = content.panel4.vicente;
  document.getElementById("panel5-title").innerHTML = content.panel5.title;
  document.getElementById("panel5-description").innerHTML = content.panel5.description;
  document.getElementById("panel6-title").innerHTML = content.panel6.title;
  document.getElementById("name").innerHTML = content.panel6.name;
  document.getElementById("message").innerHTML = content.panel6.message;
  document.getElementById("panel6-button").value = content.panel6.button;
}

function translateButton() {
  var lang = document.getElementById("language-toggle");
  var page = document.getElementsByTagName('title');
  page = page[0].dataset.title;
  if (lang.value === "en") {
    lang.value = "es";
  } else {
    lang.value = "en";
  }
  localStorage.setItem("language", lang.value);
  translateHeader(lang.value);
  translateContent(lang.value, page);

}
