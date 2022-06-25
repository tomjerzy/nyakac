const sqlite3 = require('sqlite3')
const {open} = require('sqlite')
export default async function handler(req, res){
    const { userId, title,education,roles, about } = req.body
    try {
        async function openDB() {
            return open({
                filename: './mydb.sqlite',
                driver: sqlite3.Database
            })
        }
        const db = await openDB()
        const data = await db.get('SELECT * FROM about WHERE userId = ?',[userId])
        if(data) {
            const result = await db.prepare('UPDATE about SET userId = ?, title = ?, education = ?, roles = ?, about = ?')
            await result.run(userId, title, education, roles, about)
            res.json({status: 'success', message: 'done'})
        } else {
            await db.run('INSERT INTO about (userId, title, education, roles, about) VALUES(?,?,?,?,?)', [
                userId, title, education, roles, about
            ])
            res.json({status: 'success', message: 'done'})
        }
      
    } catch (e) {
        res.status(400).json({status: 'error', error: 'Error fetching data'})
    }
    
}     



