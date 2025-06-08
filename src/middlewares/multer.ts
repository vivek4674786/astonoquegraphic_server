import multer from "multer";
import path from "path";

const imagePath = path.join(__dirname,"../assets/images");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imagePath);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if(file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg"){
      cb(null, true);
    }else{
      cb(null, false);
    }
  }
})

export default upload;