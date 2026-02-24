const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

require("dotenv").config();

const errorMiddleware = require("./middleware/error");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.FRONTEND_URL
        : "http://localhost:3000",
    credentials: true,
  })
);

// Routes
app.use("/api/v1", require("./routes/productRoute"));
app.use("/api/v1", require("./routes/userRoute"));
app.use("/api/v1", require("./routes/orderRoute"));
app.use("/api/v1", require("./routes/paymentRoute"));


app.use(errorMiddleware);

module.exports = app;
