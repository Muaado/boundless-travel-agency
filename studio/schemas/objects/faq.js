export default {
  name: "faq",
  type: "object",
  title: "FAQ",
  fields: [
    {
      name: "name",
      type: "string",
    },
    // {
    //   title: "Resort",
    //   name: "resort",
    //   type: "reference",
    //   to: [{ type: "resort" }],
    // },
    {
      name: "description",
      type: "string",
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
  // preview: {
  //   select: {
  //     title: "FAQ",
  //   },
  // },
};
