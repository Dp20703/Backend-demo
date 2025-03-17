const dbConnect = require('./DB/dbConnect');
const express = require('express');
const cors = require('cors');
const { contactUs } = require('./API/ContactUs');
const { register } = require('./API/Register');
const app = express();

dbConnect();

// Server port
const port = 4000;
app.listen(port);
// console.log('Server is running on' + `http://localhost:${port}`);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


//create routes 
app.post('/contactUs', contactUs);
app.post('/register', register);




