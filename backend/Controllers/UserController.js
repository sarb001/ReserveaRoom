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
                const {  BedType  ,check } = await req.query;
                console.log('backend bed.',BedType);
                console.log('backend check.',check);

                const AllHotel = await Hotel.find({});  //  allHotels 

                let FilteredMainData;

                if(check === 'true'){
                    const FilteredData =  AllHotel?.reduce((acc,item) => {
                        if(item.BedType.toString().replace(/\s/g,'') === BedType.toString().replace(/\s/g, '')){
                            acc.push(item);
                        }
                        return acc;
                    },[]) 
                    console.log('true Data -',FilteredData.length);
                    FilteredMainData = FilteredData;
                    
                }else{
                     FilteredMainData = AllHotel;
                    console.log('false Data -',FilteredMainData.length);
                }
                
                res.status(200).json({
                     FilteredMainData,
                     success : true,
                     message : " Filter workss "
                })

    } catch (error) {
            console.log('error is -',error);
    }
}

export const SortingNow = async(req,res) => {
    try {
        const {sort} = await  req.query;
        console.log('requested  query -',sort);

        const AllHotel = await Hotel?.find({});    
        console.log('allHotels sorting -',AllHotel.length);

        let filtersort;

        if(sort.toString() === 'asc'){
          filtersort = AllHotel?.sort((obj1,obj2) => 
                             obj1.PricingPerRoom - obj2.PricingPerRoom
                        )
          }else if(sort.toString() === 'desc'){
            filtersort = AllHotel?.sort((obj1,obj2) => 
                obj2.PricingPerRoom - obj1.PricingPerRoom
                )
          }else if(sort.toString() === 'distance'){
            filtersort = AllHotel?.sort((obj1,obj2) => 
                 obj1.HotelDistance - obj2.HotelDistance
            )
          }

        // console.log(' sorting All -',filtersort);
        // console.log(' sorting elngth -',filtersort.length);

        res.status(200).json({
             filtersort,
             message:" Sorting done "
        })

    } catch (error) {
            console.log('error in sorting -',error);
    }
}
