export default {
  name: "gallery",
  type: "object",
  title: "Gallery",
  fields: [
    {
      name: "name",
      type: "string",
      title: "name",
    },
    {
      name: "type",
      type: "reference",
      title: "Type",
      to: [{ type: "galleryType" }],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "mainImage",
          // to: {
          //   type: "mainImage",
          // },
        },
      ],
    },
    // {
    //   name: "description",
    //   type: "text",
    //   title: "Description",
    // },
  ],
};
