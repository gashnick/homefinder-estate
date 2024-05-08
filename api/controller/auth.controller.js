import User from "../models/user.model.js";
import bcryptyjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = bcryptyjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
