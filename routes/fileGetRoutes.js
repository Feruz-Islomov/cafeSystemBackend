const {
  mc,
  kfc,
  pizza,
  drink,
  bugget,
  menu,
  dailysumsGet,
  logoutGETUser,
  getUsers,
} = require("../controllers/fileGetAndPostController");
const express = require("express");
// const fs = require("fs");

const router = express.Router();

router.get("/1", mc);
router.get("/2", kfc);
router.get("/3", pizza);
router.get("/4", drink);
router.get("/5", bugget);
router.get("/6", menu);
router.get("/dailysum", dailysumsGet);
router.get("/logout", logoutGETUser);
router.get("/getusers", getUsers);

// router.get("/checks1", (req, res) => {
//   const users = getUserData();
//   res.send(users);
// });
// const getUserData = () => {
//   const jsonData = fs.readFileSync("check1.json");
//   return JSON.parse(jsonData);
// };

module.exports = { routes: router };
