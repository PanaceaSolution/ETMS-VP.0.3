import express from "express";
import { registerUser } from "../controllers/UserController.js";

const router = express.Router();

router.route("/user").post(registerUser);

export default router;
