const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/list', product_controller.product_list);
router.get('/:id', product_controller.product_details);
router.get('/*', product_controller.product_search);
router.post('', product_controller.product_create);
router.put('/:id', product_controller.product_update);
router.delete('/:id', product_controller.product_delete);

module.exports = router;