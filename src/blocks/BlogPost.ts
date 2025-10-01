import { Block } from "payload/types";

const BlogPost: Block = {
  slug: "blogPostBlock",
  labels: {
    singular: "Blog Post",
    plural: "Blog Posts",
  },
  fields: [
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
    },
    {
      name: "heading",
      label: "Heading",
      type: "text",
      maxLength: 30,
    },
    {
      name: "text",
      label: "Text",
      type: "text",
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "sign",
      label: "Sign",
      type: "text",
    },
  ],
};

export default BlogPost;
