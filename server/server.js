import express from "express";
import dotenv from "dotenv";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import sql from "./config/db.js";
import userRoute from "./routes/UserRoute.js";
import eventRoute from "./routes/EventRoute.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.get("/", (req, res) => {
  res.send("Hello, Server is running!");
});

app.use(globalErrorHandler);
app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});
