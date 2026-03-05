const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Model/User");
const router = express.Router();
exports.registerUser = async (req,res)=>{
    try{
        const {name,email,password} = req.body;
        const exist = await User.findOne({email});
        if(exist)
             return res.status(400).json({message:"user Already Exist"});
        const hashpassword = await bcrypt.hash(password,10);
        const newuser = new User({
            name,email,password:hashpassword
        });
        await newuser.save();
        res.status(201).json({
            message:"user Registered Successfully"
        });
    }
    catch(error){
        res.status(500).json({
            message:"Error Occured"
        });
    }
};

exports.loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({
      message: "Login successful",
      token: "sample_token"
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};