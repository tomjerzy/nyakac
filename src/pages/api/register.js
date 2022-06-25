const sqlite3 = require('sqlite3')
const {open} = require('sqlite')
export default async function handler(req, res){
    const {username, email, phone, f_name, l_name, password, gender} = req.body
    try {
        if(req.body.gender === 'male') {
            req.body.avatar = '/male.png'
        } else {
            req.body.avatar = '/woman.png'
        }
        async function openDB() {
            return open({
                filename: './mydb.sqlite',
                driver: sqlite3.Database
            })
        }
        const db = await openDB()
        const check = await db.get('SELECT username FROM user WHERE username = ? OR email = ? OR phone = ?',[username, email, phone])
        if(check) {
            res.status(400).json({status: 'error', error: 'User with one of the provided credentials already exists'})
        } else {
           const user_statement =  await db.prepare('INSERT INTO user (f_name,l_name, username, phone, avatar, password, gender, email) VALUES(?, ?, ?, ?, ?, ?, ?, ?)')
           const  user_result = await user_statement.run([f_name,l_name,username,phone,req.body.avatar,password,gender, email])
           console.log(user_result.lastID)
           const info_statement = await db.prepare('INSERT INTO info (district,origin, ward, userId, sublocation, achievements, profession) VALUES(?, ?, ?, ?, ?, ?, ?)')
           const info_result = await info_statement.run(['Nyakach','Thur-dibuoro','West-Koguta',user_result.lastID,'Koguta-west','Various achievements','Environmentalist'])
           const about_statement = await db.prepare('INSERT INTO about (userId, title, education, roles, about) VALUES(?,?,?,?,?)')
           const about_result = await about_statement.run([user_result.lastID, 'Envrinomentalist', 'Bsc of Environmental science', 'In charge of Environemtal Impact Assessment', 'Enthusiastic individual who is upto the task'])
           res.json({status: 'success', message: 'done'})
        }
    } catch (e) {
        res.status(500).json({error: 'Eror creating user'})
    }
    
}     



