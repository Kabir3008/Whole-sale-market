const Product = require('../models/product')

//Create new product => /api/v1/admin/product/next

exports.newProduct= async(req,res,next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })  
}

//get all products => /api/v1/products
exports.getProducts = async(req, res, next) =>{
    const products = await Product.find();
    res.status(200).json({
        
        sucess: true,
        count:products.length,
        products
    })
}

// Get single product details => /api/v1/admin/product/:id
exports.getSingleProduct = async (req, res, next) => {

    const product = await Product.findById(req.params.id);
  
    if (!product) {
        return res.status(404).json({
        success: false,
        message: 'Product not found'
        })
    }
    res.status(200).json({
        success:true,
        product
    })
}

// Update Product   =>   /api/v1/admin/product/:id
exports.updateProduct = async (req, res, next) => {

    // must use 'let' before product.if you use "const" you will get type error
    let product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success:false,
            message: 'Product not found'
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true,
        useFindAndModify: false
    });
    res.status(200).json({
        sucess:true,
        product
    })
}

// delete Product   =>   /api/v1/admin/product/:id
exports.deleteProduct = async (req, res, next) => {

    // must use 'let' before product.if you use "const" you will get type error
    let product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success:false,
            message: 'Product not found'
        })
    }

    await product.remove();

    res.status(200).json({
        sucess:true,
        message:'Product is deleted'
    })
}
    