const express = require("express");
const PORT = 8000;
//initialize app
const app = express();

//view engine
app.set("view engine", "ejs");

//listen server
app.listen(PORT, () => {
    console.log(`Server is runner in port ${PORT}`);
})