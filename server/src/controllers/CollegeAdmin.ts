import { Request,Response} from "express";
import {prisma} from "../index"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async(req:Request , res : Response)=>{
    try {
        const {domain_id , name , college_name , password , phone_number} = req.body;
    
        if(!domain_id || !name || !college_name || !password || !phone_number){
            return res.status(400).json({
                success : false,
                message : "Please fill all fields"
            });
        }
    
        //check whether the college admin already exists or not
        const existingcollegeAdmin = await prisma.college_admin.findFirst(
            {
                where : {
                    domain_id 
                }
            }
        )
        if(existingcollegeAdmin){
            return res.status(400).json({
                success : false,
                message : "college Admin already exists. Please sign in to continue."
            });
        }
    
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const collegeAdmin = await prisma.college_admin.create({
            data : {
                name,
                domain_id,
                college_name,
                phone_number,  
                password : hashedPassword
            }
        });
    
        return res.status(200).json({
            success : true,
            message : "college Admin created successfully",
            collegeAdmin
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "Something went wrong"
        });
    }
}

export const login = async(req:Request , res : Response)=>{
   try {
     const {domain_id , password} = req.body;
     if(!domain_id || !password){
        return res.status(400).json({
            success : false,
            message : "Please fill all fields"
        });
     }
 
     const collegeAdmin = await prisma.college_admin.findFirst({
         where: {
             domain_id
         }
     })
 
     if(!collegeAdmin){
         return res.status(400).json({
             success : false,
             message : "Invalid credentials"
         });
     }
 
     //check if the password is correct
     const validPassword = await bcrypt.compare(password, collegeAdmin.password);
     if(!validPassword){
         return res.status(400).json({
             success : false,
             message : "Invalid credentials"
         });
     }
 
     //create and assign a token
     const token = jwt.sign({
        domain_id: collegeAdmin.domain_id,
     }, process.env.JWT_SECRET!, 
     { expiresIn: "1h"})
 
     // Set cookie for token and return success response
     const options = {
         expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
         httpOnly: true,
     };
 
     return res.cookie("token", token, options).status(200).json({
         success : true,
         message : "Logged in successfully",
         token
     })
   } catch (error : any ) {
        return res.status(500).json({
            success : false,
            message : "Something went wrong"
        });
   }

}