const express = require('express');
const port = 2000;
const db = require('./config/mongoose');

const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

//redirecting routes
app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) { console.log('error'); return; }
    
    console.log(`server is running on ${port}`);
});