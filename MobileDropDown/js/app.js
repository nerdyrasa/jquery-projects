// Create a detached select and append it to #menu
var $select = $('<select></select>');
var $menu = $('#menu');
$menu.append($select);

// Cycle through all the links in the menu: This is a traversal operation
$menu.find('a').each(function() {
  var $anchor = $(this);
  var $option = $('<option></option>');

  // Get the parent of the anchor and see if it's selected
  if ($anchor.parent().hasClass('selected')) {
    $option.prop('selected', true);
  }

  $option.val($anchor.attr('href'));
  $option.text($anchor.text());

  $select.append($option);

});

$select.change(function(){
  window.location = $select.val();
});


