import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = 3000;

const app = express();

app.get("/", (_req: Request, res: Response) => {
    res.send("hello world");
})

app.listen(PORT, () => console.log("App running on port:", PORT))


