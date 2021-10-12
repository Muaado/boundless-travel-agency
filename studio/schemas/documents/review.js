export default {
  name: "review",
  type: "document",
  title: "Review",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      type: "bodyPortableText",
      title: "Description",
    },

    // {
    //   title: "Resort",
    //   name: "resort",
    //   type: "reference",
    //   to: [{ type: "resort" }],
    // },

    // {
    //   title: "Villa",
    //   name: "villa",
    //   type: "reference",
    //   to: [{ type: "villa" }],
    // },

    // {
    //   title: "Spa",
    //   name: "spa",
    //   type: "reference",
    //   to: [{ type: "spa" }],
    // },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
