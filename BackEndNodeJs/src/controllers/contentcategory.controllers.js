import { getConnection } from "./../database/database"

const getContentCategories = async (req, res) => {
    try {
        const connection = await getConnection();
    
        const result = await connection.query("select * from contentcategory cc inner join content co on co.id=cc.contentid inner join category c on c.id=cc.categoryid");
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getContentCategory = async (req, res) => {
    try {
        const connection = await getConnection();
        const { id } = req.params;
      console.log(id);
        const result = await connection.query("select * from contentcategory cc inner join content co on co.id=cc.contentid inner join category c on c.id=cc.categoryid where cc.categoryid=?", id);
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const addContentCategory = async (req, res) => {
    try {
        const {  categoryid, contentid } = req.body;

        if (categoryid === undefined || contentid=== undefined  ) {
            res.status(400).json({ message: "Bad Request (category) Please fill all field." });
        }

        const categoryobj = {  categoryid, contentid};
        const connection = await getConnection();
        await connection.query("INSERT INTO contentcategory SET ?", categoryobj);
        res.json({ message: "content category added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods ={
    getContentCategories,
    addContentCategory,
    getContentCategory
   
};
