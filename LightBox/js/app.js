// Create an overlay

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

$overlay.append($image);
$overlay.append($caption);

$('body').append($overlay);

// Capture the click event on the link to an image.

$('#imageGallery a').click(function(event){

  event.preventDefault();
  var imageLocation = $(this).attr('href');
  $image.attr('src', imageLocation);

  var caption = $(this).children('img').attr('alt');
  // get the caption from the alt attribute of the img
  $caption.text(caption);

  $overlay.show();

  // Display the image in the overlay
  // Use alt text as the caption

});

$overlay.click(function(){
  $overlay.hide();
});

// Display image associated with the link.
// When image is clicked, close.


