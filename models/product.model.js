const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    brand: {type: String, required: true, max: 100},
    image: {type: String, required: true},
    category: [{ id: Number, name: String }],
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);