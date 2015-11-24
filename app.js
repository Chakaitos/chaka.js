// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var user = C$("Jose", "Borja");

// use our chainable methods
user.greet().setLang('es').greet(true).log();

// let's use our object on the click of the login button
$('#login').click(function() {
  var loginGrtr = C$('Jose', 'Borja');

  // hide the login on the screen
  $('#logindiv').hide();

  // fire off an HTML greeting, passing '#greeting' as the selector and the chosen language, and log the welcome as well
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});
