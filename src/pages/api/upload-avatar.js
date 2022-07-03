const sqlite3 = require('sqlite3')
const {open} = require('sqlite')
const multer = require('multer');
import nextConnect from 'next-connect';
const upload = multer({
    storage: multer.diskStorage({
      destination: 'public',
      filename: (req, file, cb) => cb(null,  Date.now() + '.'+file.originalname.split('.').pop()),
    }),
  });

  const apiRoute = nextConnect({
    onError(error, req, res) {
      res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
      res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
  });
  
  apiRoute.use(upload.single('file'));
  async function openDB() {
    return open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    })
}
  apiRoute.post(async(req, res) => {
    const { id } = req.body
    const db = await openDB()
    const dat = await db.get('SELECT * FROM user WHERE id = ?',[id])
    const result = await db.prepare('UPDATE user SET avatar = ? WHERE id = ?')
    await result.run(req.file.filename, id)
    res.status(200).json({ data: 'success' });
  });
  
  export default apiRoute;
  
  export const config = {
    api: {
      bodyParser: false, // Disallow body parsing, consume as stream
    },
  };

// export default async function handler(req, res){
//     ///const { id } = req.body
//     console.log(req.files)
//     try {
//         async function openDB() {
//             return open({
//                 filename: './mydb.sqlite',
//                 driver: sqlite3.Database
//             })
//         }
//         const db = await openDB()
//         const data = await db.get('SELECT * FROM user WHERE id = ?',[id])
       
//         if(data) {
//             upload.single('file')(req, res, function(err) {
//                 if(err) {
//                     console.log(err)
//                     res.status(500).json({status: 'error', error:' Could not update avatar'})
//                 } else {
//                     //const result = await db.prepare('UPDATE user SET avatar = ? WHERE id = ?')
//                     //await result.run(req.file.filename, id)
//                     res.json({status: 'success', message: 'done'})
//                 }
//             })
          
//         } else {
            
//             res.status(400).json({status: 'error', message: 'User not found'})
//         }
      
//     } catch (e) {
//         console.log(e)
//         res.status(400).json({status: 'error', error: 'Error fetching data'})
//     }
    
// }     


