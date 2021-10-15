export default {
  type: "object",
  name: "shower",
  title: "Shower",

  fields: [
    {
      title: "Option",
      name: "option",
      type: "string",
      options: {
        list: [
          { title: "Indoor shower", value: "indoorShower" },
          { title: "Outdoor shower", value: "outdoorShower" },
        ],
      },
    },
    {
      title: "Number",
      name: "number",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "option",
    },
  },
};
