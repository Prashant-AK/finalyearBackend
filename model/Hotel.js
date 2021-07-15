var mongoose = require("mongoose");

var addhotelschema = new mongoose.Schema(
  {
    hotelname: {
      type: String,
      required: true,
    },

    hotelowner: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    phno: {
      type: String,
      required: true,
    },
    facilities: {
      type: String,
      required: true,
    },

    totalroom: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("addhotel", addhotelschema);
