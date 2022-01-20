"use strict";
const fs = require("fs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const McProducts = require("../models/McProducts");
const KfcProducts = require("../models/KfcProducts");
const PizzaProducts = require("../models/PizzaProducts");
const DrinksProducts = require("../models/DrinksProducts");
const BuggetBurgersProducts = require("../models/BuggetBurgersProducts");
const Menu = require("../models/Menu");
const Sum = require("../models/Sum");
const User = require("../models/userModel");

// POST product datas
const singleFileUpload = async (req, res) => {
  try {
    const menu = req.body.menu;
    const name = req.body.name;
    const img = req.file.path;
    const price = req.body.price;
    const category = req.body.category;

    if (menu === "McDonalds burgers") {
      const product = new McProducts({
        name: name,
        img: img,
        price: price,
        category: category,
        menu: menu,
      });
      await product.save();
      res.status(200).send("File Uploaded Successfully");
    } else if (menu === "Kfc chickens") {
      const product = new KfcProducts({
        name: name,
        img: img,
        price: price,
        category: category,
        menu: menu,
      });
      await product.save();
      res.status(200).send("File Uploaded Successfully");
    } else if (menu === "Pizza") {
      const product = new PizzaProducts({
        name: name,
        img: img,
        price: price,
        category: category,
        menu: menu,
      });
      await product.save();
      res.status(200).send("File Uploaded Successfully");
    } else if (menu === "Bugget burgers") {
      const product = new BuggetBurgersProducts({
        name: name,
        img: img,
        price: price,
        category: category,
        menu: menu,
      });
      await product.save();
      res.status(200).send("File Uploaded Successfully");
    } else if (menu === "Drinks") {
      const product = new DrinksProducts({
        name: name,
        img: img,
        price: price,
        category: category,
        menu: menu,
      });
      await product.save();
      res.status(200).send("File Uploaded Successfully");
    } else {
      res.send("sorry enter right product");
    }
  } catch (err) {
    res.status(400).send(`from catch err: ${err.message}`);
  }
};
const dailySumPost = async (req, res) => {
  try {
    const sums = new Sum({
      dailyRevenue: req.body.d,
    });
    await sums.save();
    res.status(200).send("File Uploaded Successfully");
  } catch (err) {
    res.status(400).send(`from catch err: ${err.message}`);
  }
};
//DELETE product data
const deleteSingle = async (req, res) => {
  try {
    const menu = req.body.menu;
    const id = req.body._id;
    const img = req.body.img;
    fs.unlink(`${img}`, (err) => {
      if (err) {
        console.log(`error happened: ${err}`);
      }
    });
    if (menu === "McDonalds burgers") {
      await McProducts.findByIdAndRemove(id).exec();
      res.status(200).send("deleted successfully");
    } else if (menu === "Kfc chickens") {
      await KfcProducts.findByIdAndRemove(id).exec();
      res.status(200).send("deleted successfully");
    } else if (menu === "Pizza") {
      await PizzaProducts.findByIdAndRemove(id).exec();
      res.status(200).send("deleted successfully");
    } else if (menu === "Drinks") {
      await DrinksProducts.findByIdAndRemove(id).exec();
      res.status(200).send("deleted successfully");
    } else if (menu === "Bugget burgers") {
      await BuggetBurgersProducts.findByIdAndRemove(id).exec();
      res.status(200).send("deleted successfully");
    } else {
      res.status(400).send("sorry not deleted the product");
    }
  } catch (err) {
    res.status(400).send(`from catch err: ${err.message}`);
  }
};
//UPDATE product data
const updateProduct = async (req, res) => {
  const id = req.body.id;
  const newName = req.body.newName;
  const newPrice = req.body.newPrice;
  const menu = req.body.menu;
  try {
    if (menu === "McDonalds burgers") {
      const existing = await McProducts.findById(id);
      existing.name = newName;
      existing.price = newPrice;
      await existing.save();
      res.send("updated successfully");
    } else if (menu === "Kfc chickens") {
      const existing = await KfcProducts.findById(id);
      existing.name = newName;
      existing.price = newPrice;
      await existing.save();
      res.send("updated successfully");
    } else if (menu === "Pizza") {
      const existing = await PizzaProducts.findById(id);
      existing.name = newName;
      existing.price = newPrice;
      await existing.save();
      res.send("updated successfully");
    } else if (menu === "Drinks") {
      const existing = await DrinksProducts.findById(id);
      existing.name = newName;
      existing.price = newPrice;
      await existing.save();
      res.send("updated successfully");
    } else if (menu === "Bugget burgers") {
      const existing = await BuggetBurgersProducts.findById(id);
      existing.name = newName;
      existing.price = newPrice;
      await existing.save();
      res.send("updated successfully");
    } else {
      res.status(400).send("sorry not deleted the product");
    }
  } catch (err) {
    res.status(400).send(`from catch err: ${err.message}`);
  }
};
//UPDATE menu data
const menuFileUpload = async (req, res) => {
  const id = req.body.id;
  const newName = req.body.name;
  const newImg = req.file.path;

  try {
    const existing = await Menu.findById(id);
    fs.unlink(`${existing.img}`, (err) => {
      if (err) {
        console.log(`error happened: ${err}`);
      }
    });
    existing.img = newImg;
    existing.name = newName;
    await existing.save();
    res.send("updated successfully");
  } catch (err) {
    res.status(400).send(`from catch err: ${err.message}`);
  }
};

// GET ALL product datas NOT images
const mc = async (req, res) => {
  await McProducts.find()
    .then((d) => res.send(d))
    .catch((err) => console.log(err));
};
const kfc = async (req, res) => {
  await KfcProducts.find()
    .then((d) => res.send(d))
    .catch((err) => console.log(err));
};
const pizza = async (req, res) => {
  await PizzaProducts.find()
    .then((d) => res.send(d))
    .catch((err) => console.log(err));
};
const drink = async (req, res) => {
  await DrinksProducts.find()
    .then((d) => res.send(d))
    .catch((err) => console.log(err));
};
const bugget = async (req, res) => {
  await BuggetBurgersProducts.find()
    .then((d) => res.send(d))
    .catch((err) => console.log(err));
};
const menu = async (req, res) => {
  await Menu.find()
    .then((d) => res.send(d))
    .catch((err) => console.log(err));
};
const dailysumsGet = async (req, res) => {
  await Sum.find()
    .then((d) => res.send(d))
    .catch((err) => console.log(err));
};
//token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "net ninja secret", {
    expiresIn: maxAge,
  });
};
// POST USER LOGIN & SIGNup
const signupUser = asyncHandler(async (req, res) => {
  const { name, password, isAdmin } = req.body;
  const userExist = await User.findOne({ name });
  if (userExist) {
    res.status(400);
    throw new Error("User already exist");
  }
  const user = await User.create({
    name,
    password,
    isAdmin,
  });
  if (user) {
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({
      _id: user._id,
      name: user.name,
      isAdmin: user.isAdmin,
      token: token,
    });
  } else {
    res.status(400).send("qaytadan ro'yxatdan o'ting");
    throw new Error("User saqlanmadi qaytadan kiriting!");
  }
});
const loginUser = asyncHandler(async (req, res) => {
  const { name, password } = req.body;
  const user = await User.findOne({ name });
  if (user && (await user.matchPassword(password))) {
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.json({
      _id: user._id,
      name: user.name,
      isAdmin: user.isAdmin,
      token: token,
    });
  } else {
    res.status(400);
    throw new Error("no such user!");
  }
});
//GET logout
const logoutGETUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.send("logged out");
  // res.redirect("/login");
});
//GET users
const getUsers = async (req, res) => {
  await User.find()
    .then((d) => res.send(d))
    .catch((err) => console.log(err));
};
//DELETE user
const deleteUser = async (req, res) => {
  try {
    const id = req.body.id;
    await User.findByIdAndRemove(id).exec();
    res.status(200).send("deleted successfully");
  } catch (err) {
    res.status(400).send(`from catch err: ${err.message}`);
  }
};

module.exports = {
  mc,
  kfc,
  pizza,
  drink,
  bugget,
  menu,
  singleFileUpload,
  deleteSingle,
  updateProduct,
  menuFileUpload,
  dailySumPost,
  dailysumsGet,
  signupUser,
  loginUser,
  logoutGETUser,
  getUsers,
  deleteUser,
};
