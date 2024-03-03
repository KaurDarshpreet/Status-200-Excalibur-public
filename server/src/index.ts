import express, {Express, Request, Response} from "express"
import { PrismaClient } from '@prisma/client'
import "dotenv/config";
const prisma = new PrismaClient()
const app: Express = express();

app.use(express.json());
app.get("/",async (req: Request, res: Response)=>{
    res.json("Express server");
});

app.listen(5000, ()=>{
    console.log("server running on port 5000");
});