// 1. Declare a function and invoke the function.

//function myCode() {
//	$(".warning").hide().show("slow");
//}
//
//myCode();

// 2. Declare a function as a variable and pass it to ready

//var myCode = function myCode() {
//  $(".warning").hide().show("slow");
//}
//$(document).ready(myCode);

// 3. Pass on anonymous function into ready function

// Remember that $(document) is really just the shorthand for jQuery(document)
// You can type in $ in the console to verify that jQuery is loaded

//$(document).ready( function myCode() {
//    $(".warning").hide().show("slow");
//  }
//);

// 4. Just pass the anonymous function also called the handler.

//$( function myCode() {
//    $(".warning").hide().show("slow");
//  }
//);

// 5. If the script tags are at the bottom, right before the closing body tag, then you don't need to pass it to ready.
$(".warning").hide().show("slow");