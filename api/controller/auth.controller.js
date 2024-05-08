import User from "../models/user.model.js";
import bcryptyjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = bcryptyjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};
