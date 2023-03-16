const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connection=async()=>{
    await mongoose.connect("mongodb+srv://cartoon:cartoon123@cluster0.fx2karj.mongodb.net/?retryWrites=true&w=majority");
    console.log("connection established")
}


module.exports =connection;