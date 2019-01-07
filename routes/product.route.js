const express = require('express');
const cors = require('cors');
const router = express.Router();
const product_controller = require('../controllers/product.controller');


router.use(cors());

// // Set up a whitelist and check against it
// var whitelist = ['https://products-fb1dc.firebaseapp.com', 'http://localhost:3000']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// // Then pass them to cors
// router.use(cors(corsOptions));

router.get('/list', product_controller.product_list);
router.get('/:id', product_controller.product_details);
router.get('/*', product_controller.product_search);
router.post('', product_controller.product_create);
router.put('/:id', product_controller.product_update);
router.delete('/:id', product_controller.product_delete);

module.exports = router;