"use strict";
const express = require("express");
const {
  deleteSingle,
  deleteUser,
} = require("../controllers/fileGetAndPostController");
const router = express.Router();

router.delete("/product", deleteSingle);
router.post("/deluser", deleteUser);

module.exports = { routes: router };
