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

app.use('/api/user', userRouter  )


app.listen(3000, () => {
  console.log('server is running on port 3000 !');
});

