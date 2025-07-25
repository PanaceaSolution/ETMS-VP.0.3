import prisma from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { email, password, first_name, last_name, mobile_number } = req.body;

    if (!email || !password || !first_name || !last_name || !mobile_number) {
      return res.status(400).json({
        message: "Please provide all required fields",
      });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User with this email already exists",
      });
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, 10),
        firstName: first_name,
        lastName: last_name,
        mobileNumber: mobile_number,
      },
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      message: "Something went wrong during registration",
      error: error.message,
    });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const existingUser = await prisma.user.findMany();

    if (existingUser.length == 0) {
      return res.status(404).json({
        message: "No user found",
      });
    }

    return res.status(201).json({
      message: "User Fetch successfully",
      user: existingUser,
    });
  } catch (error) {
    console.error("Fetching error:", error);
    return res.status(500).json({
      message: "Something went wrong during fetching",
      error: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "Please provide email and password",
    });
  }
  const userFound = await prisma.user.findMany({
    where: {
      email,
    },
  });
  if (userFound.length == 0) {
    return res.status(404).json({
      message: "Email not registered",
    });
  }

  const isMathced = bcrypt.compareSync(password, userFound[0].password);
  if (isMathced) {
    const token = jwt.sign({ id: userFound[0].id }, process.env.SECRET_KEY, {
      expiresIn: "5d",
    });

    res.status(200).json({
      message: "User logged In successfuly",
      token: token,
    });
  } else {
    return res.status(400).json({
      message: "Invalid password",
    });
  }
};
