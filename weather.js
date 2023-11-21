const weatherCities = [
  {
    weather: [
      {
        id: 802,
        main: "Soleado",
      },
    ],
    base: "stations",
    main: {
      temp: 298.15,
      temp_min: 298.15,
      temp_max: 299.15,
      humidity: 73,
    },
    wind: {
      speed: 1.5,
    },
    sys: {
      type: 1,
      id: 8590,
      country: "CO",
    },
    name: "Cali",
    cod: 200,
  },

  {
    weather: [
      {
        id: 803,
        main: "Nublado",
      },
    ],
    base: "stations",
    main: {
      temp: 258.15,
      temp_min: 272.15,
      temp_max: 282.15,
      humidity: 60,
    },
    wind: {
      speed: 3.2,
    },
    sys: {
      type: 1,
      id: 8590,
      country: "CO",
    },
    name: "Bogota",
    cod: 200,
  },

  {
    weather: [
      {
        id: 804,
        main: "Lluvioso",
      },
    ],
    base: "stations",
    main: {
      temp: 288.15,
      temp_min: 280.15,
      temp_max: 290.15,
      humidity: 73,
    },
    wind: {
      speed: 2.5,
    },
    sys: {
      type: 1,
      id: 8590,
      country: "CO",
    },
    name: "Medellin",
    cod: 200,
  },
  {
    weather: [
      {
        id: 804,
        main: "Soleado",
      },
    ],
    base: "stations",
    main: {
      temp: 280.15,
      temp_min: 280.15,
      temp_max: 290.15,
      humidity: 60,
    },
    wind: {
      speed: 2.5,
    },
    sys: {
      type: 1,
      id: 8590,
      country: "CO",
    },
    name: "Cucuta",
    cod: 200,
  },
];

module.exports = {
  weatherCities,
};
