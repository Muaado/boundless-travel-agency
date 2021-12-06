export default {
  name: "spa",
  type: "document",
  title: "Spa",
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
      title: "Tagline",
    },

    {
      title: "Spa featured",
      name: "spaFeatured",
      type: "boolean",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },

    // {
    //   name: "spaAwardsAndHonors",
    //   title: "Spa awards and honors",
    //   type: "array",
    //   of: [
    //     {
    //       type: "string",
    //     },
    //   ],
    // },

    // {
    //   name: "spaServicesOffered",
    //   title: "Spa services offered",
    //   type: "array",
    //   of: [{ type: "spaService" }],
    // },

    // {
    //   name: "spaTreatmentTypes",
    //   title: "Spa treatment types",
    //   type: "array",
    //   of: [
    //     {
    //       type: "reference",
    //       to: {
    //         type: "spaTreatmentType",
    //       },
    //     },
    //   ],
    // },
    // {
    //   name: "spaTags",
    //   title: "Spa tags",
    //   type: "array",
    //   of: [
    //     {
    //       type: "reference",
    //       to: {
    //         type: "tag",
    //       },
    //     },
    //   ],
    // },
    // {
    //   name: "spaFeaturedProductBrands",
    //   title: "Spa featured product brands",
    //   type: "array",
    //   of: [
    //     {
    //       type: "reference",
    //       to: {
    //         type: "spaFeaturedProductBrand",
    //       },
    //     },
    //   ],
    // },
    // {
    //   name: "imageMobile",
    //   type: "mainImage",
    //   title: "Spa image mobile",
    // },
    {
      name: "imageWeb",
      type: "mainImage",
      title: "Spa image web",
    },
    {
      name: "imageThumb",
      type: "mainImage",
      title: "Spa image thumb",
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
