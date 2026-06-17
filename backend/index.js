import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './Routers/userRouter.js';



 
mongoose.connect(process.env.MONGO).then( ////////to check if it is c onnected or not 
    ()=>{
        console.log('connected to mongodb !');
    }).catch((err)=>{
        console.log(err);
    })
 

const app = express();

app.use(express.json());


app.listen(3000, () => {
  console.log('server is running on port 3000 !');
});

app.use('/api/user', userRouter );

///// middle ware code to show the eroor ina sophisticated way /////

app.use( (error,req,res,next)=>{
    const statusCode = error.statusCode || 500;
    const message = error.message||'Internal server error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
})
