import client from '../../../db/db'
export default async function (req, res){
    try {
        const {username, email, phone, f_name, l_name, password, gender} = req.body
        if(req.body.gender === 'male') {
            req.body.avatar = 'images/male.png'
        } else {
            req.body.avatar = 'images/woman.png'
        }
    const resp = await client.query('INSERT INTO "User" ("f_name", "l_name", "username", "phone", "avatar", "password", "gender", "email") VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id',[f_name,l_name,username,phone,req.body.avatar,password,gender,email])
    await client.query('INSERT INTO "Info" ("userId","updatedAt") VALUES($1, $2)',[resp.rows[0].id, new Date()])
    await client.query('INSERT INTO "About" ("userId") VALUES($1)', [resp.rows[0].id])
    res.send({status: 'success', message: 'done'})
    } catch(e) {
        console.log(e)
        res.status(400).end()
    } finally{
        await client.end()
    }
   
        
    




}




