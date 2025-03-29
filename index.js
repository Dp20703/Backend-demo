const dbConnect = require('./DB/dbConnect');
const express = require('express');
const cors = require('cors');
const { contactUs } = require('./API/ContactUs');
const { register } = require('./API/Register');
const { Login } = require('./API/Login');
const { FetchAllUser } = require('./API/FetchAllUser');
const { UpdateProfile } = require('./API/UpdateProfile');
const { DeleteUser } = require('./API/Deleteuser');
const { AddProduct } = require('./API/AddProduct');
const multer = require('multer');
const Path = require('path');
const upload = require('./multer/FileUploader');
const { FetchProducts } = require('./API/FetchProducts');
const app = express();

dbConnect();

// Server port
const port = 4000;
app.listen(port);
console.log('Server is running on ' + `http://localhost:${port}`);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// use images folder for storing images
app.use('/images', express.static(Path.join(__dirname, 'images')));


//create routes 
app.post('/contactUs', contactUs);//contact us
app.post('/register', register);//register
app.post("/login", Login);//login
app.get('/fetchalluser', FetchAllUser);//fetch all user
app.post("/update_profile", UpdateProfile);//update profile
app.post('/delete_user', DeleteUser);//delete user
app.post('/add_product', upload.single("image"), AddProduct);//add product
app.get('/fetch_products', FetchProducts);//fetch products





