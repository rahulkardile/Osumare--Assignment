import express, { Express, Request, Response, NextFunction } from "express"
import cors from "cors"
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import routes from "./routes/routes.js";
import { CustomError } from "./types/types.js";

const app: Express = express();
app.use(express.json());
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3300' || "*"
}));

const PORT = process.env.PORT || 3300;

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: 'Too many requests, please try again later.'
});

app.use(limiter);

app.use("/api", routes);

app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {

    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error";

    return res.status(statusCode).json({
        message,
        success: false
    })
})

app.listen(PORT, () => console.log(`server is running at ${PORT} . . . `));

