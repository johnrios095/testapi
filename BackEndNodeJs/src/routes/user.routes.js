import { Router } from "express";
import { methods as userControllers } from "./../controllers/user.contoller";

const router = Router();


router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     });
router.get("/users",userControllers.getUsers);
router.get("/userbyid/:id", userControllers.getUser);
router.post('/register',userControllers.register);
router.post('/login',userControllers.login);
router.put("/updateUser/:id", userControllers.updateUser);
export default router;