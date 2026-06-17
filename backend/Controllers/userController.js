import express  from 'express';
import User from '../Models/User.js'; 
import bcrypt from  'bcryptjs'
import { errorHandler } from '../Utils/error.js';


/////   register user ///////
export const signupUser= async (req,res,next)=>{
         const {username,email,password} = req.body;
         const hashpassword= bcrypt.hashSync(password,10);
         const newUser =  new User  ({ username, email, password: hashpassword }); 
          
          try{
            await newUser.save();
            res.status(201).json(' User created Successfully' );
          }
          catch(error){
            next( error);
          }
                           

}

/////Login user //////
export const loginUser= async (req,res)=>{

}

///////// Authentication of the user/////

export const AuthUser = async (req,res)=>{

}