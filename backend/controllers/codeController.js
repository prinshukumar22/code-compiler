const Coders = require("../model/Coders");
const errorHandler = require("../utils/errorHandler");

exports.createCoder = (req, res, next) => {
  const { username, language, input, snippet } = req.body;
  Coders.create({
    username,
    language,
    input,
    snippet,
  })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Data added successfully",
      });
    })
    .catch((err) => next(errorHandler(err.message)));
};

exports.getAllCoders = (req, res, next) => {
  Coders.findAll()
    .then((coders) => {
      res.status(201).json({
        success: true,
        message: "Data fetched successfully",
        coders,
      });
    })
    .catch((err) => next(errorHandler(err.message)));
};
