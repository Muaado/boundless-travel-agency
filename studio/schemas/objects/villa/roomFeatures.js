export default {
  type: "object",
  name: "roomFeatures",
  title: "Room features",
  fields: [
    {
      name: "backgroundImage",
      type: "mainImage",
      title: "Background image",
    },
    {
      name: "features",
      title: "Features list",
      type: "array",
      of: [
        {
          type: "roomFeature",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "service.service",
    },
  },
};
