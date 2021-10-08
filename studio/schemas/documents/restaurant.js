export default {
  name: "Restaurant",
  type: "document",
  title: "Restaurant",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "alternateName",
      type: "string",
      title: "Alternate name",
    },

    {
      name: "tagline",
      type: "string",
      title: "Tagline",
    },

    {
      name: "description",
      type: "bodyPortableText",
      title: "Description",
    },

    {
      name: "imageMobile",
      type: "mainImage",
      title: "Restaurant image mobile",
    },
    {
      name: "imageWeb",
      type: "mainImage",
      title: "Restaurant image web",
    },
    {
      name: "imageThumb",
      type: "mainImage",
      title: "Restaurant image thumb",
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
