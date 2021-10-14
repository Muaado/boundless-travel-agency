export default {
  name: "alternateName",
  type: "document",
  title: "Alternate name (highlight, activity)",
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
