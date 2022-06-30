const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
// Create Product //admin

exports.createProduct = catchAsyncErrors(async (req, res, next) => {

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product
  })
});

// GET All Products

exports.getAllProducts = catchAsyncErrors(async (req, res) => {

  const products = await Product.find();
  res.status(200).json({
    success: true,
    products
  });
});

// Get Product Details

exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {

  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  res.status(200).json({
    success: true,
    product
  });

});

// Update Products - Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {

  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    upsert: false
  });

  res.status(200).json({
    success: true,
    product
  });

});


// Delete Product

exports.deleteProduct = catchAsyncErrors(async (req, res) => {

  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product Deleted sucessfully"
  });

});