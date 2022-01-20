"use strict";
const fs = require("fs");
const express = require("express");
const { upload } = require("../helpers/multerHelper");
const {
  singleFileUpload,
  menuFileUpload,
  dailySumPost,
  signupUser,
  loginUser,
} = require("../controllers/fileGetAndPostController");
const router = express.Router();

router.post("/singlefile", upload.single("img"), singleFileUpload);
router.post("/menufile", upload.single("img"), menuFileUpload);
router.post("/sum", dailySumPost);
router.post("/user/signup", signupUser);
router.post("/user/login", loginUser);

module.exports = { routes: router };
// router.post("/check1todb", (req, res) => {
//   const checklar = getUserData();
//   const userData = req.body;
//   checklar.unshift(userData);
//   saveUserData(checklar);
//   res.send({ success: true, msg: "User data added successfully" });
// });
// const getUserData = () => {
//   const jsonData = fs.readFileSync("check1.json");
//   return JSON.parse(jsonData);
// };
// const saveUserData = (data) => {
//   const stringifyData = JSON.stringify(data);
//   fs.writeFileSync("check1.json", stringifyData);
// };
