var $password = $("#password");
var $confirm_password = $("#confirm_password");

//hide hints
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirm_password.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching(); 
}

function passwordEvent() {
  //find out if password is valid
  if (isPasswordValid()) {
    //if valid, then hide
    $password.next().hide();
  }
  else
  {
    //else, show hint
    $password.next().show();
  }
  
}

function confirmPasswordEvent() {
  //find out if password and confirmation match
  if (arePasswordsMatching()) {
    //if passwords match, then hide
    $confirm_password.next().hide();
  }
  else
  {
    //else, show hint
    $confirm_password.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}


//when event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//when event happens on confirmation input
$confirm_password.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();