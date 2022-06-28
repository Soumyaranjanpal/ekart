const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Plese Enter Product Name"],
    trim: true
  },
  description: {
    type: String,
    required: [true, "Please Enter Product Description"]
  },
  price: {
    type: Number,
    required: [true, "Please Enter Produce Price"],
    maxLength: [8, "Price can be maximum of length 8"]
  },
  rating: {
    type: Number,
    default: 0
  },
  images: [
    {
      public_id: {
        type: String,
        required: true
      },
      public_url: {
        type: String,
        required: true
      }
    }
  ],
  category: {
    type: String,
    required: [true, "Please Enter Product Category"]
  },
  stock: {
    type: Number,
    default: 1,
    maxLength: [4, "Stock can not exceed 4 characters"]
  },
  numOfReviews: {
    type: Number,
    default: 0
  },
  review: [{
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true
    },
    comment: {
      type: String,
      required: true
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }

})

module.exports = mongoose.model("Product", productSchema);