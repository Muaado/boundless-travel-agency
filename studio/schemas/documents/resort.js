export default {
  name: "resort",
  type: "document",
  title: "Resort",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },

    {
      name: "locationFull",
      type: "string",
      title: "Location full",
    },

    {
      name: "locationAtoll",
      type: "string",
      title: "Location Atoll",
    },

    {
      name: "image",
      type: "mainImage",
      title: "Image",
    },
    {
      name: "secondImage",
      type: "mainImage",
      title: "Second image",
    },
    {
      name: "description",
      type: "bodyPortableText",
      title: "Description",
    },

    /* text, name, country source (Reviews) */
    {
      name: "accomodationDescription",
      type: "bodyPortableText",
      title: "Accomodation description",
    },
    {
      name: "bottomLineDescription",
      type: "bodyPortableText",
      title: "Bottom line description",
    },

    {
      name: "numberOfRooms",
      type: "number",
      title: "Number of rooms",
    },

    {
      name: "numberOfRestaurants",
      type: "number",
      title: "Number of restaurants",
    },

    {
      name: "numberOfBars",
      type: "number",
      title: "Number of bars",
    },

    {
      name: "roomVoltage",
      type: "number",
      title: "Resort room voltage",
    },

    {
      name: "timeToAirport",
      type: "string",
      title: "Time to airport",
    },

    {
      title: "Gallery",
      name: "gallery",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "gallery" },
        },
      ],
    },

    {
      title: "Reviews",
      name: "reviews",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "review" },
        },
      ],
    },

    {
      name: "restaurants",
      title: "Restaurants",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "restaurant",
          },
        },
      ],
    },

    {
      name: "villas",
      title: "Villas",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "villa",
          },
        },
      ],
    },

    {
      name: "spas",
      title: "Spas",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "spa",
          },
        },
      ],
    },

    {
      name: "resortTransferType",
      title: "Resort transfer type",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "resortTransferType",
          },
        },
      ],
    },
    {
      name: "resortTags",
      title: "Resort tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "resortTag",
          },
        },
      ],
    },
    {
      name: "resortAccomodationType",
      title: "Resort accomodation type",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "resortAccomodationType",
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      // subtitle: "slug.current",
      media: "image",
    },
  },
};
