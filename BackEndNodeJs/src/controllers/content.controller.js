import { getConnection } from "./../database/database"

const getContents = async (req, res) => {
    try {
        const connection = await getConnection();
    
        const result = await connection.query("select * from content");
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addContent = async (req, res) => {
    try {
        const { content, description } = req.body;

        if (content === undefined || description === undefined ) {
            res.status(400).json({ message: "Bad Request ..... Please fill all field." });
        }

        const contentobj = { content, description};
        const connection = await getConnection();
        await connection.query("INSERT INTO content SET ?", contentobj);
        res.json({ message: "user added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods ={
    getContents,
    addContent
   
};
