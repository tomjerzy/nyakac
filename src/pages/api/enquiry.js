const sqlite3 = require('sqlite3')
const {open} = require('sqlite')

export default async function handler(req, res){
    const {f_name,l_name,email,messages} = req.body
    try {
        async function openDB() {
            return open({
                filename: './mydb.sqlite',
                driver: sqlite3.Database
            })
        }
        const db = await openDB()
        
        await db.run('INSERT INTO enquiry (f_name,l_name, email, messages) VALUES(?, ?, ?, ?)',[f_name,l_name,email,messages])
        res.json({status: 'success', message: 'done'})
        
    } catch (e) {
        res.status(500).json({error: 'Eror creating user'})
    }
    
}     



