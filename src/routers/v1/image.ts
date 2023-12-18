// sharp
//jimp

import * as _ from 'lodash';
import * as express from 'express';
import { BaseRouter, Request, Response } from '../base';
import * as multer from 'multer';
import * as path from 'path';
import * as sharp from 'sharp';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images'); // Upload files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${Date.now()}${ext}`);
  },
});

const upload = multer({ storage: storage });
export default class ImageRouter extends BaseRouter {
  router: express.Router;
  constructor() {
    super();
    this.router = express.Router();
    this.router.post('/upload', upload.single('image'), this.route(this.uploadImage));
    this.router.get('/get/:imageName', this.route(this.getImage));
  }

  async uploadImage(req: Request, res: Response) {
    try {
      // Access the uploaded file details using req.file
      const { filename, path } = req.file;

      const outputPath = path.replace(/\.(\w+)$/, '-resized.$1');
      await sharp(path).resize(300, 200).toFile(outputPath);

      this.onSuccess(res, {
        message: 'Image uploaded successfully',
        filename,
        path,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getImage(req: Request, res: Response) {
    try {
      const imageName = req.params.imageName;
      const imagePath = path.join('D:/VSXANH/DEMO TIKI/craw-f1/images', imageName);
      console.log(imagePath);
      // Send the image file as a response
      res.sendFile(imagePath);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
