"use strict";
const express = require("express");

const { updateProduct } = require("../controllers/fileGetAndPostController");

const router = express.Router();

router.put("/product", updateProduct);

module.exports = { routes: router };
