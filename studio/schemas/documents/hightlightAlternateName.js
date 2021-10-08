export default {
  name: "highlightAlternateName",
  type: "document",
  title: "Highlight alternate name",
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
