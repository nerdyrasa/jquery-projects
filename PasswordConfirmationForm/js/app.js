var $form = $("form");
$form.find("span").hide();

var $password = $("#password");
var $confirmPassword = $("#confirm_password");

function passwordEvent() {
  if ($password.val().length > 8) {
    $password.next().hide();
  }
  else {
    $password.next().show();
  }
}

function confirmPasswordEvent() {
  if ($password.val() === $confirmPassword.val()) {
    $confirmPassword.next().hide();
  }
  else {
    $confirmPassword.next().show();
  }
}

$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);