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
// import restauranta from "./documents/restaurant copy";
import villa from "./documents/villa";

import resortAccomodationType from "./documents/resortAccomodationType";
import resortTransferType from "./documents/resortTransferType";
// import resortCollection from "./documents/resortCollection";
import restaurantCusinesServed from "./documents/restaurantCusinesServed";
import spaServicesOffered from "./documents/spaServicesOffered";
import spaTreatmentType from "./documents/spaTreatmentType";

import spa from "./documents/spa";
import spaFeaturedProductBrand from "./documents/spaFeaturedProductBrand";
import villaPoolType from "./documents/villaPoolType";

import resortHighlight from "./objects/resort/resortHighlight";

import activity from "./documents/activity";

import resortFaq from "./documents/resortFaq";
import faqGroupTag from "./documents/faqGroupTag";
import faqQuestionAnswer from "./objects/faqQuestionAnswer";

// import spaService from "./objects/spaService";
import aboutUs from "./objects/homepage/aboutUs";
import boundlessFaq from "./objects/homepage/boundlessFaq";
import gallery from "./documents/gallery";
import galleryType from "./documents/galleryType";

import contactUs from "./objects/homepage/contactUs";
import contactPerson from "./objects/homepage/contactPerson";
import dayWithHour from "./objects/homepage/dayWithHour";
import roomFeatures from "./objects/villa/roomFeatures";
import feature from "./objects/villa/feature";
import tag from "./documents/tag";
import idealFor from "./documents/idealFor";
import alternateName from "./documents/alternateName";
import review from "./objects/review";
import imageWithTitle from "./objects/imageWithTitle";
import maxOccupancy from "./objects/villa/maxOccupancy";

import shower from "./objects/villa/shower";
import collection from "./documents/collection";

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

    aboutUs,
    boundlessFaq,
    contactUs,
    contactPerson,
    dayWithHour,

    // SHARED DOCS
    tag,
    idealFor,
    alternateName,
    imageWithTitle,

    collection,

    post,
    category,
    author,
    resort,

    resortAccomodationType,
    resortTransferType,

    review,

    gallery,
    galleryType,

    resortHighlight,

    resortFaq,
    faqGroupTag,
    faqQuestionAnswer,

    restaurant,
    restaurantCusinesServed,
    spa,
    spaServicesOffered,
    // spaService,
    spaTreatmentType,

    spaFeaturedProductBrand,

    activity,

    villa,
    villaPoolType,

    shower,
    maxOccupancy,
    roomFeatures,
    feature,

    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,

    // restauranta,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
