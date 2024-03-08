import User from "../Models/User.js";
import Hotel from "../Models/Hotels.js";


export const RegisterUser = async(req,res) => {
    const { fname ,email ,password  } = req.body;

    if(!fname || !email || !password){
            return res.status(400).json({
                 message : "Fill All the Fields"
            })
    }

      const NewUser = await User.create({
        fname,
        email,
        password,
        // avatar: {
        //     public_id : 'create user',
        //     url : 'URL-URL'
        // }
      })

     const user = await NewUser.save();
     return res.status(201).json({
        message : " New User Created ",
        user
     })
}

export const LoginUser = async(req,res) => {

    const { email , password } = req.body;

    if(!email || !password){
        return res.status(400).json({
             success : false,
             message: "Fill Empty Fields"
        })
    }

    const  findUser = await User.findOne({email}).select("+password");
    if(!findUser){
        return res.status(400).json({
            message :  " User not Found ",
            findUser
        })
    }

    console.log('find user -',findUser);
    const isMatched  =  await findUser.matchPassword(password);

    if(!isMatched){
        return res.status(400).json({
            message: " Password  not Matched "
        })
    }

    const token = await findUser.generateToken(findUser._id);
    console.log('token is -',token);

    res.cookie('token' , token , {
        maxAge : new Date(Date.now() + 900000),
        path : '/',
    });
    
    const user = findUser;

    return res.status(200).json({          
        success : true,
        token,
        user
    })
}

export const Logout = async(req,res) => {
        res.clearCookie('token');
        return res.status(200).json({
            success : true,
            message : "Logged Out"
        })
}

export const AccessUser = async(req,res) => {
    try {
         console.log('requested access -',req);
            const   User = await req.user;
            console.log('Main User -',User);
             res.send(' Auth Working ')
    } catch (error) {
            console.log('error -',error);
    }
}

export const MyProfile = async(req,res) => {
    try {
        console.log('requeste profile- ',req.user);
        const user = await User.findById(req.user._id).select("+password");
        console.log('userProfiledd  -',User);

        if(!user){
            return res.status(400).json({
                success : false,
                message : " User not Existed "
            })
        }

       return res.status(200).json({
             user,
             success : true,
             message : " User Profile Founded "
        })

    } catch (error) {
        console.log('error -',error);
    }
}

export const ListHotels = async(req,res) => {
    try {
         console.log('req.body -',req.body);
        const { Hotelname , HoteltagLine , HotelCity , HotelLocation  ,HotelDistance , TotalRooms , PricingPerRoom , Adults ,BedType ,Meals , PropertyType } =  req.body;

        if(!Hotelname || !HoteltagLine || !HotelCity || !HotelLocation 
        || !HotelDistance || !TotalRooms || !PricingPerRoom || !BedType || !Meals  || !PropertyType || !Adults){
            return res.status(400).json({
                message : "Fill All the Fieldss"
           })
        }
 
        const hotel = await Hotel.create({
            Hotelname,
            HoteltagLine,
            HotelCity,
            HotelDistance,
            HotelLocation,
            TotalRooms,
            PricingPerRoom,
            BedType,
            Meals,
            Adults,
            PropertyType
        });
        console.log('New Hotel Created -',hotel);
         await hotel.save(); 
        return res.status(201).json({
            message : " Hotel Listed Success ",
            hotel
         })

    } catch (error) {
        console.log('error Hotels -',error);
    }
}

export const AllHotels = async(req,res) => {
    try {
        const allhotels = await Hotel.find({});
        console.log('allHotels -',allhotels);
         return res.status(200).json({
             allhotels,
             success : true,
             message : " All Hotels Fetched "
        })
    } catch (error) {
        console.log('error is -',error);
    }
}

export const FilterNow = async(req,res) => {
    try {
                // /api/q?bedType=twin
            console.log('request now =.',req);
            const FilterData = await Hotel.find();
    } catch (error) {
            console.log('error is -',error);
    }
}