const express = require('express');
const db = require('./api/dbConnection/db');
const route = require('./routers/index');
var methodOverride = require('method-override') //override method
const app = express();
const port = 3000;

//connect db 
db.connect();
//
app.use(methodOverride('_method'));

//body_parser to get data from get or axios, XMLHttpRequest
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json()); // read from axios, XMLHttpRequest

// get route
route(app);


app.listen(port, () => console.log(`Server is ready in port: ${port}`));