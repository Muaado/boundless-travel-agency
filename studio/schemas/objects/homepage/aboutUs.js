export default {
  type: "object",
  name: "aboutUs",
  title: "About us",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },

    {
      name: "description",
      type: "bodyPortableText",
      title: "Description",
    },
    {
      name: "image",
      type: "mainImage",
      title: "Image",
    },
  ],
  preview: {
    select: {
      title: "service.service",
    },
  },
};
