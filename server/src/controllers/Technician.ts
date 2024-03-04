import { Request,Response} from "express";
import {prisma} from "../index"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const signup_technician = async (req: Request, res: Response) => {
    try {
        const {name , email , category , password , phone_number , Address} = req.body;

        if(!name || !email || !password || !category || !phone_number){
            return res.status(400).json({
                success : false,
                message : "Please fill all fields"
            });
        }

        //check whether the technician already exists or not
        const existingTechnician = await prisma.technician.findUnique(
            {
                where : {
                    email
                }
            }
        )

        if(existingTechnician){
            return res.status(400).json({
                success : false,
                message : "Technician already exists. Please sign in to continue."
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const technician = await prisma.technician.create({
            data : {
                name,
                email,
                category,
                phone_number,
                Address,
                password : hashedPassword
            }
        });
        return res.status(200).json({
            success : true,
            message : "Technician created successfully",
            technician
        })

    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "Something went wrong"
        });
    }
}

export const login_technician = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        if (!email|| !password) {
            return res.status(400).json({
                success : false,
                message: "Please fill all fields"
            });
        }

        const technician = await prisma.technician.findUnique({
            where: {
                email
            },
        });

        if(!technician){
            return res.status(400).json({
                success : false,
                message : "Technician does not exist. Please sign up to continue."
            });
        }

        //compare the password
        const isPassword = await bcrypt.compare(password, technician.password);

        if(!isPassword){
            return res.status(400).json({
                success : false,
                message : "Invalid credentials"
            });
        }

        const token = jwt.sign({
            email : technician.email,
        }, process.env.JWT_SECRET!);

        // Set cookie for token and return success response
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        };

        return res.cookie("token", token, options).status(200).json({
            success : true,
            message : "Logged in successfully",
            token
        });

    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "Something went wrong"
        })
    }
}

export const resolveIssue = async (req: Request, res: Response) => {}