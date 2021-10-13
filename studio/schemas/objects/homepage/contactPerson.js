export default {
  type: "object",
  name: "contactPerson",
  title: "Contact person",
  fields: [
    {
      name: "name",
      type: "string",
      title: "name",
    },

    {
      name: "image",
      type: "mainImage",
      title: "Image",
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
