import express , {IRouter} from "express";
import authMiddleware from "@/src/middlewares/authMiddleware";
import multer from "multer";
import path from "path";
const router: IRouter = express.Router();
// import { uplaodImage } from "./uploadController";

const uploadDir = path.resolve(__dirname, 'uploads/'); // Absolute path to the uploads directory

const upload = multer({ dest: uploadDir });


router.post('/uploadImage', upload.single('image'), async (req, res) => {
    let fileObj = req.file;
    console.log(fileObj); // This will log information about the uploaded file
    res.send('File uploaded successfully');
  });

module.exports = router;