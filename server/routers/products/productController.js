const Product = require("../../collections/product");
const { getAllProducts } = require("../../utils/productFuncs");

module.exports = {
  async getAllProducts(req, res, next) {
    res.status(200).send(await getAllProducts());
  },
  async getProductByID(req, res, next) {
    const product = await Product.findById(req.params.id);
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
    res.status(200).send("live");
  },
  async deleteProduct(req, res, next) {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).send(await getAllProducts());
  }
};
