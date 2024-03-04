import { Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

function authenticateToken(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers['authorization'];
    if(authHeader === undefined || authHeader === null){
        return res.sendStatus(401);
    }
    else{
        const token = authHeader.split(' ')[1];
        if(process.env.JWT_SECRET){
            jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
                if(error){
                    return res.sendStatus(403);
                }
                else{
                    req.body = user;
                    next();
                }
            });
        }
        else{
            res.sendStatus(403);
        }

    }
}