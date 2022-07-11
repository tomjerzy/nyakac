import client from '../../../db/db'
export default async function (req, res){
    const { district, origin, ward, userId, sublocation, achievements, profession}  = req.body
    try {
        await client.query('INSERT INTO "Info" ("district","origin", "ward", "userId", "sublocation", "achievements", "profession") VALUES($1, $2, $3, $4, $5, $6, $7)',[district,origin,ward,userId,sublocation,achievements,profession])
        res.json({status: 'success', message: 'done'})
    } catch (e) {
        res.status(400).json({status: 'error', error: 'Error fetching user'})
    } finally {
        await client.end()
    }    
}     



