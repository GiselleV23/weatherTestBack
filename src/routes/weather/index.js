const { Router } = require("express");
const router = Router();

const { obtenerData } = require("./controller");
const { apiKeyValidator } = require("../../middlewares/apiKeyValidator");

router.get("/", apiKeyValidator, obtenerData);

module.exports = router;
