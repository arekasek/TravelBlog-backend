import { Block } from "payload/types";

const MainBlock: Block = {
  slug: "mainBlock",
  labels: {
    singular: "Main Block",
    plural: "Main Blocks",
  },
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "text",
      maxLength: 30,
    },
    {
      name: "text",
      label: "Text",
      type: "textarea",
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default MainBlock;
