import express from 'express';
import { AccessUser, LoginUser, Logout, RegisterUser } from '../Controllers/UserController.js';
import  VerifyAuthentication  from '../Authenticaiton/Auth.js';

const router = express.Router();

router.route('/register').post(RegisterUser);

router.route('/login').get(LoginUser);

router.route('/logout').get(Logout);

router.route('/auth').get( VerifyAuthentication ,AccessUser);

AccessUser

export default router;