import express  from 'express';
import User from '../Models/User.js';

/////   register user ///////
export const signupUser= async (req,res)=>{
         const {username,email,password} = req.body;
         const newUser =  new User  ({ username, email, password }); 
          await newUser.save();
          res.status(201).json(' User created Successfully' )
                           

}

/////Login user //////
export const loginUser= async (req,res)=>{

}

///////// Authentication of the user/////

export const AuthUser = async (req,res)=>{

}