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
      name: "promoImageMobile",
      type: "mainImage",
      title: "Promo image mobile",
    },

    {
      name: "whyBoundlessImage",
      type: "mainImage",
      title: "Why travel boundless image",
    },

    {
      name: "secondImage",
      type: "mainImage",
      title: "Second image",
    },

    {
      name: "promoImageWeb",
      type: "mainImage",
      title: "Promo image web",
    },

    {
      name: "aboutUs",
      type: "aboutUs",
      // to: [{ type: "aboutUs" }],
    },
    {
      name: "FAQ",
      type: "boundlessFaq",
      // to: [{ type: "aboutUs" }],
    },

    {
      name: "newsLetterTitle",
      title: "Newsletter title",
      type: "string",
    },

    {
      name: "newsLetterBackground",
      type: "mainImage",
      title: "Newsletter Background",
    },

    {
      name: "contactUs",
      type: "contactUs",
      title: "Contact us",
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
