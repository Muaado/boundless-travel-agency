export default {
  type: "object",
  name: "dayWithHour",
  title: "Day(s) with hours",
  fields: [
    {
      type: "string",
      name: "days",
      title: "Day(s)",
      description: "Format: 'Friday' or 'Monday to Friday'",
    },
    {
      type: "string",
      name: "hours",
      title: "Hours",
      description:
        "Format: '6:00 am - 1:00am' (please be careful with spacing, this is what you write is what you get)",
    },
  ],
  preview: {
    select: {
      title: "days",
    },
  },
};
