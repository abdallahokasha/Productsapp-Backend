const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('', product_controller.product_list);
router.post('', product_controller.product_create);
router.get('/:id', product_controller.product_details);
router.put('/:id', product_controller.product_update);
router.delete('/:id', product_controller.product_delete);

module.exports = router;