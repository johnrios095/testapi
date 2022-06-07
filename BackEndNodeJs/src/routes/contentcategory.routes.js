import { Router } from "express";
import { methods as contentcategoryController } from "./../controllers/contentcategory.controllers";

const router = Router();


router.get("/getAll",contentcategoryController.getContentCategories);
router.get("/getCategory/:id", contentcategoryController.getContentCategory);
router.post("/addContent",contentcategoryController.addContentCategory);
export default router;