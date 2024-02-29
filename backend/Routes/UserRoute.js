import express from 'express';
import { LoginUser, RegisterUser } from '../Controllers/UserController';

const router = express.Router();

router.route('/register').post(RegisterUser);

router.route('/login').post(LoginUser);

export default router;