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
      name: "description",
      type: "bodyPortableText",
      title: "Description",
    },
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
