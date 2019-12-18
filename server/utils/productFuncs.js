const Product = require("../collections/product");
module.exports = {
  getAllProducts: async () => {
    return await Product.find();
  }
};
