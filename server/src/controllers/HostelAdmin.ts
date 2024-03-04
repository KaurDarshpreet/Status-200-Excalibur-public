import { Request, Response } from "express";
import { prisma } from "../index"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AuthenticatedRequest from "../interfaces/authenticatedRequest";

export const signup_hostelAdmin = async (req: Request, res: Response) => {
    try {
        const { domain_id, name, role, hostel, password, phone_number } = req.body;

        if (!domain_id || !name || !hostel || !password || !phone_number) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            });
        }

        if (role !== "hostel_admin") {
            return res.status(400).json({
                success: false,
                message: "Invalid access to this route. Please sign up as a hostel admin."
            });
        }

        //check whether the hostel admin already exists or not
        const existingHostelAdmin = await prisma.hostel_admin.findUnique(
            {
                where: {
                    domain_id
                }
            }
        )
        if (existingHostelAdmin) {
            return res.status(400).json({
                success: false,
                message: "Hostel Admin already exists. Please sign in to continue."
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const hostelAdmin = await prisma.hostel_admin.create({
            data: {
                name,
                domain_id,
                hostel,
                phone_number,
                password: hashedPassword
            }
        });

        return res.status(200).json({
            success: true,
            message: "Hostel Admin created successfully",
            hostelAdmin
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
}

export const login_hostelAdmin = async (req: Request, res: Response) => {
    try {
        const { domain_id, password } = req.body;
        if (!domain_id || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            });
        }

        if (req.body.role !== "hostel_admin") {
            return res.status(400).json({
                success: false,
                message: "Invalid access to this route. Please sign in as a hostel admin."
            });
        }

        const hostelAdmin = await prisma.hostel_admin.findUnique({
            where: {
                domain_id
            }
        })

        if (!hostelAdmin) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        //check if the password is correct
        const validPassword = await bcrypt.compare(password, hostelAdmin.password);
        if (!validPassword) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        //create and assign a token
        const token = jwt.sign({
            domain_id: hostelAdmin.domain_id,
            role : "hostel_admin"
        }, process.env.JWT_SECRET!,
            { expiresIn: "1h" })

        // Set cookie for token and return success response
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        };

        return res.cookie("token", token, options).status(200).json({
            success: true,
            message: "Logged in successfully",
            token
        })
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }

}


export const assignHostelIssue = async (req: Request, res: Response) => {
    const {domain_id} = (req as AuthenticatedRequest).user;
}

export const reviewHostelIssue = async (req: Request, res: Response) => {
    const {domain_id} = (req as AuthenticatedRequest).user;
}