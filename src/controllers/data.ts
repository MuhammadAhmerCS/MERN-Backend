import { Request, Response } from 'express';
import { AppDataSource } from "../database/data-source"
import { Data } from "../entity/Data";
 
const getData = (req:Request, res:Response) => {
    res.send("hey there from GET!");
};

const hi = (req:Request, res:Response) => {
    res.send("Hi there");
};

// const postData = (req:Request, res:Response) => {
//     const inputData = req.body.data;
//     console.log('Data received on the backend:', inputData);
//     res.send('Data received successfully');
// };



 const postData = async (req: Request, res: Response) => {
    try {
        const inputData = req.body.data;
        console.log('Data received on the backend:', inputData);

        // Initialize the data source
     

        console.log("Inserting a new user into the database...");
        const record = new Data();
        record.data = inputData;

        // Save the record to the database
        await AppDataSource.manager.save(record);
        console.log("Saved data with id: " + record);

        // Load data from the database
        console.log("Loading data from the database...");
        const find_record = await AppDataSource.manager.find(Data);
        console.log("Loaded data: ", find_record);

        // Respond to the client
        res.send('Data received and saved successfully');
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send('Error occurred while processing data');
    }
};

export { getData, postData, hi };