export default {
  name: "imageWithTitle",
  type: "object",
  title: "Image with title and description",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      type: "mainImage",
      title: "Image",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
