import express, {Express, Request, Response} from "express"
import { PrismaClient } from '@prisma/client'
import "dotenv/config";
const prisma = new PrismaClient()
const app: Express = express();
const post = 
app.use(express.json());
app.get("/",async (req: Request, res: Response)=>{
    await prisma.student.deleteMany();
    const user = await prisma.student.create({
        data : {
            domain_id : "1234@nitkkr.ac.in",
            password : "1234",
            name : "user-1",
            hostel : "h-10",
            room_number : "200",
            phone_number : 123456789
        }
    });
    res.json(user);
});

app.listen(5000, ()=>{
    console.log("server running on port 5000");
});