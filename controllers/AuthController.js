import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user-models.js";

const JWT_SECRET = process.env.JWT_SECRET;

//Register User

export const registerUser = async (req, res) => {
  const { 
    name,
      password,
      email,
      phone,
      restaurantname,
      role} = req.body
  try {
    //chacking user is allredy existi
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ msg: "User already exists" });

    //hashing password
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      password: hashedPassword,
      email,
      phone,
      restaurantname,
      role
    });

    //responce
    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error});
    console.log(error);
    
  }
};

//Login User

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const woner = await User.findOne({ email });
    if (!woner) return res.status(400).json({ msg: "Invalid credentials" });

    //compareing password
    const isMatch = await bcrypt.compare(password, woner.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    //geting token
    const token = jwt.sign({ userId: woner._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ msg: "Login failed" });
  }
};
