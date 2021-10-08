export default {
  name: "spaServiceOffered",
  type: "document",
  title: "Spa service offered",
  fields: [
    {
      name: "service",
      title: "Spa service",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "service",
    },
  },
};
