import { Router } from "express";
import { methods as contentuserControllers } from "./../controllers/contentuser.controllers";


const router = Router();


router.get("/getAll",contentuserControllers.getContentUsers);
router.get("/user/:id", contentuserControllers.getContentUser);
router.post("/addContentUser",contentuserControllers.addContentUser);

export default router;