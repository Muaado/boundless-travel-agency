import algoliasearch from "algoliasearch";
import sanityClient from "@sanity/client";
import indexer, { flattenBlocks } from "sanity-algolia";

export const algolia = algoliasearch(
  "I49X0WT8Q9",
  "0190a6834ddc5e3119ffe8014e9e81ce"
);
//

const client = sanityClient({
  projectId: "4x5xvp2b",
  dataset: "production",
  apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
  token:
    "sku7ZQNaC77ndrr7E0J4YHfWO3xNIEFku6SSjnrg1yCBlgT5ypxfQUPO8Lonhe9ZA3BYRauB4KZtAu4eXSmaqxJOSH9ik8HPyRwOPOUBuCUtLblPeBGL1zoaIu1ej9c8MBWhuwmHS5lPY7pclKON9eHRTwgvXFTqYo9Z1PxAraOzpe88RjeG", // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

export default function handler(req, res) {
  console.log(indexer);

  return sanityAlgolia
    .webhookSync(client, req?.body)
    .then(() => res.status(200).send("ok"));
}

const sanityAlgolia = indexer.default(
  {
    villa: {
      index: algolia.initIndex("villa"),
    },
  },
  (document) => {
    console.log(document.name, "here");
    switch (document._type) {
      case "villa":
        return {
          name: document.name,

          // publishedAt: document.publishedAt,
          // excerpt: flattenBlocks(document.excerpt),
        };
      default:
        throw new Error(`Unknown type: ${document.type}`);
    }
  }
);

const types = ["villa", "resort"];
const query = `* [_type in $types && !(_id in path("drafts.**"))][]._id`;

// client.fetch(`* [_type=="villa"][]{_id, name, _type}`).then((created) => {
client.fetch(query, { types }).then((ids) => {
  console.log(ids);
  sanityAlgolia.webhookSync(client, {
    ids: { created: ids, updated: [], deleted: [] },
  });
});
