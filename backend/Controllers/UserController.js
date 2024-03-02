import User from "../Models/User.js";


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
            const   User = await req.user;
            console.log('Main User -',User);
             res.send(' Auth Working ')
    } catch (error) {
            console.log('error -',error);
    }
}