
import { getConnection } from "./../database/database"
const jwt = require("jsonwebtoken");


const getUsers = async (req, res) => {
    try {
        const connection = await getConnection();
    
        const result = await connection.query("select * from user");
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM user WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const {  password, document, name } = req.body;
   

        if ( name === undefined || password === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const user = {   password, document, name  };
        const connection = await getConnection();
        const result = await connection.query("UPDATE user SET ? WHERE id = ?", [user, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



const login = async(req,res) =>{
    var username= req.body.email;
    var password = req.body.password;
    var role = req.body.role;
    const connection = await getConnection();
    
    await  connection.query('SELECT id userid, username,password, document, name  FROM user WHERE username = ?',[username], function (error, results, fields) {
    if (error) {
      console.log("error ocurred",error);
      res.status(400).send({
        "code":400,
        "message":"error ocurred"
      })
    }else{
      // console.log('The solution is: ', results[0].password,req.body.password,req.body.role);
      if(results.length >0){
        if(results[0].password == req.body.password){
          
          var tokenData = {
            username: username,
            
            // ANY DATA
          }
          var token = jwt.sign(tokenData, process.env.JWTPRIVATEKEY, {
            expiresIn: 60 * 60 * 24 // expires in 24 hours
         })
     
          delete results[0].password;
            res.status(200).send({
              "token": token,
              "code":200,
              "message":"login sucessfull"
            })
    
        }
        else{
          res.status(401).send({
               "code":401,
               "message":"Email and password does not match"
          })
        }
  
      }
      else{
        res.status(401).send({
          "code":401,
          "message":"Email does not exits"
            });
      }
  
  
    }
    });
  }
  


const register = async (req,res) =>{
    // console.log("req",req.body);
    var today = new Date();
    // bcrypt.hash(req.body.password, 5, function( err, bcryptedPassword) {
     //save to db
     var users={
       "name":req.body.name,
       "username":req.body.email,
       "password":req.body.password,
       "document":req.body.document
     }
     const { username, password, document, name } = req.body;

     if (name === undefined || username === undefined || password===undefined, document===undefined ) {
         res.status(400).json({ message: "Bad Request . Please fill all field." });
     }
     
     const connection = await getConnection();
     

     connection.query('INSERT INTO user SET ?',users, function (error, results, fields) {
     if (error) {
       console.log("error ocurred",error);
       res.status(400).send({
         "code":400,
         "failed":"error ocurred"
       })
     }else{
      //  console.log('The solution is: ', results);
       res.status(200).send({
         "code":200,
         "success":"user registered sucessfully"
           });
     }
     });
    // });
  
  }
  


export const methods ={
    getUsers,
    getUser,
    updateUser, 
    login,
    register
};
