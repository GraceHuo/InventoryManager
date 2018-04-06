var express     = require( 'express' );
var demoRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var items = [
  {
    name: 'Knife',
    description: 'Knife Description',
    category : 0,
    quantity: 1,
    location: 2,
    price: 96
  },
  {
    name: 'Cloth',
    description: 'Cloth Description',
    category : 1,
    quantity: 12,
    location: 1,
    price: 123
  },
  {
    name: 'Paper',
    description: 'Paper Description',
    category : 0,
    quantity: 100,
    location: 1,
    price: 10
  },
  {
    name: 'Pen',
    description: 'Pen Description',
    category : 0,
    quantity: 15,
    location: 0,
    price: 2
  },
  {
    name: 'Water',
    description: 'Water Description',
    category : 0,
    quantity: 1,
    location: 2,
    price: 10
  }
];

var router = function( ) {

  demoRouter.route( '/addItems' )
    .get( function( req, res ) {
      var url = 'mongodb://localhost:27017/inventoryManager';

      mongodb.connect( url, function( err, db ) {
        if(err) {
          console.log( 'Cannot connect to mogodb, error: ', err );
        }
        else{
          var collection = db.collection( 'items' );
          collection.insertMany( items,
            function( err, results ) {
              if(err){
                console.log( 'Cannot insert many items, error: ', err );
              }
              else{
                res.send( results );
                db.close();
              }
            }
          );
        }

      } );
    } );

  return demoRouter;
};

module.exports = router;