var express = require( 'express');
var itemRouter = express.Router();

var router = function() {
  var itemController = require('../controllers/item.controller')();

  itemRouter.use(itemController.middleware);

  itemRouter.route( '/' )
    .get( itemController.getItems );

  return itemRouter;
};

module.exports = router;