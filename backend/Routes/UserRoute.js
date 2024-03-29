import express from 'express';
import { AccessUser, AllHotels, FilterNow, ListHotels, LoginUser, Logout, MyProfile, RegisterUser, SortingNow } from '../Controllers/UserController.js';
import  VerifyAuthentication  from '../Authenticaiton/Auth.js';

const router = express.Router();

router.route('/register').post(RegisterUser);

router.route('/login').post(LoginUser);

router.route('/logout').get(Logout);

router.route('/auth').get( VerifyAuthentication ,AccessUser);

router.route('/profile').get(VerifyAuthentication ,MyProfile);

router.route('/listing').post(VerifyAuthentication ,ListHotels);

router.route('/allhotels').get(VerifyAuthentication ,AllHotels);

router.route('/hotels').get(VerifyAuthentication ,FilterNow);

router.route('/hotel').get(VerifyAuthentication ,SortingNow);






export default router;