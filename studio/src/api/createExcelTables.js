const Excel = require("exceljs");
const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "4x5xvp2b",
  dataset: "production",
  apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
  token:
    "sku7ZQNaC77ndrr7E0J4YHfWO3xNIEFku6SSjnrg1yCBlgT5ypxfQUPO8Lonhe9ZA3BYRauB4KZtAu4eXSmaqxJOSH9ik8HPyRwOPOUBuCUtLblPeBGL1zoaIu1ej9c8MBWhuwmHS5lPY7pclKON9eHRTwgvXFTqYo9Z1PxAraOzpe88RjeG", // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

const createVillaTable = async () => {
  const workbook = new Excel.Workbook();

  workbook.creator = "Boundless";
  workbook.created = new Date();

  const sheet = workbook.addWorksheet("Villa sheet");
  sheet.addRow([
    "id",
    "name",
    "description",
    "alternateName",
    "numberOfRooms",
    "price",
    "sizeSqm",
    "tagline",
    "uniqueCode",
  ]);

  const query =
    '*[_type == "villa"] {name, _id, description, alternateName, numberOfRooms, price, sizeSqm, tagline, uniqueCode}';
  // const params = { minSeats: 2 };

  const resorts = await client.fetch(query).then((resorts) => {
    // console.log("Resorts");
    resorts.forEach(
      ({
        name,
        _id,
        description,
        alternateName,
        numberOfRooms,
        price,
        sizeSqm,
        tagline,
        uniqueCode,
      }) => {
        // console.log(_rawDescription);
        sheet.addRow([
          _id,
          name,
          description ? description?.[0].children[0].text : "",
          alternateName ? alternateName : "",
          numberOfRooms ? numberOfRooms : "",
          price ? price : "",
          sizeSqm ? sizeSqm : "",
          tagline ? tagline : "",
          uniqueCode ? uniqueCode : "",
        ]);
      }
    );
    return resorts;
  });

  await workbook.csv.writeFile("villas.csv");
  // await workbook.xlsx.writeFile("villas.xlsx");
};

const createResortTable = async () => {
  const workbook = new Excel.Workbook();

  workbook.creator = "Boundless";
  workbook.created = new Date();

  const sheet = workbook.addWorksheet("Resort sheet");
  sheet.addRow([
    "id",
    "name",
    "description",
    "locationAtoll",
    "locationFull",
    "numberOfBars",
    "numberOfRestaurants",
    "numberOfRooms",
    "timeToAirport",
  ]);

  const query =
    '*[_type == "resort"] {name, _id, description, locationAtoll, locationFull, numberOfBars, numberOfRestaurants, numberOfRooms, timeToAirport }';
  // const params = { minSeats: 2 };

  const resorts = await client.fetch(query).then((resorts) => {
    resorts.forEach(
      ({
        name,
        _id,
        description,
        locationAtoll,
        locationFull,
        numberOfBars,
        numberOfRestaurants,
        numberOfRooms,
        timeToAirport,
      }) => {
        // console.log(locationAtoll);
        sheet.addRow([
          _id,
          name,
          description ? description?.[0].children[0].text : "",
          locationAtoll ? locationAtoll : "",
          locationFull ? locationFull : "",
          numberOfBars ? numberOfBars : "",
          numberOfRestaurants ? numberOfRestaurants : "",
          numberOfRooms ? numberOfRooms : "",
          timeToAirport ? timeToAirport : "",
        ]);
      }
    );
    return resorts;
  });

  await workbook.csv.writeFile("resorts.csv");
};

const createRestaurantTable = async () => {
  const workbook = new Excel.Workbook();

  workbook.creator = "Boundless";
  workbook.created = new Date();

  const sheet = workbook.addWorksheet("Restaurant sheet");
  sheet.addRow(["id", "name", "description", "alternateName"]);

  const query =
    '*[_type == "restaurant"] {name, _id, description, alternateName}';

  await client.fetch(query).then((records) => {
    records.forEach(({ name, _id, description, alternateName }) => {
      sheet.addRow([
        _id,
        name,
        description ? description?.[0].children[0].text : "",
        alternateName ? alternateName : "",
      ]);
    });
    return records;
  });

  await workbook.csv.writeFile("restaurants.csv");
};

const createSpaTable = async () => {
  const workbook = new Excel.Workbook();

  workbook.creator = "Boundless";
  workbook.created = new Date();

  const sheet = workbook.addWorksheet("Spa sheet");
  sheet.addRow(["id", "name", "description"]);

  const query = '*[_type == "spa"] {name, _id, description }';

  await client.fetch(query).then((records) => {
    records.forEach(({ name, _id, description }) => {
      sheet.addRow([
        _id,
        name ? name : "",
        description ? description?.[0].children[0].text : "",
      ]);
    });
    return records;
  });

  await workbook.csv.writeFile("spas.csv");
};

createResortTable();
createVillaTable();
createRestaurantTable();
createSpaTable();
