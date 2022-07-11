import client from '../../../db/db'
export default async function handler(req, res){
    try {
        await client.query('DELETE FROM "User" WHERE "User"."id" = $1',[req.body])
        await client.query('DELETE FROM "Info" WHERE "Info"."userId" = $1',[req.body])
        await client.query('DELETE FROM "About" WHERE "About"."userId" = $1',[req.body])
        await client.query('DELETE FROM "Message" WHERE "Message"."receiver" = $1',[req.body])
        res.status(200).end()
    } catch (e) {
        res.status(400).json({status: 'error', error: 'Error fetching user'})
    } finally { await client.end()}
    
}     



