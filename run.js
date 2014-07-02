var stdin = require('./');

var deferred = stdin.get();

deferred.then(function(arg) {
  var json = arg.interpret.getJson(arg.text);

  console.log('arg>>>', json);
});