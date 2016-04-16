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
  var mdFile = new XMLHttpRequest();
  mdFile.open("GET", "./markdown/" + page + "-" + lang + ".md", true);
  mdFile.send();
  mdFile.onreadystatechange = function() {
    // Makes sure the document exists and is ready to parse.
    if (mdFile.readyState === 4 && mdFile.status === 200) {
      var mdText = mdFile.responseText;
      document.getElementById('md-content').innerHTML = marked(mdText);
    }
  }
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
