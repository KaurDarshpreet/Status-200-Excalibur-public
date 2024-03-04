import express, {Express, Request, Response} from "express"
import { PrismaClient } from '@prisma/client'
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import  RootRouter  from "./routes";
export const prisma = new PrismaClient()

require("dotenv").config();

//middlewares
const app: Express = express();

app.use(express.json());
app.use(express.json());
app.use(cookieParser());

// app.use(
// 	cors({
// 		origin:`http:localhost:${3000}`,
// 		credentials:true,
// 	})
// )

app.use('/api',RootRouter);
app.get("/",async (req: Request, res: Response)=>{
    res.json("Express server");
});

app.listen(5000, ()=>{
    console.log("server running on port 5000");
});