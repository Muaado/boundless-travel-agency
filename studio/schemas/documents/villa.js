export default {
  name: "Villa",
  type: "document",
  title: "Villa",
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
      title: "Tag line",
    },

    {
      name: "description",
      type: "bodyPortableText",
      title: "Description",
    },

    {
      name: "sizeSqm",
      type: "number",
      title: "Size in sqm",
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
