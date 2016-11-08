var $form = $("form");

// Hide hints
$form.find("span").hide();

var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $username = $("#username");

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function isUsernamePresent() {
  return $username.val().length > 0;
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching() && isUsernamePresent();
}

function passwordEvent() {
  if (isPasswordValid()) {
    $password.next().hide();
  }
  else {
    $password.next().show();
  }
}

function confirmPasswordEvent() {
  if (arePasswordsMatching()) {
    $confirmPassword.next().hide();
  }
  else {
    $confirmPassword.next().show();
  }
}

function enablesSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

$username.focus(enablesSubmitEvent).keyup(enablesSubmitEvent);

$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent)
                              .keyup(confirmPasswordEvent)
                              .keyup(enablesSubmitEvent);

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent)
                .keyup(enablesSubmitEvent);

enablesSubmitEvent();