import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = 3000;

const app = express();

app.listen(PORT, () => console.log("App running on port:", PORT))


