const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require("date-fns");

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];

  postEdges
    .filter((edge) => !isFuture(new Date(edge.node.publishedAt)))
    .forEach((edge) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(new Date(publishedAt), "yyyy/MM");
      const path = `/blog/${dateSegment}/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/blog-post.js"),
        context: { id },
      });
    });
}

async function createResortPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityResort {
        nodes {
          name
          _id
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const resortEdges = (result.data.allSanityResort || {}).nodes || [];

  console.log(result.data.allSanityResort);
  resortEdges
    // .filter((edge) => !isFuture(new Date(edge.node.publishedAt)))
    .forEach((node) => {
      const { _id, name } = node;
      // const dateSegment = format(new Date(publishedAt), "yyyy/MM");

      let path;
      if (typeof name === "string") {
        path = `/${name.toLowerCase().split(" ").join("-")}`;
      }
      // console.log(path, "path");

      if (path)
        createPage({
          path,
          component: require.resolve("./src/templates/resort.js"),
          context: { id: _id },
        });
    });
}

exports.createPages = async ({ graphql, actions }) => {
  // await createBlogPostPages(graphql, actions);

  console.log("here");
  await createResortPages(graphql, actions);
};
