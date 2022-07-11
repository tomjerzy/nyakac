import jwt from 'jsonwebtoken';
import client from '../../../db/db'
const KEY = process.env.JWT_KEY;
export default async function (req, res){
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
              status: 'error',
              error: 'Request missing username or password',
            });
          }
        const user = await client.query('SELECT "t"."id","t"."avatar", "t"."username" FROM "User" "t" WHERE "t"."password" = $1 AND ("t"."email" = $2 OR "t"."username" =$2 )',[password,email])
        if (!user.rows) {
            res.status(400).json({ status: 'error', error: 'Could not verify credentials' });
          }
          else {
            const payload = {
              id: user.rows[0].id,
              email: user.rows[0].email,
            };
            jwt.sign(
              payload,
              KEY,
              {
                expiresIn: 31556926, 
              },
              (err, token) => {
                res.status(200).json({
                  success: true,
                  token: 'Bearer ' + token,
                  auth: user.rows[0]
                });
              },
            );
          }
          
         
    } catch (e) {
      console.log(e)
        res.status(500).json({status: 'Error', error: "Something went wrong"})
    } finally {
      await client.end()
    }
    
}     



