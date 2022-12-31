const express = require("express");
const Menu = require("../models/Menu");

const router = new express.Router();

//create users here
router.post("/create", async (req, res) => {
  try {
    const menu = new Menu(req.body);
    const createUser = await menu.save();
    res.status(201).send(createUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

//get data for database
router.get("/get", async (req, res) => {
  try {
    const menu = await Menu.find();
    if (!menu) {
      res.send("menu Empty..");
    }
    res.status(200).send(menu);
  } catch (error) {
    res.status(404).send(error);
  }
});

//get the indivisual data from id//
router.get("/get/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMenu = await Menu.findById(_id);
    if (!getMenu) {
      res.status(500).send("User not found");
    } else {
      res.status(200).send(getMenu);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});
/****Update Menu */
router.patch("/get/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateMenu = await Menu.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateMenu);
  } catch (err) {
    res.status(400).send(err);
  }
});

/***Delete Menu */
router.delete("/delete/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteMenu = await Menu.findByIdAndDelete(_id);
    if (!deleteMenu) {
      res.send("users not found");
    } else {
      res.send("user successfully deleted");
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
