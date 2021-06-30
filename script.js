function showPreview(){
    var htmlCode = document.getElementById("html").value;
    var cssCode = "<style>"+document.getElementById("css").value+"</style>";
    var jsCode = "<scri"+"pt>"+document.getElementById("js").value+"</scri"+"pt>";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
  }
