import client from '../../../db/db'
export default async function (req, res){
    const {f_name,l_name,email,messages} = req.body
    try {
        await client.query('INSERT INTO "Enquiry" ("f_name","l_name", "email", "messages") VALUES($1, $2, $3, $4)',[f_name,l_name,email,messages])
        res.json({status: 'success', message: 'done'})
        
    } catch (e) {
        res.status(500).json({error: 'Eror creating user'})
    } finally {
        await client.end()
    }
    
}     



