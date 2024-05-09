import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import nasaService from "./services/nasaService";

const PORT = 3000;
const app = express();

app.get("/", async (req: Request, res: Response) => {
    const { start_date, end_date, distance } = req.query;

    if (!start_date || !end_date || !distance) {
        return res.status(400).json({ error: true, message: "Required parameters missing" });
    }
    if (typeof start_date !== "string" || typeof end_date !== "string" || typeof distance !== "string") {
        return res.status(400).json({ error: true, message: "Required parameters missing" });
    }

    try {
        const nasaRes = await nasaService.feed(start_date, end_date)
        res.json(nasaRes);
    } catch (err) {
        res.status(500).json({ error: true, message: "Error retrieving data" })
    }
})

app.listen(PORT, () => console.log("App running on port:", PORT))

