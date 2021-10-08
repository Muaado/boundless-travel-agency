export default {
  type: "object",
  name: "spaService",
  title: "service",
  fields: [
    {
      name: "spaService",
      type: "reference",
      to: {
        type: "spaServiceOffered",
      },
    },
    {
      title: "Service featured",
      name: "serviceFeatured",
      type: "boolean",
    },
  ],
  preview: {
    select: {
      title: "service.service",
    },
  },
};
