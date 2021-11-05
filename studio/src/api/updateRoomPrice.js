var axios = require("axios").default;

function formatDateWithDashes(date) {
  return new Date(date)
    .toLocaleDateString("en-DE", {
      // you can use undefined as first argument
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .toString()
    .split("/")
    .reverse()
    .join("-");
}

const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "4x5xvp2b",
  dataset: "production",
  apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
  token:
    "sku7ZQNaC77ndrr7E0J4YHfWO3xNIEFku6SSjnrg1yCBlgT5ypxfQUPO8Lonhe9ZA3BYRauB4KZtAu4eXSmaqxJOSH9ik8HPyRwOPOUBuCUtLblPeBGL1zoaIu1ej9c8MBWhuwmHS5lPY7pclKON9eHRTwgvXFTqYo9Z1PxAraOzpe88RjeG", // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

const fetchAndUpdateRoomPrices = async () => {
  const query =
    '*[_type == "resort"][externalId != null] {name, _id, externalId}';
  // const params = { minSeats: 2 };

  const resorts = await client.fetch(query).then((resorts) => {
    // console.log("Resorts");
    resorts.forEach((resort) => {
      console.log(`${resort.name} ${resort.externalId}`);
    });
    return resorts;
  });

  // console.log(resorts);
  // console.log(axios);

  resorts.forEach(async ({ _id, externalId }) => {
    const dateNow = new Date();
    const dateOneWeekFromNow = new Date(
      new Date().setDate(dateNow.getDate() + 7)
    );

    const formatedDateNow = formatDateWithDashes(dateNow);
    const formatedDateOneWeekFromNow = formatDateWithDashes(dateOneWeekFromNow);

    var options = {
      method: "GET",
      url: "https://hotels-com-provider.p.rapidapi.com/v1/hotels/booking-details",
      params: {
        adults_number: "1",
        checkin_date: formatedDateNow, //formatedDateNow,
        checkout_date: formatedDateOneWeekFromNow, //formatedDateOneWeekFromNow,
        locale: "en_US",
        currency: "USD",
        hotel_id: externalId,
        children_ages: "4,0",
      },
      headers: {
        "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
        "x-rapidapi-key": "8104cd7c75mshd08712102c16e61p130a8ajsn2b9ed3ea805d",
      },
    };

    axios
      .request(options)
      .then(async (response) => {
        // villas.forEach(({ _id }) => {

        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.roomsAndRates.rooms);
        // console.log(response.data.roomsAndRates.rooms[0].ratePlans);
        const query = `*[_type == "villa"][resort._ref == "${_id}"] {name, _id, externalId, resort}`;

        let allVillasForResort = await client.fetch(query).then((villas) => {
          return villas.map((villa) => {
            return { villa };
          });
        });

        const villaPromises = await response.data.roomsAndRates.rooms.map(
          async ({ name, ratePlans }) => {
            const query = `*[_type == "villa"][alternateName == "${name}"][resort._ref == "${_id}"] {name, _id, externalId, resort}`;

            const villa = await client.fetch(query).then((villas, index) => {
              villas.forEach((villa) => {
                console.log(ratePlans);
                client
                  .patch(villa._id) // Document ID to patch
                  .set({ price: ratePlans[0]?.price.unformattedCurrent }) // Shallow merge

                  .commit() // Perform the patch and return a promise
                  .then((updatedBike) => {
                    console.log("Hurray, the bike is updated! New document:");
                    console.log(updatedBike);
                  })
                  .catch((err) => {
                    console.error("Oh no, the update failed: ", err.message);
                  });
              });
              return villas;
            });

            return { villa: villa[0], price: ratePlans?.[0]?.price };
          }
        );
      })
      .catch(function (error) {
        console.error(error, "here");
        console.error(error.request, "here");
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  });

  // client.
};
fetchAndUpdateRoomPrices();
