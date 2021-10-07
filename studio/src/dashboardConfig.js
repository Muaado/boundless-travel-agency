export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "615ed0547282f5158b99ea5f",
                  title: "Sanity Studio",
                  name: "boundless-travel-agency-studio-5kn98m32",
                  apiId: "dd8fc4e8-77ed-48cd-bb15-2928fde7550b",
                },
                {
                  buildHookId: "615ed054c2ba0515dfd1aaea",
                  title: "Blog Website",
                  name: "boundless-travel-agency-web",
                  apiId: "51e7579a-67d5-44ad-94da-80ad1516f75a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/dameradev/boundless-travel-agency",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://boundless-travel-agency-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
