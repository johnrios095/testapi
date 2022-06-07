import { Router } from "express";
import { methods as languageControllers } from "./../controllers/language.controller";

const router = Router();

/* router.get("/",(request,response)=>{

    response.send("johnr");
}); */

router.get("/",languageControllers.getLanguages)

export default router;