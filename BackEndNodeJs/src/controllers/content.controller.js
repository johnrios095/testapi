import { getConnection } from "./../database/database"

const getContents = async (req, res) => {
    try {
        const connection = await getConnection();
        const { id } = req.params;
        
        const result = await connection.query("select c.* from content c inner join contentuser cu on c.id=cu.contentid inner join user u on u.id=cu.userid where u.username =?",id);
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getContentByUser = async (req, res) => {
    try {
        const { id } = req.params;
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
        const { username } = req.params;

        if (content === undefined || description === undefined ) {
            res.status(400).json({ message: "Bad Request ..... Please fill all field." });
        }

        const contentobj = { content, description};
        const connection = await getConnection();
/*         await connection.query("INSERT INTO content SET ?", contentobj);
 */

      await connection.query("INSERT INTO content SET ?; ", contentobj);
      const result =  await connection.query("SELECT LAST_INSERT_ID() contactid; ");
      const resultid =  await connection.query("SELECT id from user where username =? ",username);
      console.log(resultid[0].id);
      await connection.query(" INSERT INTO contentuser(userid, contentid) values(?,?) ",[resultid[0].id, result[0].contactid ]);

        res.json({ message: "user added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateContent = async (req, res) => {
    try {
        const { id } = req.params;
       
        const { content, description } = req.body;

        if (content === undefined || description === undefined ) {
            res.status(400).json({ message: "Bad Request ..... Please fill all field." });
        }

        const contentobj = { content, description};
        const connection = await getConnection();
        await connection.query("UPDATE content SET ? WHERE id = ?", [contentobj, id] );
        res.json({ message: "user updated" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods ={
    getContents,
    addContent,
    updateContent
   
};
