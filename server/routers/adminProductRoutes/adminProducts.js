const express = require("express");

const products = express.Router();
const {
  getAllProducts,
  getProductByID,
  deleteProduct,
  updateProduct,
  createProduct
} = require("./adminProductController");

// define the all products
products
  .route("/")
  .get(getAllProducts)
  .post(createProduct);

products
  .route("/:id")
  .get(getProductByID)
  .put(updateProduct)
  .delete(deleteProduct);

// define the individual product

module.exports = products;
