const accessController = (req, res, next) => {
  console.log("Middleware Access Control!!");
  next();
};

module.exports = { accessController };
