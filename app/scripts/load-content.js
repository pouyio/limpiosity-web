// Markdown parser for JS https://github.com/chjj/marked
function load(file) {
  var mdFile = new XMLHttpRequest();
  mdFile.open("GET", "./markdown/" + file + ".md", true);
  mdFile.send();
  mdFile.onreadystatechange = function() {
    // Makes sure the document exists and is ready to parse.
    if (mdFile.readyState === 4 && mdFile.status === 200) {
      var mdText = mdFile.responseText;
      document.getElementById('md-content').innerHTML =
        marked(mdText);
    }
  }
}

function changeLanguage(e, data) {
  var lang = e.target;
  if (typeof(Storage) !== 'undefined') {
    
  } else {
    alert("Your browser is very old, try upgrading it");
  }
  switch (data) {
    case 'index':
      alert("jajajja");
      break;
    default:
      if (lang.value === "en") {
        lang.value = "es";
      } else {
        lang.value = "en";
      }
      load(data + "-" + lang.value);
      lang.style.background = "url('../images/flags/" + lang.value + ".png') 50% 50%";
  }
}
