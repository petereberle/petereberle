(function () {
  var file = file || "projects.md";
  var reader = new stmd.DocParser();
  var writer = new stmd.HtmlRenderer();
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
      display(xhr);
    }
  };

  function display(xhr) {
    var parsed = reader.parse(xhr.responseText);
    var content = writer.renderBlock(parsed);
    document.getElementsByClassName("content")[0].innerHTML = content;
    
      $('.article').children(":first-child").addClass("title");
      $('.article').find("ul").addClass("images");
      $('.images').children(":first-child").addClass("first");
  }

  xhr.open('GET', file);
  xhr.send();
})();
