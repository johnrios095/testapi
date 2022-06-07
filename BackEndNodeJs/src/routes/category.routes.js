import { Router } from "express";
import { methods as categoryControllers } from "./../controllers/category.controller";

const router = Router();


router.get("/getAll",categoryControllers.getCategories);
router.post("/addCategory",categoryControllers.addCategory);
export default router;