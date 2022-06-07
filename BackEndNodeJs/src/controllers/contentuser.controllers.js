import { getConnection } from "./../database/database"

const getContentUsers = async (req, res) => {
    try {
        const connection = await getConnection();
    
        const result = await connection.query("select * from contentuser");
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getContentUser = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        console.log(id)
        const result = await connection.query("SELECT u.id userid, u.username, u.document ,u.name, c.id contentid, content, c.description FROM contentuser cu inner join content c on c.id=cu.contentid inner join user u on u.id=cu.userid  WHERE cu.userid = ? ", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addContentUser = async (req, res) => {
    try {
        console.log("rec..");
        const { userid, contentid } = req.body;
         
        if (userid === undefined || contentid === undefined ) {
            res.status(400).json({ message: "Bad Request ... Please fill all field." });
        }

        const contentobj = { userid, contentid};
        const connection = await getConnection();
        await connection.query("INSERT INTO contentuser SET ?", contentobj);
        res.json({ message: "contentuser added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods ={
    getContentUsers,
    addContentUser,
    getContentUser
   
};