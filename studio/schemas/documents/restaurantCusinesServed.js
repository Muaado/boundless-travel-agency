export default {
  name: "restaurantCuisinesServed",
  type: "document",
  title: "Restaurant cuisines served",
  fields: [
    {
      name: "cuisine",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "cuisine",
    },
  },
};
