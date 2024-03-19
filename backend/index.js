const express = require("express");

const sequelize = require("./utils/db");
const Coders = require("./model/Coders");
const codeRoute = require("./routes/codeRoute");

const app = express();

app.use(express.json());
app.use("/api", codeRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

Coders.sync()
  .then((result) =>
    app.listen(3000, () => {
      console.log("server started at 3000");
    })
  )
  .catch((err) => console.log(err));
