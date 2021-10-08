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
      title: "Halal available",
      name: "halalAvailable",
      type: "boolean",
    },

    {
      title: "Restaurant featured",
      name: "restaurantFeatured",
      type: "boolean",
    },
    {
      name: "restaurantCuisinesServed",
      title: "Restaurant cuisines served",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "restaurantCuisinesServed",
          },
        },
      ],
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
