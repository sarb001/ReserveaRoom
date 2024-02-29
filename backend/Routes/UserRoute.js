import express from 'express';
import { LoginUser, RegisterUser } from '../Controllers/UserController.js';

const router = express.Router();

router.route('/register').post(RegisterUser);

router.route('/login').get(LoginUser);

export default router;