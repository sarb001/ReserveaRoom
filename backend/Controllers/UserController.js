import User from "../Models/User.js";


export const RegisterUser = async(req,res) => {
    const { name ,email ,password  } = req.body;

    if(!name || !email || !password){
            return res.status(400).json({
                 message : "Fill All the Fields"
            })
    }

      const NewUser = await User.create({
        name,
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
    const token = '123';
    res.cookie('token' , token , {
        maxAge : new Date(Date.now() + 900000),
        path : '/',
    });
    
    return res.status(200).json({
        success : true,
        token,
        findUser
    })
}

export const Logout = async(req,res) => {
       res.clearCookie('token');
        return res.status(200).json({
            success : true,
            message : "Logged Out"
        })
}