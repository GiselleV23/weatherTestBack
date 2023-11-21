const { response } = require("express");

const apiKeyValidator = async (req, resp = response, next) => {
  const reqApiKey = await req.get("secretKey");
  const apiKey = process.env.SECRET_KEY;

  if (reqApiKey !== apiKey) {
    return resp.status(401).json({
      error: true,
      errorMessage: "Apikey invalida",
    });
  }

  next();
};

module.exports = { apiKeyValidator };
