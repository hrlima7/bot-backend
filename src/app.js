const express = require("express");
require("express-async-errors");
const auth = require("./controllers/loginController");
const doLogin = require("./controllers/loginController");



const cors = require("cors");
const helmet = require("helmet");


require("express-async-errors");


const app = express();

app.use(express.json());

app.use(cors());

app.use(helmet());
app.post('/login', doLogin);


app.use((error,req,res) =>{
console.error(error);
})


module.exports =app;