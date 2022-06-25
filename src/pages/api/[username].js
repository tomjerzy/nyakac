const sqlite3 = require('sqlite3')
const {open} = require('sqlite')
export default async function handler(req, res){
    const { username } = req.query
    try {
        async function openDB() {
            return open({
                filename: './mydb.sqlite',
                driver: sqlite3.Database
            })
        }
        const db = await openDB()
        const data = await db.get('SELECT * FROM user JOIN about ON about.userId = user.id JOIN info ON info.userId = user.id WHERE username = ?',[username])
        if(!data) {
            res.status(400).json({status: 'error', error: 'User not found'})
        } else {
             res.json(data) 
        }
      
    } catch (e) {
        res.status(400).json({status: 'error', error: 'Error fetching user'})
    }
    
}     



