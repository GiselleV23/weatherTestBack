const { response } = require("express");
const { weatherCities } = require("../../../weather");

const obtenerData = async (_, resp = response) => {
  return resp.json({
    data: weatherCities,
  });
};

module.exports = { obtenerData };
