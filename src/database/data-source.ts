import "reflect-metadata"
import { DataSource } from "typeorm"
import { Data } from "../entity/Data"
 
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "A1b?A1b?",
    database: "evaluate",
    synchronize: true,
    logging: false,
    entities: [Data],
    migrations: [],
    subscribers: [],
})
