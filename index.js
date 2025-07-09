const express = require("express");
const mongoose = require("mongoose");
const PORT = 8000;
//initialize app
const app = express();

//database connection:
const connectionUrl = "mongodb://127.0.0.1:27017/todoDb";
mongoose.connect(connectionUrl).then(() => console.log("Database connection successful")).catch((error) => console.log(error.message));


//view engine
app.set("view engine", "ejs");
app.get("/", (req, res, next) => {
    try {
       res.render("index")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

//listen server
app.listen(PORT, () => {
    console.log(`Server is runner in port ${PORT}`);
})