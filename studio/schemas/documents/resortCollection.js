export default {
  name: "resortCollection",
  type: "document",
  title: "Resort Collection",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Collection Name",
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
