const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(cors())

//var models = require("./models");
app.get("/api/",(req,res)=>res.json({message:"Welcome to api test"}))
/* app.post("/api/users/authenticate",(req,res)=>{
    const data = req.body
    res.status(200).send({data})
}) */
const usuarioRoute = require('./routes/usuario')
const ticketRoutes = require('./routes/ticket')
ticketRoutes(app)
usuarioRoute(app)

module.exports = app