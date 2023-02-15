const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      require:true
    },
    price: {
      type: Number,
      require:true
    },
    stock: {
      type: Number,
      require:true
    },
    brand: {
      type: String,
      require:true
    },
    category: {
      type: String,
      require:true
    },
    shortDescription: {
      type: String,
      require:true
    },
    longDescription: {
      type: String,
      require:true
    },
    freeShipping: {
      type: Boolean,
      require:true
    },
    minAge: {
      type: Number,
      require:true
    },
    maxAge: {
      type: Number,
      require:true
    },
    productImage: {
      type: String,
      require:true
    },
    cloudinary_id: {
      type: String
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;