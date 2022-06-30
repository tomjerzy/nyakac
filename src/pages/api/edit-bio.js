const sqlite3 = require('sqlite3')
const {open} = require('sqlite')
export default async function handler(req, res){
    const { userId, district, sublocation, ward, origin, profession, achievements} = req.body
    try {
        async function openDB() {
            return open({
                filename: './mydb.sqlite',
                driver: sqlite3.Database
            })
        }
        const db = await openDB()
        const data = await db.get('SELECT * FROM info WHERE userId = ?',[userId])
        if(data) {
            const result = await db.prepare('UPDATE info SET userId = ?, district = ?, sublocation = ?, ward = ?, origin = ?, profession =?, achievements = ?')
            await result.run(userId, district, sublocation, ward, origin, profession, achievements)
            res.json({status: 'success', message: 'done'})
        } else {
            await db.run('INSERT INTO info (userId, , district, sublocation, ward, origin, profession, achievements) VALUES(?,?,?,?,?.?,?)', [
                userId, district, sublocation, ward, origin, profession, achievements
            ])
            res.json({status: 'success', message: 'done'})
        }
      
    } catch (e) {
        res.status(400).json({status: 'error', error: 'Error fetching data'})
    }
    
}     



