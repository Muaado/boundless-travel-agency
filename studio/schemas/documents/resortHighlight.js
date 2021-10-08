export default {
  name: "resortHighlight",
  type: "document",
  title: "Resort highlight",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "description",
      type: "bodyPortableText",
      title: "Description",
    },
    {
      name: "highlightAlternateNames",
      title: "Highlight alternate names",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "highlightAlternateNames",
          },
        },
      ],
    },

    {
      name: "highlightIdealFor",
      title: "Highlight ideal for",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "highlightIdealFor",
          },
        },
      ],
    },

    {
      name: "highlightTags",
      title: "Highlight tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "highlightTag",
          },
        },
      ],
    },

    {
      name: "highlightSpecialityArticlePage",
      title: "Hightlight speciality article page",
      type: "string",
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
    },
  },
};
