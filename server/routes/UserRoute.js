import express from "express";
import {
  getAllUser,
  loginUser,
  registerUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.route("/signup").post(registerUser).get(getAllUser);
router.route("/signin").post(loginUser);

export default router;
