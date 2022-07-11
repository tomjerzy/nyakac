import client from '../../../db/db'
export default async function (req, res){
    const { userId, title,education,roles, about } = req.body
    try {  
    await client.query('UPDATE "About" SET "title" = $2, "education" = $3, "roles" = $4, "about" = $5 WHERE "About"."userId" = $1',[userId,title, education, roles, about])
    res.json({status: 'success', message: 'done'})
    } catch (e) {
        res.status(400).json({status: 'error', error: 'Error fetching data'})
    } finally {
        await client.end()
    }
    
}     



