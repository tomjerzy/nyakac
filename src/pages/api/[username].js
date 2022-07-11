import client from '../../../db/db'
export default async function handler(req, res){
    const { username } = req.query
    try {
        const data = await client.query('SELECT * FROM "User" JOIN "About" ON "About"."userId" = "User"."id" JOIN "Info" ON "Info"."userId" = "User"."id"  WHERE "User"."username" = $1',[username])
        if(!data) {
            res.status(400).json({status: 'error', error: 'User not found'})
        } else {
             res.send(data.rows[0]) 
        }
      
    } catch (e) {
        res.status(400).json({status: 'error', error: 'Error fetching user'})
    } finally {
        await client.end()
    }
    
}

