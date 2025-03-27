const dbConnect = require('./DB/dbConnect');
const express = require('express');
const cors = require('cors');
const { contactUs } = require('./API/ContactUs');
const { register } = require('./API/Register');
const { Login } = require('./API/Login');
const { FetchAllUser } = require('./API/FetchAllUser');
const { UpdateProfile } = require('./API/UpdateProfile');
const { DeleteUser } = require('./API/Deleteuser');
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
app.post("/login", Login);
app.get('/fetchalluser', FetchAllUser);
app.post("/update_profile", UpdateProfile);
//delete user
app.post('/delete_user',DeleteUser);





