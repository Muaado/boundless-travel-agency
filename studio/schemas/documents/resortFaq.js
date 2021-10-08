export default {
  name: "resortFaq",
  type: "document",
  title: "Resort FAQ",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "description",
      type: "bodyPortableText",
      title: "Description",
    },
    {
      name: "faqQuestionsAnswers",
      type: "array",
      of: [
        {
          type: "faqQuestionAnswer",
        },
      ],
    },
    {
      name: "faqGroupTags",
      title: "FAQ group tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "faqGroupTag",
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
