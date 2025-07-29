import express from "express";
import dotenv from "dotenv";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import sql from "./config/db.js";
import userRoute from "./routes/UserRoute.js";
import eventRoute from "./routes/EventRoute.js";
import bookingRoute from "./routes/BookingRoute.js";
import cors from "cors";
import helmet from "helmet";
import { sanitizePostData } from "./middlewares/sanitizeMiddleware.js";
import rateLimit from "express-rate-limit";

// import xss from "xss-clean";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
// app.use(xss());
app.use(sanitizePostData);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiter to ALL routes
app.use(limiter);

// app.get("/db", async (req, res) => {
//   try {
//     console.log("start");
//     const result = await sql`SELECT version()`;
//     res.send(`PostgreSQL Version: ${result[0].version}`);
//     console.log("database connected");
//   } catch (error) {
//     res.status(500).send("Database error: " + error.message);
//   }
// });

app.use("/api/v3/user", userRoute);
app.use("/api/v3/event", eventRoute);
app.use("/api/v3/booking", bookingRoute);

app.get("/", (req, res) => {
  res.send("Hello, Server is running!");
});

app.use(globalErrorHandler);
app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});
