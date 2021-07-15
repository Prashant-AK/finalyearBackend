const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");
const router = express.Router();

const User = require("../model/User");

router.post("/add-hotel", function (req, res, next) {
  // var filepath=req.file.filename
  hotel
    .create(
      ({
        hotelname,
        hotelowner,
        address,
        city,
        zip,
        phno,
        facilities,
        totalroom,
        price,
        images,
      } = req.body)
    )
    .then(() => {
      res.redirect(req.body);
    });
});

module.exports = router;
