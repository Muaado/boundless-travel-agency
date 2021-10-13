export default {
  type: "object",
  name: "contactUs",
  title: "Contact us",
  fields: [
    {
      name: "address",
      type: "string",
      title: "Address",
    },

    {
      name: "email",
      type: "string",
      title: "Email",
    },

    {
      name: "phoneOne",
      type: "string",
      title: "Phone one",
    },

    {
      name: "phoneTwo",
      type: "string",
      title: "Phone two",
    },

    {
      title: "Contact people",
      name: "contactPeople",
      type: "array",
      of: [
        {
          type: "contactPerson",
        },
      ],
    },

    {
      name: "hours",
      title: "Working time",
      type: "array",
      of: [
        {
          type: "dayWithHour",
        },
      ],
    },

    {
      name: "businessHoursDescription",
      type: "string",
      title: "Business hours description",
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
