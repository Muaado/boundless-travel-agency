export default {
  type: "object",
  name: "maxOccupancy",
  title: "Max occupancy options",

  fields: [
    {
      title: "Option",
      name: "option",
      type: "string",
      options: {
        list: [
          { title: "Adult(s)", value: "adults" },
          { title: "Child(ren)", value: "children" },
          { title: "Infant(s)", value: "infants" },
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
