import client from '../../../db/db'
export default async function (req, res){
    const { userId, district, sublocation, ward, origin, profession, achievements} = req.body
    try {   
    await client.query('UPDATE "Info" SET "district" = $2, "sublocation" = $3, "ward" = $4, "origin" = $5, "profession" = $6, "achievements" = $7 WHERE "Info"."userId" = $1',[userId, district, sublocation, ward, origin, profession, achievements])
    res.json({status: 'success', message: 'done'}) 
    } catch (e) {
        res.status(400).json({status: 'error', error: 'Error fetching data'})
    } finally {
        await client.end()
    }
}     



