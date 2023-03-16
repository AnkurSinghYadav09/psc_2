const express = require("express");
const connection =require("./configs/db");
const cartoonControllers=require("./controllers/cartoon.controller")

const app = express();
app.use(express.json());   //middleware
app.use("/cartoon",cartoonControllers);  //middleware


const PORT = 8080;

app.listen(PORT, () => {
  try {
    connection();
    console.log("listening on port " + PORT);
  } catch (error) {
    console.log("error: " + error);
  }
});
