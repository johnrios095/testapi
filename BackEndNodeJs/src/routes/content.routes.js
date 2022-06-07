import { Router } from "express";
import { methods as contentControllers } from "./../controllers/content.controller";

const router = Router();


router.get("/getAll",contentControllers.getContents);
router.post("/addContent",contentControllers.addContent);
export default router;