import express, { NextFunction, Request, Response } from "express";
import { dataTypes, CustomError } from "../types/types.js";
import ErrorHandler from "../utils/ErrorHandler.js";

const data: dataTypes[] = [];

const routes = express.Router();

routes.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send("server is running fine!");
    } catch (error) {
        next(error);
    }
});

routes.get("/get", (req: Request, res: Response, next: NextFunction) => {
    try {

        if (!data || data.length == 0) return next(ErrorHandler(404, "There is no data, Please add data first!"))

        const page = parseInt(req.query.page as string) || 1;

        const startIndex = (page - 1) * 5;
        const endIndex = startIndex + 5;

        const paginatedData = data.slice(startIndex, endIndex);

        res.status(200).json({
            success: true,
            totalData: data.length,
            data: paginatedData
        })

    } catch (error) {
        next(error);
    }
})

routes.get("/get/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = req.params.id;
        const expectedData = data.find((item) => item.id == id);

        if (!expectedData) return next(ErrorHandler(404, "not found!"))

        res.status(200).json({
            success: true,
            data: expectedData
        })

    } catch (error) {
        next(error);
    }

    res.send("home server")
})

routes.post('/create', (req: Request, res: Response, next: NextFunction) => {
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

routes.put("/update/:id", (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = req.params.id;
        const { title, description } = req.body;

        if (!title && !description) return next(ErrorHandler(406, "please provide at least title or description"));

        let found = false;

        data.forEach((item, index) => {
            if (item.id == id) {

                found = true;

                if (title) {
                    data[index].title = title
                }

                if (description) {
                    data[index].description = description
                }

                res.status(200).json({
                    success: true,
                    data: data[index]
                })
            }
        })

        if (!found) return next(ErrorHandler(404, "Not found!"));

    } catch (error) {
        next(error);
    }
})

routes.delete("/delete/:id", (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = req.params.id;
        if (!id) return next(ErrorHandler(404, "Id not found"));

        const removeIndex = data.findIndex(item => item.id === id);


        if (removeIndex == -1) {

            return res.status(404).json({
                success: true,
                removeIndex,
                message: "item not found!"
            })

        } else {
            data.splice(removeIndex, 1);
            return res.status(200).json({
                success: true,
                removeIndex,
                message: "item has been deleted!"
            })
        }

    } catch (error) {
        next(error);
    }
})

export default routes;