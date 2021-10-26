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

async function createVillaPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityVilla {
        nodes {
          _id
          name
          resort {
            _id
            name
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const villaEdges = (result.data.allSanityVilla || {}).nodes || [];

  villaEdges.forEach((node) => {
    const { _id, name, resort } = node;

    console.log(node);

    let path;
    if (typeof name === "string" && resort) {
      path = `/${resort.name.toLowerCase().split(" ").join("-")}/${name
        .toLowerCase()
        .split(" ")
        .join("-")}`;
    }

    if (path)
      createPage({
        path,
        component: require.resolve("./src/templates/villa.js"),
        context: { id: _id, resortId: resort._id },
      });
  });
}

async function createCollectionPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityCollection {
        nodes {
          name
          _id
          type {
            type
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const collectionNodes = (result.data.allSanityCollection || {}).nodes || [];

  const types = [];
  collectionNodes.forEach((collection) => {
    const typeAdded = types.find((value) => value === collection.type.type);
    if (!typeAdded) types.push(collection.type.type);
  });

  types
    // .filter((edge) => !isFuture(new Date(edge.node.publishedAt)))
    .forEach((type) => {
      // const { _id, name } = node;
      // const dateSegment = format(new Date(publishedAt), "yyyy/MM");

      let path;
      // if (typeof name === "string") {
      path = `collection/${type}`;
      // }
      // console.log(path, "path");

      if (path)
        createPage({
          path,
          component: require.resolve("./src/templates/collection.js"),
          context: { type },
        });
    });
}

async function createRestaurantPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityRestaurant {
        nodes {
          _id
          name
          resort {
            _id
            name
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const restaurantNodes = (result.data.allSanityRestaurant || {}).nodes || [];

  restaurantNodes.forEach((node) => {
    const { _id, name, resort } = node;

    let path;
    if (typeof name === "string" && resort) {
      path = `/${resort.name
        .toLowerCase()
        .split(" ")
        .join("-")}/restaurant/${name.toLowerCase().split(" ").join("-")}`;
    }

    if (path)
      createPage({
        path,
        component: require.resolve("./src/templates/restaurant.js"),
        context: { id: _id, resortId: resort._id },
      });
  });
}

async function createActivityPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityActivity {
        nodes {
          _id
          name
          resort {
            _id
            name
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const activityNodes = (result.data.allSanityActivity || {}).nodes || [];

  activityNodes.forEach((node) => {
    const { _id, name, resort } = node;

    let path;
    if (typeof name === "string" && resort) {
      path = `/${resort.name.toLowerCase().split(" ").join("-")}/activity/${name
        .toLowerCase()
        .split(" ")
        .join("-")}`;
    }

    if (path)
      createPage({
        path,
        component: require.resolve("./src/templates/activity.js"),
        context: { id: _id, resortId: resort._id },
      });
  });
}

async function createHighlightPage(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityResortHighlight {
        nodes {
          _id
          name
          resort {
            _id
            name
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const highlightNodes =
    (result.data.allSanityResortHighlight || {}).nodes || [];

  console.log(highlightNodes, "nodes highlihgts");

  highlightNodes.forEach((node) => {
    const { _id, name, resort } = node;

    let path;
    if (typeof name === "string" && resort) {
      path = `/${resort.name
        .toLowerCase()
        .split(" ")
        .join("-")}/highlight/${name.toLowerCase().split(" ").join("-")}`;
    }

    if (path)
      createPage({
        path,
        component: require.resolve("./src/templates/highlight.js"),
        context: { id: _id, resortId: resort._id },
      });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createResortPages(graphql, actions);
  await createVillaPages(graphql, actions);
  await createCollectionPages(graphql, actions);
  await createRestaurantPages(graphql, actions);
  await createActivityPages(graphql, actions);
  await createBlogPostPages(graphql, actions);
  await createHighlightPage(graphql, actions);
};
