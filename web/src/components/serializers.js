import React from "react";
import { Figure } from "./Post/Figure";

const serializers = {
  types: {
    /* eslint-disable-next-line react/display-name */
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
  },
};

export default serializers;
