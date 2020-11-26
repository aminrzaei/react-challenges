const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredNumber = {
  type: Number,
  required: true,
};

const marketSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    image: String,
    comments: String,
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    longitude: {
      ...requiredNumber,
      min: -90,
      max: 90,
    },
    latitude: {
      ...requiredNumber,
      min: -180,
      max: 180,
    },
  },
  {
    timestamps: true,
  }
);

const Market = mongoose.model('Market', marketSchema);

module.exports = Market;
