const Product = require('../models/product')

const errorHandler = require('../utils/errorHandler');

const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const APIFeatures = require('../utils/apiFeatures');
const ErroorHandler = require('../utils/errorHandler');


//Create new product => /api/v1/admin/product/next

exports.newProduct = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
})

//get all products => /api/v1/products
exports.getProducts = catchAsyncErrors(async (req, res, next) => {


    const resPerPage = 4;
    const productCount = await Product.countDocuments()
    const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().pagination(resPerPage)

    const products = await apiFeatures.query;
    setTimeout(() => {
        res.status(200).json({

            sucess: true,

            productCount,
            resPerPage,
            products
        })
    }, 500);
})

// Get single product details => /api/v1/admin/product/:id
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new errorHandler('Product not found', 404))

    }
    res.status(200).json({
        success: true,
        product
    })
})

// Update Product   =>   /api/v1/admin/product/:id
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {

    // must use 'let' before product.if you use "const" you will get type error
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new errorHandler('Product not found', 404))
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    res.status(200).json({
        sucess: true,
        product
    })
})

// delete Product   =>   /api/v1/admin/product/:id
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {

    // must use 'let' before product.if you use "const" you will get type error
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new errorHandler('Product not found', 404))
    }

    await product.remove();

    res.status(200).json({
        sucess: true,
        message: 'Product is deleted'
    })
})

// Create new review => /api/v1/review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
    const { rating, comment, productId } = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    };

    const product = await Product.findById(productId);

    const isReviewed = product.reviews.find(
        (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
        product.reviews.forEach((rev) => {
            if (rev.user.toString() === req.user._id.toString())
                (rev.rating = rating), (rev.comment = comment);
        });
    } else {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    }

    let avg = 0;

    product.reviews.forEach((rev) => {
        avg += rev.rating;
    });

    product.ratings = avg / product.reviews.length;

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
    });
});

// Get product Review => /api/v1/reviews
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.query.id);

    res.status(200).json({
        success: true,
        reviews: product.reviews
    })
})


// Delete Product Review   =>   /api/v1/reviews
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.query.productId);

    if (!product) {
        return next(new Errorhandler("Product not found", 404));
    }

    const reviews = product.reviews.filter(
        (rev) => rev._id.toString() !== req.query.id.toString()
    );

    let avg = 0;

    reviews.forEach((rev) => {
        avg += rev.rating;
    });

    let ratings = 0;

    if (reviews.length === 0) {
        ratings = 0;
    } else {
        ratings = avg / reviews.length;
    }

    const numOfReviews = reviews.length;

    await Product.findByIdAndUpdate(
        req.query.productId,
        {
            reviews,
            ratings,
            numOfReviews,
        },
        {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        }
    );

    res.status(200).json({
        success: true,
    });
});
