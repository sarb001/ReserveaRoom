import express from 'express';
import { LoginUser, Logout, RegisterUser } from '../Controllers/UserController.js';

const router = express.Router();

router.route('/register').post(RegisterUser);

router.route('/login').get(LoginUser);

router.route('/logout').get(Logout);

export default router;