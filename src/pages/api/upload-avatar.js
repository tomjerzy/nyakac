const multer = require('multer');
import client from '../../../db/db'
import nextConnect from 'next-connect';
const aws = require('aws-sdk');
// aws.config.update({
//   accessKeyId: 'AKIAJTPPQZOH22ZRQPIQ',
//   secretAccessKey: '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',
//   region : 'eu-west-3',
// });
// const multerS3 = require('multer-s3')
// const s3 = new aws.S3();
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

const upload = multer({
    storage: multer.diskStorage({
      destination: 'public/images',
      filename: (req, file, cb) => cb(null,  Date.now() + '.'+file.originalname.split('.').pop()),
    }),
  });
// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'hemaco',
//     contentType: multerS3.AUTO_CONTENT_TYPE,
//     ContentDisposition:  'inline',
//     key: function (req, file, cb) {
//     	var newFileName = Date.now() + "-" + file.originalname;
//     	cb(null, newFileName);
//     }
//   })
// });
  const apiRoute = nextConnect({
    onError(error, req, res) {
      res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
      res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
  });
  
  apiRoute.use(upload.single('file'));
  apiRoute.post(async(req, res) => {
    //const imagePath = req.files[0].path
    //const blob = fs.readFileSync(imagePath)
    const { id } = req.body
    console.log(req.files)
    // const uploadedImage = await s3.upload({
    //   Bucket: process.env.AWS_S3_BUCKET_NAME,
    //   Key: req.files[0].originalFilename,
    //   Body: blob,
    // }).promise()
    //uploadedImage.Location
    await client.query('UPDATE "User" SET "avatar" = $1 WHERE "User"."id" = $2',[`images/${req.file.filename}`, id])
    res.status(200).json({ data: 'success' });
  });
  
  export default apiRoute;
  
  export const config = {
    api: {
      bodyParser: false, // Disallow body parsing, consume as stream
    },
  };   


