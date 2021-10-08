export default {
  // type of rooms(villa)
  name: "villasCollection",
  type: "document",
  title: "Villas Collection",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Collection Name",
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
