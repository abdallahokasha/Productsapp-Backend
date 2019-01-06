const express = require('express');
const cors = require('cors');
const router = express.Router();
const product_controller = require('../controllers/product.controller');

// a simple test url to check that all of our files are communicating correctly.

// router.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

router.use(cors());

router.get('/list', product_controller.product_list);
router.get('/:id', product_controller.product_details);
router.get('/*', product_controller.product_search);
router.post('', product_controller.product_create);
router.put('/:id', product_controller.product_update);
router.delete('/:id', product_controller.product_delete);

module.exports = router;