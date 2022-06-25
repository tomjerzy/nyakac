const sqlite3 = require('sqlite3')
const {open} = require('sqlite')
export default async function handler(req, res){
    const { id } = req.query
    try {
        async function openDB() {
            return open({
                filename: './mydb.sqlite',
                driver: sqlite3.Database
            })
        }
        const db = await openDB()
        const data = await db.get('SELECT * FROM info WHERE userId = ?',[id])
        if(!data) {
            res.json({
                userId: '',
                district: '',
                ward: '',
                origin: '',
                achievements: '',
                profession: '',
                sublocation: ''
            })
        } else {
             res.json(data) 
        }
      
    } catch (e) {
        res.status(400).json({status: 'error', error: 'Error fetching user'})
    }
    
}     



