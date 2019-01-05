const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    price: { type: Number, required: true },
    brand: { type: String, required: true, max: 100 },
    image: { type: String, required: false },
    category: [{ id: Number, name: String, require: false }],
});

// Export the model
module.exports = mongoose.model('Product', ProductSchema);