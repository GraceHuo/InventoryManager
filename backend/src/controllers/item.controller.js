var mongodb  = require( 'mongodb' ).MongoClient;
var objectId = require( 'mongodb' ).ObjectID;

var itemController = function() {
  var middleware = function( req, res, next ) {
    // if (!req.user) {
    // res.redirect('/');
    // }
    next();
  };

  var getItems = function( req, res ) {
    var url = 'mongodb://localhost:27017/inventoryManager';

    mongodb.connect( url, function( err, db ) {
      if (err) {
        console.log( 'Cannot connect to mogodb, error: ', err );
      }
      else {
        var collection = db.collection( 'items' );

        collection.find( {} ).toArray(
          function( err, results ) {
            res.send( {
              items: results
            } );
          }
        );
      }
    } );

  };


  return {
    getItems  : getItems,
    middleware: middleware
  };
};

module.exports = itemController;