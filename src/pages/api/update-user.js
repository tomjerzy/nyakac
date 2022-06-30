const sqlite3 = require('sqlite3')
const {open} = require('sqlite')

export default async function handler(req, res, next){
    const { id, f_name,l_name, phone, email, ig, fb, twitter } = req.body
    try {
        async function openDB() {
            return open({
                filename: './mydb.sqlite',
                driver: sqlite3.Database
            })
        }
        const db = await openDB()
        const data = await db.get('SELECT * FROM user WHERE id = ?',[id])
       
        if(data) {
               
        const result = await db.prepare('UPDATE user SET f_name = ?, l_name=?, phone = ?, email =?, ig=?,fb=?,twitter=? WHERE id = ?')
        await result.run([f_name,l_name,phone, email,ig,fb,twitter, id])
        res.json({status: 'success', message: 'done'}) 
        } else {
            res.status(400).json({status: 'error', message: 'User not found'})
        }
      
    } catch (e) {
        console.log(e)
        res.status(400).json({status: 'error', error: 'Error fetching data'})
    }
    
}     



