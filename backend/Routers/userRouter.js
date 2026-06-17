import express from 'express';
import { signupUser } from '../Controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/signup', signupUser);

export default userRouter;