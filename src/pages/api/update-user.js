import client from '../../../db/db'
export default async function (req, res){
    const { id, f_name,l_name, phone, email, ig, fb, twitter } = req.body
    try {
        const data = await client.query('SELECT * FROM "User" WHERE "User"."id" = $1',[id])
        if(data.rows) {     
        const result = await client.query('UPDATE "User" SET "f_name" = $1, "l_name"=$2, "phone" = $3, "email" = $4, "ig"=$5,"fb"=$6,"twitter"=$7 WHERE "User"."id" = $8',[f_name,l_name,phone, email,ig,fb,twitter, id])
        res.json({status: 'success', message: 'done'}) 
        } else {
            res.status(400).json({status: 'error', message: 'User not found'})
        }
      
    } catch (e) {
        console.log(e)
        res.status(400).json({status: 'error', error: 'Error fetching data'})
    } finally {
        await client.end()
    }
    
}     



