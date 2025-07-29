import express from "express";
import {
  addEvent,
  getAllEvent,
  getSingleEvent,
} from "../controllers/EventController.js";

const router = express.Router();

router.route("/").get(getAllEvent).post(addEvent);
router.route("/:id").get(getSingleEvent);
export default router;
