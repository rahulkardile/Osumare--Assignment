import express, { Express, Request, Response, NextFunction } from "express"

const app: Express = express();
const PORT = 3300;

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
    res.send("home server")
})

app.listen(PORT, () => console.log(`server is running at ${PORT} . . . `));