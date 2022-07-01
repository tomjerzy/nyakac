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
        const data = await db.all('SELECT * FROM user INNER JOIN about ON about.userId = user.id LIMIT 9')
        if(data){
            res.json(data)
        } else {
            res.status(400).json([])
        }
        
    } catch (e) {
        res.status(500).json([])
    }
    
}     



