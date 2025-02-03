import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const ragisterUser = async (req, res) => {
  try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
          return res.json({ success: false, message: "Details are necessary or missing" });
      }

      // First hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);  // Now the hashedPassword is initialized before use

      // Now create user data
      const userData = {
          name,
          email,
          password: hashedPassword
      };

      const newUser = new userModel(userData);
      const user = await newUser.save();

      // Generate JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ success: true, token, user: { name: user.name } });

  } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
  }
};


const loginUser = async( req, res) =>{
    try {
        const {email, password} = req.body;

        const user = await userModel.findOne({email})

        if(!user){
            return res.json({ success: false, message: " User not found/ exist"})
        }

        const isMatch = await bcrypt.compare(password, user.password )

        if(isMatch){
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

            res.json({success: true, token , user:{ name: user.name}})
        }
        else{
            return res.json({ success: false, message: " Invalid Credentials"})
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message})
    }
}


const userCredits = async (req, res) =>{
try {
   const {userId} = req.body;

    const user = await userModel.findById(userId)
    res.json({success: true , credits: user.creditBalance, user:{name: user.name}})
} catch (error) {
  console.log(error.message)
  res.json({success: false, message: error.message})
}
}
export {ragisterUser, loginUser, userCredits}

