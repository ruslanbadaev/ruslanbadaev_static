var express = require('express'),
  path = require('path'),
  app = express();
app.set('port', 80);

app.use(express.static(path.join(__dirname, './public')));

var server = app.listen(app.get('port'), function () {
  console.log('The server is running on http://localhost:' + app.get('port'));
});
