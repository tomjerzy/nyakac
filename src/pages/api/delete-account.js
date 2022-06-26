const sqlite3 = require('sqlite3')
const {open} = require('sqlite')

export default async function handler(req, res){
    try {
        async function openDB() {
            return open({
                filename: './mydb.sqlite',
                driver: sqlite3.Database
            })
        }
        const db = await openDB()
        await db.run('DELETE FROM user WHERE id = ?',[req.body])
        await db.run('DELETE FROM info WHERE userId = ?',[req.body])
        await db.run('DELETE FROM about WHERE userId = ?',[req.body])
        await db.run('DELETE FROM message WHERE receiver = ?',[req.body])
        res.status(200).end()
    } catch (e) {
        res.status(400).json({status: 'error', error: 'Error fetching user'})
    }
    
}     



