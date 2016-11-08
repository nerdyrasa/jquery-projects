var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//In addition to their ability to handle events on descendant elements not yet created, another advantage
// of delegated events is their potential for much lower overhead when many elements must be monitored.

$(".controls").on("click", "li", function(){

  // deselect sibling elements
  $(this).siblings().removeClass("selected");

  // select clicked element
  $(this).addClass("selected");


  color = $(".selected").css("background-color");
});

$("#revealColorSelect").click(function(){
  changeColor();
  $("#colorSelect").toggle();
});

function changeColor() {

  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
  console.log( "color", r, g, b);
}

// when color sliders change, change color
$("input[type=range]").change(changeColor);

$("#addNewColor").click(function(){

  var $newColor = $("<li></li>");

  $newColor.css("background-color", $("#newColor").css("background-color"));

  $(".controls ul").append($newColor);

  // actually triggering the click even here
  $newColor.click();
});

$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e) {

  if(mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});

