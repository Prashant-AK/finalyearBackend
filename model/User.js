const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Model
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
  },
  phno: {
    type: Number,
  },
  role: {
    type: String,
    default: "customer",
    enum: ["customer", "admin"],
  },
  // isVerified:{
  //   type:Boolean,
  //   default: false,
  //   enum: ["true","false"]
  // },
});

// Plugin

const User = mongoose.model("Customer", userSchema);

module.exports = User;
