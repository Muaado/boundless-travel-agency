export default {
  name: "villa",
  type: "document",
  title: "Villa",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },

    {
      name: "uniqueCode",
      type: "string",
      title: "Villa unique code",
    },

    {
      name: "active",
      type: "boolean",
      title: "Active",
    },

    {
      title: "Resort",
      name: "resort",
      type: "reference",
      to: [{ type: "resort" }],
    },

    {
      name: "heroImage",
      type: "mainImage",
      title: "Hero image",
    },

    {
      name: "imageThumb",
      type: "mainImage",
      title: "Villa image thumb",
    },

    {
      title: "Header Images",
      type: "gallery",
      name: "headerImages",
    },

    {
      name: "alternateName",
      type: "string",
      title: "Alternate name",
    },

    // {
    //   name: "featuredInNav",
    //   type: "boolean",
    //   title: "Feature villa in navigation",
    // },

    {
      name: "price",
      type: "number",
      title: "Price",
    },

    {
      name: "priceList",
      type: "priceList",
      title: "Price list",
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
      name: "short_desc",
      type: "string",
      title: "short_desc",
    },

    {
      name: "maxOccupancy",
      title: "Max occupancy options",
      type: "array",
      of: [
        {
          type: "maxOccupancy",
        },
      ],
    },

    {
      title: "Showers",
      name: "showers",
      type: "array",
      of: [{ type: "shower" }],
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
            type: "tag",
          },
        },
      ],
    },

    {
      name: "roomFeatures",
      type: "roomFeatures",
      title: "Room features",
    },

    {
      name: "hotelsApiName",
      type: "string",
      title: "Hotels api name",
      description: "Do not edit field!",
    },
    // {
    //   title: "Villa featured",
    //   name: "villaFeatured",
    //   type: "boolean",
    // },

    // {
    //   title: "Gallery",
    //   name: "gallery",
    //   type: "array",
    //   of: [
    //     {
    //       type: "gallery",
    //       // to: { type: "gallery" },
    //     },
    //   ],
    // },

    // {
    //   name: "villaAwards",
    //   title: "Villa awards",
    //   type: "array",
    //   of: [
    //     {
    //       type: "string",
    //     },
    //   ],
    // },

    // {
    //   name: "imageMobile",
    //   type: "mainImage",
    //   title: "Villa image mobile",
    // },
    // {
    //   name: "imageWeb",
    //   type: "mainImage",
    //   title: "Villa image web",
    // },
  ],
  preview: {
    select: {
      title: "name",
      // subtitle: "slug.current",
      media: "image",
    },
  },
};
