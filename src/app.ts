import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import commentRouter from "./comments/comment.route";
import connectDatabase from "./config/db.config";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

connectDatabase();

app.use("/api/comments", commentRouter);

app.listen(port, () => console.log(`Application is running on port ${port}`));
