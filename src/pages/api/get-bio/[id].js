import client from '../../../../db/db'
export default async function handler(req, res){
    const { id } = req.query
    try {
        const data = await client.query('SELECT * FROM "Info" WHERE "Info"."userId" = $1',[id])
        res.send(data.rows[0])
      
    } catch (e) {
        res.status(400).json({status: 'error', error: 'Error fetching user'})
    }
    finally {
        await client.end()
    }
    
}     



