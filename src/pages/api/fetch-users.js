import client from '../../../db/db'

export default async (req, res) => {
    try {
        const resp = await client.query('SELECT * FROM "User" JOIN "About" ON "About"."userId" = "User"."id" LIMIT 9')
      
        res.send(resp.rows)
    } catch (e) {
        res.status(500).end()
    } finally{
        await client.end()
    }
  };

