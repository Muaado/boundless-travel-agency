// var axios = require("axios").default;

// var options = {
//   method: "GET",
//   url: "https://hotels-com-free.p.rapidapi.com/pde/property-details/v1/hotels.com/771274016",
//   params: {
//     rooms: "1",
//     checkIn: "2021-01-27",
//     checkOut: "2021-01-28",
//     locale: "en_US",
//     currency: "USD",
//     include: "neighborhood",
//   },
//   headers: {
//     "x-rapidapi-host": "hotels-com-free.p.rapidapi.com",
//     "x-rapidapi-key": "8104cd7c75mshd08712102c16e61p130a8ajsn2b9ed3ea805d",
//   },
// };

const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "4x5xvp2b",
  dataset: "production",
  apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
  token:
    "sku7ZQNaC77ndrr7E0J4YHfWO3xNIEFku6SSjnrg1yCBlgT5ypxfQUPO8Lonhe9ZA3BYRauB4KZtAu4eXSmaqxJOSH9ik8HPyRwOPOUBuCUtLblPeBGL1zoaIu1ej9c8MBWhuwmHS5lPY7pclKON9eHRTwgvXFTqYo9Z1PxAraOzpe88RjeG", // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

const query = '*[_type == "villa"] {name, _id}';
const params = { minSeats: 2 };

// client.fetch(query, params).then((bikes) => {
//   console.log("Bikes with more than one seat:");
//   bikes.forEach((bike) => {
//     console.log(`${bike.name} ${bike._id}`);
//   });
// });

client
  .patch("76f87da8-b164-440f-9eb4-b0f9063cad40") // Document ID to patch
  .set({ name: "Dame" }) // Shallow merge
  // .inc({ numSold: 1 }) // Increment field by count
  .commit() // Perform the patch and return a promise
  .then((updatedBike) => {
    console.log("Hurray, the bike is updated! New document:");
    console.log(updatedBike);
  })
  .catch((err) => {
    console.error("Oh no, the update failed: ", err.message);
  });
// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// client.
