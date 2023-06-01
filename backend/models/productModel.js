const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "This field is required"],
  },
  description: {
    type: String,
    required: [true, "please fill product description"],
  },
  price: {
    type: Number,
    required: [true, "Enter product price"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "please enter product category"],
  },
  Stock: {
    type: Number,
    required: [true, "please enter product stock"],
    maxLength: [7, "Stock cannot exceed 7 characters"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    date: {
      type: Date,
      default: Date.now,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
