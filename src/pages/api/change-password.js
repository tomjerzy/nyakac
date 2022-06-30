const sqlite3 = require('sqlite3')
const {open} = require('sqlite')
export default async function handler(req, res){
    const { confirm, current, id} = req.body
    console.log(req.body)
    try {
        async function openDB() {
            return open({
                filename: './mydb.sqlite',
                driver: sqlite3.Database
            })
        }
        const db = await openDB()
        const user = await db.get('SELECT * FROM user WHERE id = ? AND password = ?',[id, current])
        if(user) {
            const result = await db.prepare('UPDATE user SET password = ? WHERE id = ?')
            await result.run(confirm, id)
            res.json({status: 'success', message: 'Password changed successfully'})
        } else {
            res.status(400).json({status: 'error', error: 'Incorrect credentials'})
        }
      
    } catch (e) {
        console.log(e)
        res.status(400).json({status: 'error', error: 'Error changing password'})
    }
    
}     



