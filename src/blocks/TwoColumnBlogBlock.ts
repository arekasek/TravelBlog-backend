import { Block } from "payload/types";

const TwoColumnBlogBlock: Block = {
  slug: "twoColumnBlog",
  labels: {
    singular: "Two Column Blog",
    plural: "Two Column Blogs",
  },
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "text",
    },
    {
      name: "text",
      label: "Text",
      type: "textarea",
    },
    {
      name: "menuTitle",
      label: "Menu Title",
      type: "text",
      required: true,
    },
    {
      name: "menuItems",
      label: "Menu Items",
      type: "array",
      minRows: 1,
      fields: [
        { name: "title", type: "text", required: true },
        { name: "link", type: "text", required: true },
      ],
    },
  ],
};

export default TwoColumnBlogBlock;
