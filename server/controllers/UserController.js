import prisma from "../config/db.js";

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
        password,
        firstName: first_name,
        lastName: last_name,
        mobileNumber: mobile_number,
      },
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: newUser,
      //   user: {
      //     id: newUser.id,
      //     name: newUser.name,
      //     email: newUser.email,
      //     role: newUser.role,
      //   },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      message: "Something went wrong during registration",
      error: error.message,
    });
  }
};
