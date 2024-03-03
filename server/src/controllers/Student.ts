import { Request,Response} from "express";
import {prisma} from "../index"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const signup = async (req: Request, res: Response) => {
    try {
        const {domain_id , name , hostel , password , phone_number , room_number,profile_pic} = req.body;
        if (!domain_id || !name || !hostel || !password) {
            return res.status(400).json({ error: "Please fill all fields" });
        }
        
        // check if user already exists or not
        const existingstudent = await prisma.student.findFirst({
            where : {
                domain_id
            }
        })

        if(existingstudent){
            return res.status(400).json({
				success: false,
				message: "User already exists. Please sign in to continue.",
			});
        }
        
        // Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

        const student = await prisma.student.create({
            data: {
                name,
                domain_id,
                hostel,
                phone_number,
                room_number,
                password : hashedPassword,
            },
        });
        return res.status(200).json({
            success : true ,
            message: "Student created successfully",
            student 
        });
    } catch (error:any) {
        console.log(error.message)
        return res.status(500).json({
            success : false,
            error: "Something went wrong"
        });
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const {domain_id , password} = req.body;
        if (!domain_id || !password) {
            return res.status(400).json({ error: "Please fill all fields" });
        }

        const student = await prisma.student.findFirst({
            where: {
                domain_id,
            },
        })

        if (!student) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // check if password is correct
        const isPasswordCorrect = await bcrypt.compare(password, student.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const token = jwt.sign({
            domain_id: student.domain_id,
            name: student.name,
        }, process.env.JWT_SECRET!, 
        { expiresIn: "1h"})
        

        // Set cookie for token and return success response
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        };

        return res.cookie("token", token, options).status(200).json({
            message: "Login successful",
            student 
        });
    } catch (error:any) {
        return res.status(500).json({ error: "Something went wrong" });
    }

}

export const createIssue = async (req: Request, res: Response) => {
    try{
        const {category , student_id, location , title , is_public, description , issue_media} = req.body; 
    //  const student_id = req.user.id;  //authenticate krne ke baad req me user ki id daaldena , as of now req me le rha hu //
        if (!category || !title || !location || !description) {
            return res.status(400).json({ error: "Please fill all fields" });
        }

        // not written issue_media since cloudinary is not yet integrated

        const issue = await prisma.issue.create({
            data: {
                category,
                title,
                location,
                is_public,
                description,
                issue_media: issue_media || null,
                student: {
                    connect: { domain_id: student_id },
                },
            },
        });
        return res.status(200).json({
            message: "Issue created successfully",
            issue 
        });
    } catch (error:any) {
        return res.status(500).json({ error: "Something went wrong" });
    }

}

export const getAllIssues = async (req : Request , res : Response) => {
    try {
        const {student_id} = req.body;
    // const student_id = req.user.id ; // authenticate krne ke baad req me user ki id daaldena

 
        const issues = await prisma.issue.findMany({
            where : {
                student_id
            }
        })

        if(issues.length === 0) {
            return res.status(200).json({
                message : "No issues found"
            })
        }
        

    return res.status(20).json({
        message : "Issues fetched successfully",
        issues
    })
    } catch (error:any) {
        return res.status(500).json({
            message : "Something went wrong"
        })
    }
}

// generate a Notification once issue created preferably sms ( TODO : )