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
      title: "Resort",
      name: "resort",
      type: "reference",
      to: [{ type: "resort" }],
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
      name: "numberOfRooms",
      type: "number",
      title: "Number of rooms",
    },

    {
      title: "Villa featured",
      name: "villaFeatured",
      type: "boolean",
    },

    {
      name: "villaAwards",
      title: "Villa awards",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },

    {
      name: "villaPoolTypes",
      title: "Villa pool types",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "villaPoolType",
          },
        },
      ],
    },

    {
      name: "villaTags",
      title: "Villa tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "villaTag",
          },
        },
      ],
    },

    {
      name: "imageMobile",
      type: "mainImage",
      title: "Villa image mobile",
    },
    {
      name: "imageWeb",
      type: "mainImage",
      title: "Villa image web",
    },
    {
      name: "imageThumb",
      type: "mainImage",
      title: "Villa image thumb",
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
