export default {
  name: "activity",
  type: "document",
  title: "Activity",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      title: "Resort",
      name: "resort",
      type: "reference",
      to: [{ type: "resort" }],
    },
    {
      name: "description",
      type: "bodyPortableText",
      title: "Description",
    },
    {
      name: "activityAlternateName",
      title: "Activity alternate name",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "activityAlternateName",
          },
        },
      ],
    },

    {
      name: "activityIdealFor",
      title: "Activity ideal for",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "activityIdealFor",
          },
        },
      ],
    },

    {
      name: "activityTags",
      title: "Activity tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "activityTag",
          },
        },
      ],
    },

    {
      name: "ActivitySpecialityArticlePage",
      title: "Hightlight speciality article page",
      type: "string",
    },

    {
      name: "imageMobile",
      type: "mainImage",
      title: "Activity image mobile",
    },
    {
      name: "imageWeb",
      type: "mainImage",
      title: "Activity image web",
    },
    {
      name: "imageThumb",
      type: "mainImage",
      title: "Activity image thumb",
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
