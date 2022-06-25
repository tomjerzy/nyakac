const sqlite3 = require('sqlite3')
const {open} = require('sqlite')
export default async function handler(req, res){
    const { district, origin, ward, userId, sublocation, achievements, profession}  = req.body
    try {
        async function openDB() {
            return open({
                filename: './mydb.sqlite',
                driver: sqlite3.Database
            })
        }
        const db = await openDB()
        await db.run('INSERT INTO info (district,origin, ward, userId, sublocation, achievements, profession) VALUES(?, ?, ?, ?, ?, ?, ?)',[district,origin,ward,userId,sublocation,achievements,profession])
        res.json({status: 'success', message: 'done'})
    } catch (e) {
        res.status(400).json({status: 'error', error: 'Error fetching user'})
    }
    
}     



