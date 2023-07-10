const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./routers/userRouter");

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors({ origin: "*" }));

//mongodb config
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection established..."))
  .catch((err) => console.log(err));

// routes
app.use("/api/users", userRouter);


app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT} ...`);
});
