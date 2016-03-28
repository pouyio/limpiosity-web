var loadComponents = function() {
  var mdFile = new XMLHttpRequest();
  mdFile.open("GET", "/scripts/components.md", true);
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

var loadCircuits = function() {
  var mdFile = new XMLHttpRequest();
  mdFile.open("GET", "/scripts/circuits.md", true);
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

var loadCode = function() {
  var mdFile = new XMLHttpRequest();
  mdFile.open("GET", "/scripts/code.md", true);
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
