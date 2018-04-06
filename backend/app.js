var express = require ('express');
var app = express();
var port = process.env.PORT || 3000;

var itemRouter = require('./src/routes/item.routes')();
var demoRouter = require('./src/routes/demo.routes')();

app.use('/items', itemRouter);
app.use('/demo', demoRouter);

app.get('/', function( req, res ) {
  res.send('Welcome');
});
app.listen(port, function(  ) {
  console.log( 'Running on PORT: ' + port );
});