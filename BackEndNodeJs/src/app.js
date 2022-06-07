import express  from "express";
import morgan from "morgan";

// Routes Imports
import languageRoutes from "./routes/language.routes"
import userRoutes from "./routes/user.routes"
import contentRoutes from "./routes/content.routes"
import contentuserRoutes from "./routes/contentuser.routes"
import categoryRoutes from "./routes/category.routes"
import contentcategoryRoutes from "./routes/contentcategory.routes"


const app = express();

// Settings 
app.set('port',5000);

// Middleware
   app.use(morgan('dev'));
   app.use(express.json());

   var cors = require('cors');
   app.use(cors())

   
   //Routes
   app.use("/api/languages",languageRoutes);

    //Routes users
   app.use("/api/user",userRoutes);

     //Routes contents
   app.use("/api/Contents",contentRoutes);
    
     //Routes contentusers
   app.use("/api/contentUsers",contentuserRoutes);
   
   
     //Routes Category
     app.use("/api/Categories",categoryRoutes);


     //Routes ContentCategory
     app.use("/api/ContentCategories",contentcategoryRoutes);
    
     
     

export default app;