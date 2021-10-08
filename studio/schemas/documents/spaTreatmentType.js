export default {
  name: "spaTreatmentType",
  type: "document",
  title: "Spa treatment type",
  fields: [
    {
      name: "treatment",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "treatment",
    },
  },
};
