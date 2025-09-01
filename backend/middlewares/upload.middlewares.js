import multer from "multer";
import path from 'path';
import fs from 'fs'

const tmpDir = '/tmp'; // Replace 'your-directory-name' with a relevant name
if (!fs.existsSync(tmpDir)){
    fs.mkdirSync(tmpDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, tmpDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = path.extname(file.originalname);
        cb(null, `${uniqueSuffix}${fileExtension}`);
    }
});

export const upload = multer({ storage: storage });