const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");
const router = express.Router();

const User = require("../model/User");

//localhost:5000/signup
router.post("/signup", async (req, res) => {
  const { name, email, phno, password } = req.body;

  if (!name || !email || !phno || !password) {
    return res.json({ error: "Please Add All the Fields" });
  } else {
    // try {
    // console.log("hello");
    let encrypted = await bcrypt.hash(password, 10);
    // const user = { name, email, phno, password: encrypted };
    let user = new User({ name, email, phno, password: encrypted });
    user.save().then((data) => {
      // console.log(user);
      res.json({ data: "You are Registered" });
    });
    // } catch (error) {
    //   return res.json({ error: error });
    // }
  }
});

//login
router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  //   console.log(req.body);
  if (!email || !password) {
    return res.json({ error: "please add email and password" });
  }
  User.findOne({ email }).then((result) => {
    if (!result) {
      res.json({ data: "Email not found" });
    } else {
      // console.log(result);
      bcrypt.compare(password, result.password).then((matchPassword) => {
        if (matchPassword) {
          const token = jwt.sign({ _id: result.password }, JWT_SECRET);
          // console.log(token);
          res.json({ token, result });
        } else {
          return res.json({ msg: "Invalid Password" });
        }
      });
    }
  });
  // let sql = `SELECT * FROM  users where email = '${email}' AND mode = '${mode}'`;
  // db.query(sql, (err, result) => {
  //   if (err) return res.json({ error: err });
  //   if (result.length == 0) return res.json({ msg: "Invalid Email " });
  //   try {
  //     bcrypt.compare(password, result[0].password).then((matchPassword) => {
  //       if (matchPassword) {
  //         const token = jwt.sign({ _id: result[0].password }, JWT_SECRET);
  //         //   console.log(token);
  //         return res.json({
  //           token,
  //           user: {
  //             email: result[0].email,
  //             name: result[0].name,
  //             mode: result[0].mode,
  //             phone: result[0].phone,
  //             id: result[0].id,
  //           },
  //         });
  //       } else {
  //         return res.json({ msg: "Invalid Password" });
  //       }
  //     });
  //   } catch (error) {
  //     return res.json({ error: error });
  //   }
  // });
});

module.exports = router;
