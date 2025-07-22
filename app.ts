import express from "express";
import cors from 'cors';
import loginRouter from "./routes/login";

const app = express();


app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


app.use("/login",loginRouter);
app.get("/", (req, res) => {
    res.send("Hello World!");

});

export default app;