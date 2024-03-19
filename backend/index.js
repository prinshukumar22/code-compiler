const express = require("express");
const path = require("path");

const Coders = require("./model/Coders");
const codeRoute = require("./routes/codeRoute");

const app = express();

app.use(express.json());
app.use("/api", codeRoute);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

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
