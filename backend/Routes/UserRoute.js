import express from 'express';
import { AccessUser, ListHotels, LoginUser, Logout, MyProfile, RegisterUser } from '../Controllers/UserController.js';
import  VerifyAuthentication  from '../Authenticaiton/Auth.js';

const router = express.Router();

router.route('/register').post(RegisterUser);

router.route('/login').post(LoginUser);

router.route('/logout').get(Logout);

router.route('/auth').get( VerifyAuthentication ,AccessUser);

router.route('/profile').get(VerifyAuthentication ,MyProfile);


router.route('/listing').post(VerifyAuthentication ,ListHotels);



export default router;