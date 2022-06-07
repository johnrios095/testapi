
import { getConnection } from "./../database/database"
/* const getLanguages=(req, resp)=>{
resp.json("John Suscribe");
}; */

 /* const getLanguages = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id FROM options");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};  */

const getLanguages = async (req, res) => {
    try {
        const connection = await getConnection();
    
        const result = await connection.query("select * from transactions");
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
 
export const methods ={
    getLanguages
};
