import { format, isFuture } from "date-fns";

export function cn(...args) {
  return args.filter(Boolean).join(" ");
}

export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map((edge) => edge.node);
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current;
}

export function filterOutDocsPublishedInTheFuture({ publishedAt }) {
  return !isFuture(new Date(publishedAt));
}

export function getBlogUrl(publishedAt, slug) {
  return `/blog/${format(new Date(publishedAt), "yyyy/MM")}/${
    slug.current || slug
  }/`;
}

export function buildImageObj(source = { asset: {} }) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}

export function toPlainText(blocks) {
  if (!blocks) {
    return "";
  }
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return "";
      }
      return block.children.map((child) => child.text).join("");
    })
    .join("\n\n");
}

export const getResortUrl = ({ name }) => {
  return `/${name.toLowerCase().split(" ").join("-")}`;
};

export const getVillaUrl = ({ name, resortName }) => {
  return `/${resortName.toLowerCase().split(" ").join("-")}/${name
    .toLowerCase()
    .split(" ")
    .join("-")}`;
};
export const getRestaurantUrl = ({ name, resortName }) => {
  return `/${resortName.toLowerCase().split(" ").join("-")}/restaurant/${name
    .toLowerCase()
    .split(" ")
    .join("-")}`;
};
export const getActivityUrl = ({ name, resortName }) => {
  return `/${resortName.toLowerCase().split(" ").join("-")}/activity/${name
    .toLowerCase()
    .split(" ")
    .join("-")}`;
};

export const getHighlightUrl = ({ name, resortName }) => {
  return `/${resortName.toLowerCase().split(" ").join("-")}/highlight/${name
    .toLowerCase()
    .split(" ")
    .join("-")}`;
};

export const getCollectionUrl = ({ name, type }) => {
  return `/collection/${type.type}#${
    type.type === "villa" ? name.toLowerCase().split(" ").join("-") : ""
  }`;
};
