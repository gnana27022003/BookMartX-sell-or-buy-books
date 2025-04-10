let mongoose = require('mongoose');

let sellerSchema = mongoose.Schema({
  email: String,
  password: String,
  name: String,
  uniqueId: { type: String, unique: true },
  phone: Number,
  books: [{
    title: String,
    author: String,
    price: Number,
    category: String,
    sold: { type: String, enum: ['yes', 'no'], default: 'no' },
    book_image: { // Change to a single image object
      filename: { type: String },
      contentType: { type: String },
      uploadDate: { type: Date },
      metadata: { type: Object }
    },
    condition: String
  }],
  role: { type: String, enum: ['client', 'seller'], default: 'seller' }
});

let sellermodel = mongoose.model('selleregform', sellerSchema);
module.exports = sellermodel;
