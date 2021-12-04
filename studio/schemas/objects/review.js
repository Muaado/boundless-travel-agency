export default {
  name: "review",
  type: "object",
  title: "Review",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
