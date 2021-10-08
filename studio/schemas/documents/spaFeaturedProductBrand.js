export default {
  name: "spaFeaturedProductBrand",
  type: "document",
  title: "Spa featured product brand",
  fields: [
    {
      name: "productBrand",
      title: "Product brand",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "productBrand",
    },
  },
};
