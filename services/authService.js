const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const generateToken = require('../utils/generateToken');

const Register=async(userData)=>{
    const { username,email,password} = userData ;

    const userExist=await User.findOne({email});
    if (userExist)
    {
        throw new Error('user Already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser= new User({username,email,
        password: hashedPassword,});
    await newUser.save();

    const token= generateToken(newUser,newUser._id);

    return{newUser, token};





}

const signin=async(userData)=>{
    const{email,password}=userData;
    const user = await User.findOne({ email });
    const isPassworValid= await bcrypt.compare(password,user.password);
    if(!user || !isPassworValid){
        throw new Error('Invalid credentials');
    }
    const token = generateToken(user._id);
    return { user, token };
}

module.exports = { Register, signin };