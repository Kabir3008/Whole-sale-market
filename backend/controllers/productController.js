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


    const resPerPage = 8;
    const productCount = await Product.countDocuments()
    const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().pagination(resPerPage)

    const products = await apiFeatures.query;
    setTimeout(() => {
        res.status(200).json({

            sucess: true,

            productCount,
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
