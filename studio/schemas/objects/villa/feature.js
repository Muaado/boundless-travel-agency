export default {
  type: "object",
  name: "roomFeature",
  title: "Room Feature",

  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Example (Features, Bathroom, Bed & Bedding, Highlights)",
    },

    {
      name: "description",
      type: "bodyPortableText",
      title: "Description",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
