export default {
  name: "highlightAlternateNames",
  type: "document",
  title: "Highlight alternate names",
  fields: [
    {
      name: "name",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
