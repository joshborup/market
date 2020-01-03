const Product = require("../../collections/product");
const { getAllProducts } = require("../../utils/productFuncs");

module.exports = {
  async getAllProducts(req, res, next) {
    res.status(200).send(await getAllProducts());
  },
  async getProductByID(req, res, next) {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).send(product);
  },
  async createProduct(req, res, next) {
    const { name, price, description, image, quantity } = req.body;
    const newProduct = new Product({
      name,
      price,
      description,
      image,
      quantity
    });
    newProduct.save(async err => {
      if (err) {
        res.status(400).send("there was an error on the server");
      } else {
        res.status(200).send(await getAllProducts());
      }
    });
  },
  async updateProduct(req, res, next) {
    const { id } = req.params;
    const { name, price, description, image, quantity } = req.body;

    const product = await Product.findById(id);
    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.image = image || product.image;
    product.quantity = quantity || product.quantity;
    product.save(async err => {
      if (err) {
        res.status(400).send("there was an error on the server");
      } else {
        res.status(200).send(await getAllProducts());
      }
    });
  },
  async deleteProduct(req, res, next) {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).send(await getAllProducts());
  }
};
