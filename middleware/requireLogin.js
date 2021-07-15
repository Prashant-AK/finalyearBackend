const jwt = require("jsonwebtoken");
// const db = require("../model/connection");
const { JWT_SECRET } = require("../keys");

const User = require("../model/User");

module.exports = (req, res, next) => {
  // console.log(req)
  const { authorization } = req.headers;
  //   console.log(authorization);
  if (!authorization) {
    return res.status(401).json({ error: "You must be logged in" });
  }

  const token = authorization.replace("Bearer ", "");
  //   console.log(token);
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "You must be logged in" });
    } else {
      const password = payload._id;
      User.findOne({ password }).then((result) => {
        if (!result) {
          res.json({ err: "Error coming in signin" });
        } else {
          req.user = result;
          console.log(result);
          next();
        }
      });
      //   let sql = `SELECT * FROM  users where password = '${password}'`;
      //   db.query(sql, (err, result) => {
      //     if (err) return res.status(401).json({ msg: result.sqlMessage });
      //     req.user = result[0];
      //     next();
      //   });
    }
  });
};
