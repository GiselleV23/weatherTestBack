const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use("/weather", require("./src/routes/weather"));

app.listen(4000, () => {
  console.log(`sevidor corriendo en el puerto ${4000}`);
});
