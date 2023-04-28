const express = require("express");

require("express-async-errors");
const loginMiddleware = require("./middleware/loginMIddleware")
const settingsController = require("./controllers/settingsController");
const doLogin = require("./controllers/loginController");
const cors = require("cors");
const helmet = require("helmet");
require("express-async-errors");



const app = express();

app.use(express.json());

app.use(cors());

app.use(helmet());

app.post('/login', doLogin);

app.get('/settings',loginMiddleware, settingsController.getSettings);

app.post('/logout', doLogout);

app.use((error,req,res) =>{
console.error(error);
})


module.exports =app;