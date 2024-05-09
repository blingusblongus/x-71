import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import nasaService from "./services/nasaService";
import { mapAsteroidNames } from "./utils/mapAsteroidNames";
import { processDate } from "./utils/processDate";

const PORT = 3000;
const app = express();

app.get("/", async (req: Request, res: Response) => {
    const { start_date, end_date, distance } = req.query;

    // Check for required query params
    if (!start_date || !end_date || !distance) {
        return res.status(400).json({ error: true, message: "Required parameters missing" });
    }
    if (typeof start_date !== "string" || typeof end_date !== "string" || typeof distance !== "string") {
        return res.status(400).json({ error: true, message: "Required parameters missing" });
    }
    if (!Number(distance)) {
        return res.status(400).json({ error: true, message: "Distance must be a number" })
    }

    // Validate supplied dates
    const { dateStr: start, error: startErr } = processDate(start_date);
    const { dateStr: end, error: endErr } = processDate(end_date);

    if (startErr || endErr || !start || !end) {
        return res.status(400).json({ error: true, message: startErr || endErr })
    }
    if (end < start) {
        return res.status(400).json({ error: true, message: "Start date must come before end date." })
    }

    // Fetch and map asteroids
    try {
        const nasaRes = await nasaService.feed(start, end)
        const names = mapAsteroidNames(nasaRes, Number(distance));
        res.status(200).json({ asteroids: names });
    } catch (err) {
        res.status(500).json({ error: true, message: `Error retrieving data: ${err}` })
    }
})

app.listen(PORT, () => console.log("App running on port:", PORT))

