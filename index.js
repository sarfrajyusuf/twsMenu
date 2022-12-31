require("dotenv").config();
const express = require("express");
var cors = require("cors");
const connectDB = require("./db/conn");
const router = require("./router/menu.router");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`server is running ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();

//B7WLGh2qn0190aqI
//sarfrajy21
