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
