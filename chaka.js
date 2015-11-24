(function(global, $) {

  var Chaka = function(firstName, lastName, language) {
    return new Chaka.init(firstName, lastName, language);
  }

  var supportedLangs = ["en", "es"];

  greetings = {
    en: 'Hello',
    es: 'Hola'
  }

  formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  }

  Chaka.prototype = {};

  Chaka.init = function(firstName, lastName, language) {
    var self = this;

    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
  }

  Chaka.init.prototype = Chaka.prototype;

  global.Chaka = global.C$ = Chaka;

}(window, jQuery));
