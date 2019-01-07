const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};


exports.product_create = function (req, res, next) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price,
            brand: req.body.brand,
            category: req.body.category,
            image: req.body.image
        }
    );
    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.product_details = function (req, res, next) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
        if (err) return next(err);
        Product.find({}).then(function (products) {
            res.send(products);
        });
        //res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res, next) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        Product.find({}).then(function (products) {
            res.send(products);
        });
        //res.send('Deleted successfully!');
    })
};

exports.product_list = function (req, res) {
    Product.find({}, function (err, products) {
        var productMap = {};

        products.forEach(function (products) {
            productMap[products._id] = products;
        });
        res.send(productMap);
    });
};

exports.product_search = function (req, res, next) {
    Product.find({
        $or: [
            { name: req.query.name },
            { brand: req.query.brand },
            { price: req.query.price },
            //{category:  {name:[req.query.cat_name]}},
        ]
    }, function (err, products) {
        if (err) return next(err);
        res.send(products);
    });
};