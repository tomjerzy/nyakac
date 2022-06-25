const sqlite3 = require('sqlite3')
const {open} = require('sqlite')

export default async function handler(req, res){
    const {f_name,contact,receiver,messages} = req.body
    try {
     
        async function openDB() {
            return open({
                filename: './mydb.sqlite',
                driver: sqlite3.Database
            })
        }
        const db = await openDB()
        
        await db.run('INSERT INTO message (f_name,contact, receiver, messages) VALUES(?, ?, ?, ?)',[f_name,contact,receiver,messages])
        res.json({status: 'success', message: 'done'})
        
    } catch (e) {
        res.status(500).json({error: 'Eror creating user'})
    }
    
}     



