
const countries = [
    {
      name: "India",
      code: "IN",
      states: [
        {
          name: "Tamil Nadu",
          districts: ["Chennai", "Coimbatore", "Madurai"],
          pincodePrefix: "6",
        },
        {
          name: "Andhra Pradesh",
          districts: ["Vijayawada", "Visakhapatnam", "Guntur"],
          pincodePrefix: "5",
        },
      ],
    },
    {
      name: "United States",
      states: [
        {
          name: "California",
          code: "US",
          districts: ["Los Angeles", "San Francisco", "San Diego"],
          pincodePrefix: "9",
        },
        {
          name: "New York",
          districts: ["New York City", "Buffalo", "Albany"],
          pincodePrefix: "1",
        },
      ],
    },
    {
      name: "United Kingdom",
      states: [
        {
          name: "England",
          code:"GB",
          districts: ["London", "Manchester", "Birmingham"],
          pincodePrefix: "L",
        },
        {
          name: "Scotland",
          districts: ["Edinburgh", "Glasgow", "Aberdeen"],
          pincodePrefix: "S",
        },
      ],
    },
    {
      name: "Australia",
      states: [
        {
          name: "New South Wales",
          code:"AU" ,
          districts: ["Sydney", "Newcastle", "Wollongong"],
          pincodePrefix: "2",
        },
        {
          name: "Victoria",
          districts: ["Melbourne", "Geelong", "Ballarat"],
          pincodePrefix: "3",
        },
      ],
    },
  ];

export default countries
