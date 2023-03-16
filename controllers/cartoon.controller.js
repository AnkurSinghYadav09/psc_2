const express = require("express");

const router = express.Router();

const cartoon=require("../models/cartoon.model")

router.get("/", async (req, res) => {
  try {
    const Cartoon=await cartoon.find();
    return res.status(200).send(Cartoon);
  } catch (error) {
    console.log(error);
  }
});


router.post("/", async (req, res) => {
    try {
        const Cartoon=await cartoon.create(req.body);
        return res.status(200).send(Cartoon);
    } catch (error) {
      console.log(error);
    }
  });


//   router.patch("/:id", async (req, res) => {
//     try {
//       return res.status(200).send("hello all students of this batch loves cartoon");
//     } catch (error) {
//       console.log(error);
//     }
//   });


//   router.get("/:id", async (req, res) => {
//     try {
//       return res.status(200).send("hello all students of this batch loves cartoon");
//     } catch (error) {
//       console.log(error);
//     }
//   });


  router.delete("/:id", async (req, res) => {
    try {
        const Cartoon=await cartoon.findByIdAndDelete(req.params.id);
        return res.status(200).send(Cartoon);
    } catch (error) {
      console.log(error);
    }
  });


  module.exports = router;