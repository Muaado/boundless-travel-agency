// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document schemas
import author from "./documents/author";
import category from "./documents/category";
import post from "./documents/post";
import siteSettings from "./documents/siteSettings";

// Object types
import bodyPortableText from "./objects/bodyPortableText";
import bioPortableText from "./objects/bioPortableText";
import excerptPortableText from "./objects/excerptPortableText";
import mainImage from "./objects/mainImage";
import authorReference from "./objects/authorReference";
import resort from "./documents/resort";
import restaurant from "./documents/restaurant";
import villa from "./documents/villa";

import resortTag from "./documents/resortTag";
import resortAccomodationType from "./documents/resortAccomodationType";
import resortTransferType from "./documents/resortTransferType";
import resortCollection from "./documents/resortCollection";
import restaurantCusinesServed from "./documents/restaurantCusinesServed";
import spaServicesOffered from "./documents/spaServicesOffered";
import spaTreatmentType from "./documents/spaTreatmentType";
import spaTag from "./documents/spaTag";
import spa from "./documents/spa";
import spaFeaturedProductBrand from "./documents/spaFeaturedProductBrand";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "blog",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    post,
    category,
    author,
    resort,
    resortCollection,
    resortTag,
    resortAccomodationType,
    resortTransferType,
    restaurant,
    restaurantCusinesServed,
    villa,
    spa,
    spaServicesOffered,
    spaTreatmentType,
    spaTag,
    spaFeaturedProductBrand,

    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});