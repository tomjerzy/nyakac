const sqlite3 = require('sqlite3')
const {open} = require('sqlite')
// const pgp = require('pg-promise')();
// const user = process.env.USER
//         const password = process.env.PASSWORD
//         const host = process.env.DBHOST
//         const port = process.env.DBPORT
//         const database = process.env.DATABASE
//         const db = pgp(`postgres://${user}:${password}@${host}:${port}/${database}`)
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
        console.log(e)
        res.status(500).json([])
    }
    
}     



