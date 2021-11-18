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
      name: "logo",
      type: "mainImage",
      title: "Boundless logo",
    },

    {
      name: "mobileLogo",
      type: "mainImage",
      title: "Boundless mobile logo",
    },

    {
      name: "fullName",
      type: "string",
      title: "Full name",
    },

    // {
    //   type: "string",
    //   name: "videoURL",
    //   description: "Url for homepage video",
    // },

    {
      type: "mux.video",
      name: "video",
      description: "Video",
    },
    {
      name: "mobileHeroImage",
      type: "mainImage",
      description: "Mobile hero image for homepage",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe your site for search engines and social media.",
    },

    {
      name: "handCraftedJourneys",
      title: "Hand crafted journeys images",
      type: "array",
      of: [
        {
          type: "imageWithTitle",
        },
      ],
    },

    {
      name: "headerDropdownImage",
      type: "mainImage",
      title: "Header dropdown image",
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
      title: "Homepage bottom image",
    },

    {
      name: "collectionPageImage",
      type: "mainImage",
      title: "Collection page image",
    },

    {
      name: "magazinePageImage",
      type: "mainImage",
      title: "Magazine page image",
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
      name: "faq",
      type: "array",
      of: [{ type: "faq" }],
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
