const sqlite3 = require('sqlite3')
const {open} = require('sqlite')
export default async function handler(req, res){
    const { username, confirm, current} = req.body
    try {
        async function openDB() {
            return open({
                filename: './mydb.sqlite',
                driver: sqlite3.Database
            })
        }
        const db = await openDB()
        const user = await db.get('SELECT * FROM user WHERE username = ? AND password = ?',[username, current])
        if(user) {
            const result = await db.prepare('UPDATE user SET password = ? WHERE username = ?')
            await result.run(confirm, username)
            res.json({status: 'success', message: 'Password changed successfully'})
        } else {
            res.status(400).json({status: 'error', error: 'Incorrect credentials'})
        }
      
    } catch (e) {
        console.log(e)
        res.status(400).json({status: 'error', error: 'Error changing password'})
    }
    
}     



