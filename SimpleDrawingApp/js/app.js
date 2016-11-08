var color = $(".selected").css("background-color");
var $controlsList = $(".controls li");

$controlsList.click(function(){

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