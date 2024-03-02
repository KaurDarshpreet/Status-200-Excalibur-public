import express, {Express, Request, Response} from "express"

const app: Express = express();
app.use(express.json());
app.get("/", (req: Request, res: Response)=>{
    res.send("express application");
});

app.listen(5000, ()=>{
    console.log("server running on port 5000");
});