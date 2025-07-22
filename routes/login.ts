import data from "../data";
import express from "express";
import path from 'path';
const app = express();
const loginRouter = express.Router();
app.use(express.static("public"));
loginRouter.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + "/../public/index.html"));
});

loginRouter.post("/", (req, res) => {
    res.status(200).send(data);
});

export default loginRouter;