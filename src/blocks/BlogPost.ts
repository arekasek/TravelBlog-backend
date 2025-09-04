import { Block } from "payload/types";

const BlogPost: Block = {
  slug: "blogPostBlock",
  labels: {
    singular: "Blog Post",
    plural: "Blog Posts",
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
    {
      name: "direction",
      label: "Direction",
      type: "select",
      options: [
        {
          label: "Default",
          value: "default",
        },
        {
          label: "Reverse",
          value: "reverse",
        },
      ],
    },
  ],
};

export default BlogPost;
