export default {
  // type of rooms(villa)
  name: "collection",
  type: "document",
  title: "Collection",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Collection Name",
    },
    {
      name: "rank",
      type: "number",
      title: "Rank",
    },

    {
      name: "type",
      title: "Type",
      type: "reference",
      to: [{ type: "collectionType" }],
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
      name: "resorts",
      title: "Resorts",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "resort",
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
      name: "imageMobile",
      type: "mainImage",
      title: "Collection image mobile",
    },
    {
      name: "imageWeb",
      type: "mainImage",
      title: "Collection image web",
    },
    {
      name: "imageThumb",
      type: "mainImage",
      title: "Collection image thumb",
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
