// import { AppDataSource } from "./database/data-source"
// import { Data } from "./entity/Data"
import { AppDataSource } from "./database/data-source";
import * as express from "express"
import * as cors from "cors"
import { routes } from "./routes/data";
 
const app = express();
const port = 4000;
app.use(cors());
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({limit:"16kb",extended:true}))


// AppDataSource.initialize();
AppDataSource.initialize().then(async () => {

  app.use('/',routes)

    // console.log("Inserting a new user into the database...")
    // const record = new Data()
    // record.data = "Timber"
 
    // await AppDataSource.manager.save(record)
    // console.log("Saved data with id: " + record)
    // console.log("Loading data from the database...")
    // const find_record = await AppDataSource.manager.find(Data)
    // console.log("Loaded data: ", find_record)
    // console.log("Here you can setup and run express / fastify / any other framework.")
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
   })


}).catch(error => console.log(error))



