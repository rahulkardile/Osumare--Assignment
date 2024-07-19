import express, { Express, Request, Response, NextFunction } from "express"
import fs from 'fs';
import path from 'path';
import { dataTypes, CustomError } from "./types/types.js";
import ErrorHandler from "./utils/ErrorHandler.js";

const app: Express = express();

app.use(express.json());

const data: dataTypes[] = [];
const PORT = process.env.PORT || 3300;

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
    res.send("home server")
})

app.get("/get")

app.post('/create', (req: Request, res: Response, next: NextFunction) => {
    try {

        const { title, description } = req.body;

        if (!title) return next(ErrorHandler(404, "title is missing!"));
        if (!description) return next(ErrorHandler(404, "description is missing!"));

        const newData: dataTypes = {
            id: String(Date.now()),
            title,
            description
        };

        data.push(newData);

        res.status(200).json({
            message: "data has been created!",
            success: true
        })

        console.log(data);

    } catch (error) {
        next(error);
    }
});



app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {

    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error";

    return res.status(statusCode).json({
        message,
        success: false
    })
})

app.listen(PORT, () => console.log(`server is running at ${PORT} . . . `));