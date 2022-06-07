import { getConnection } from "./../database/database"

const getCategories = async (req, res) => {
    try {
        const connection = await getConnection();
    
        const result = await connection.query("select * from category");
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addCategory = async (req, res) => {
    try {
        const { category } = req.body;

        if (category === undefined  ) {
            res.status(400).json({ message: "Bad Request (category) Please fill all field." });
        }

        const categoryobj = {  category};
        const connection = await getConnection();
        await connection.query("INSERT INTO category SET ?", categoryobj);
        res.json({ message: "category added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods ={
    getCategories,
    addCategory
   
};
