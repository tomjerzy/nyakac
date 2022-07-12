import client from '../../../db/db'
export default async function handler(req, res){
    const { confirm, current, id} = req.body
    try {
        const user = await client.query('SELECT * FROM "User" WHERE "User"."id" = $1 AND "User"."password" = $2',[id, current])
        if(user.rows) {
            await client.query('UPDATE "User" SET "password" = $1 WHERE "User"."id" = $2', [confirm, id])
            res.json({status: 'success', message: 'Password changed successfully'})
        } else {
            res.status(400).json({status: 'error', error: 'Incorrect credentials'})
        }
      
    } catch (e) {
        res.status(400).json({status: 'error', error: 'Error changing password'})
    } finally 
    { await client.end()}
    
}     



