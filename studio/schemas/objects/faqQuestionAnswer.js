export default {
  name: "faqQuestionAnswer",
  type: "object",
  title: "FAQ question/answer",
  fields: [
    {
      name: "question",
      type: "string",
    },
    {
      name: "answer",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "question",
    },
  },
};
