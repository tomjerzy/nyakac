import jwt from 'jsonwebtoken';
const sqlite3 = require('sqlite3')
const {open} = require('sqlite')

const KEY = process.env.JWT_KEY;
export default async function handler(req, res){
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
              status: 'error',
              error: 'Request missing username or password',
            });
          }
        async function openDB() {
            return open({
                filename: './mydb.sqlite',
                driver: sqlite3.Database
            })
        }
        const db = await openDB()
        const user = await db.get('SELECT * FROM user WHERE password = ? AND (email = ? OR username =? )',[password,email, email])
        //await db.close()
        if (!user) {
            res.status(400).json({ status: 'error', error: 'Could not verify credentials' });
          }
          else {
            const payload = {
              id: user.id,
              email: user.email,
            };
            jwt.sign(
              payload,
              KEY,
              {
                expiresIn: 31556926, // 1 year in seconds
              },
              (err, token) => {
                res.status(200).json({
                  success: true,
                  token: 'Bearer ' + token,
                  auth: user
                });
              },
            );

          // const dataUser = user.toJSON();
          // const userId = dataUser.id,
          //   userEmail = dataUser.email,
          //   userPassword = dataUser.password;
          // /* Check and compare password */
          // bcrypt.compare(password, userPassword).then(isMatch => {
          //   if (isMatch) {
          //     const payload = {
          //       id: userId,
          //       email: userEmail,
          //     };
          //     /* Sign token */
          //     jwt.sign(
          //       payload,
          //       KEY,
          //       {
          //         expiresIn: 31556926, // 1 year in seconds
          //       },
          //       (err, token) => {
          //         res.status(200).json({
          //           success: true,
          //           token: 'Bearer ' + token,
          //         });
          //       },
          //     );
          //   } else {
          //     res.status(400).json({ status: 'error', error: 'Password incorrect' });
          //   }
          // });
          }
          
         
    } catch (e) {
        res.status(500).json({status: 'Error', error: "Something went wrong"})
    }
    
}     



