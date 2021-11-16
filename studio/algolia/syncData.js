import algoliasearch from "algoliasearch";
import sanityClient from "@sanity/client";
import indexer from "sanity-algolia";
export const algolia = algoliasearch(
  "I49X0WT8Q9",
  "96ed4ba285a38fa22f3ff28234551fbb"
);
//
// import sanityAlgolia from "./test.js";

const algoliaIndex = algolia.initIndex("my-index");

// console.log(sanityAlgolia);
const sanityAlgolia = indexer(
  // The first parameter maps a Sanity document type to its respective Algolia
  // search index. In this example both `post` and `article` Sanity types live
  // in the same Algolia index. Optionally you can also customize how the
  // document is fetched from Sanity by specifying a GROQ projection.
  //
  // In this example we fetch the plain text from Portable Text rich text
  // content via the pt::text function.
  //
  // _id and other system fields are handled automatically.
  {
    post: {
      index: algoliaIndex,
      projection: `{
        title,
        "path": slug.current,
        "body": pt::text(body)
      }`,
    },
    // For the article document in this example we want to resolve a list of
    // references to authors and get their names as an array. We can do this
    // directly in the GROQ query in the custom projection.
    article: {
      index: algoliaIndex,
      projection: `{
        heading,
        "body": pt::text(body),
        "authorNames": authors[]->name
      }`,
    },
  },

  // The second parameter is a function that maps from a fetched Sanity document
  // to an Algolia Record. Here you can do further mutations to the data before
  // it is sent to Algolia.
  (document) => {
    console.log(document);
    switch (document._type) {
      case "post":
        return Object.assign({}, document, {
          custom: "An additional custom field for posts, perhaps?",
        });
      case "article":
        return {
          title: document.heading,
          body: document.body,
          authorNames: document.authorNames,
        };
      default:
        return document;
    }
  },
  // Visibility function (optional).
  //
  // The third parameter is an optional visibility function. Returning `true`
  // for a given document here specifies that it should be indexed for search
  // in Algolia. This is handy if for instance a field value on the document
  // decides if it should be indexed or not. This would also be the place to
  // implement any `publishedAt` datetime visibility rules or other custom
  // visibility scheme you may be using.
  (document) => {
    if (document.hasOwnProperty("isHidden")) {
      return !document.isHidden;
    }
    return true;
  }
);

// const sanityClient = require("@sanity/client");
export const sanity = sanityClient({
  projectId: "4x5xvp2b",
  dataset: "production",
  apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
  token:
    "sku7ZQNaC77ndrr7E0J4YHfWO3xNIEFku6SSjnrg1yCBlgT5ypxfQUPO8Lonhe9ZA3BYRauB4KZtAu4eXSmaqxJOSH9ik8HPyRwOPOUBuCUtLblPeBGL1zoaIu1ej9c8MBWhuwmHS5lPY7pclKON9eHRTwgvXFTqYo9Z1PxAraOzpe88RjeG", // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

// Fetch the _id of all the documents we want to index
const types = ["article", "page", "product", "author"];
const query = `* [_type in $types && !(_id in path("drafts.**"))][]._id`;

sanity.fetch(query, { types }).then((ids) =>
  sanityAlgolia.webhookSync(sanity, {
    ids: { created: ids, updated: [], deleted: [] },
  })
);
