const multer = require('multer');



//to store images in images folder
const storage = multer.diskStorage(
    {
        destination: './images',
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
        }
    }
);

const upload = multer({ storage: storage });


module.exports = upload;