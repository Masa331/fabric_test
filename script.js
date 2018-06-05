var canvas = new fabric.Canvas('c');
var fonts = ["DejaVu Sans Condensed", "Aclonica", "AbrilFatface"];

var textbox = new fabric.Textbox('Lesisuky', {
  left: 50,
  top: 50,
  width: 150,
  fontSize: 20
});

canvas.add(textbox).setActiveObject(textbox);
fonts.unshift('Times New Roman');

var select = document.getElementById("font-family");
fonts.forEach(function(font) {
  var option = document.createElement('option');
  option.innerHTML = font;
  option.value = font;
  select.appendChild(option);
});

document.getElementById('font-family').onchange = function() {
  if (this.value !== 'Times New Roman') {
    loadAndUse(this.value);
  } else {
    canvas.getActiveObject().set("fontFamily", this.value);
    canvas.requestRenderAll();
  }
};

function loadAndUse(font) {
  var myfont = new FontFaceObserver(font)
  myfont.load()
    .then(function() {
      canvas.getActiveObject().set("fontFamily", font);
      canvas.requestRenderAll();
    }).catch(function(e) {
      console.log(e)
      alert('font loading failed ' + font);
    });
}
