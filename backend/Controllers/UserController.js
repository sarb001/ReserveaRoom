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

    const  findUser = await User.find({email});
    if(!findUser){
        return res.status(400).json({
            message :  " User not Found ",
            findUser
        })
    }

    // from email get pass 
    // if correct fetch details
    // store in localstorage 
    // return logged user 

}