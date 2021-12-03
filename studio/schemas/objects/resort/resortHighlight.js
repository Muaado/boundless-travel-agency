export default {
  name: "resortHighlight",
  type: "object",
  title: "Resort highlight",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      title: "Resort",
      name: "resort",
      type: "reference",
      to: [{ type: "resort" }],
    },
    // {
    //   name: "highlightAlternateName",
    //   title: "Highlight alternate name",
    //   type: "array",
    //   of: [
    //     {
    //       type: "reference",
    //       to: {
    //         type: "alternateName",
    //       },
    //     },
    //   ],
    // },

    // {
    //   name: "highlightIdealFor",
    //   title: "Highlight ideal for",
    //   type: "array",
    //   of: [
    //     {
    //       type: "reference",
    //       to: {
    //         type: "idealFor",
    //       },
    //     },
    //   ],
    // },

    // {
    //   name: "highlightTags",
    //   title: "Highlight tags",
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
    //   name: "highlightSpecialityArticlePage",
    //   title: "Hightlight speciality article page",
    //   type: "string",
    // },

    // {
    //   name: "imageMobile",
    //   type: "mainImage",
    //   title: "Highlight image mobile",
    // },
    // {
    //   name: "imageWeb",
    //   type: "mainImage",
    //   title: "Highlight image web",
    // },
    {
      name: "imageThumb",
      type: "mainImage",
      title: "Highlight image thumb",
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
