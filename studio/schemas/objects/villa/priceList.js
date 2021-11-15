export default {
  type: "document",
  name: "priceList",
  title: "List of prices by month",

  fields: [
    {
      title: "Month",
      name: "month",
      type: "string",
      options: {
        list: [
          { title: "January", value: "0" },
          { title: "February", value: "1" },
          { title: "March", value: "2" },
          { title: "April", value: "3" },
          { title: "May", value: "4" },
          { title: "June", value: "5" },
          { title: "July", value: "6" },
          { title: "August", value: "7" },
          { title: "September", value: "8" },
          { title: "October", value: "9" },
          { title: "November", value: "10" },
          { title: "December", value: "11" },
        ],
      },
    },
    {
      title: "Price",
      name: "price",
      type: "number",
    },

    {
      title: "Villa",
      name: "villa",
      type: "reference",
      to: [{ type: "villa" }],
    },
  ],
  preview: {
    select: {
      title: "month",
    },
  },
};
