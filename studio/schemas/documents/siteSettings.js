export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Short name",
    },

    {
      name: "fullName",
      type: "string",
      title: "Full name",
    },

    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe your site for search engines and social media.",
    },
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
      name: "businessHoursDescription",
      type: "string",
      title: "Business hours description",
    },

    {
      name: "promoImageMobile",
      type: "mainImage",
      title: "Promo image mobile",
    },
    {
      name: "promoImageWeb",
      type: "mainImage",
      title: "Promo image web",
    },

    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your blog.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    // {
    //   name: "author",
    //   type: "reference",
    //   description: "Publish an author and set a reference to them here.",
    //   title: "Author",
    //   to: [{ type: "author" }],
    // },
  ],
};
