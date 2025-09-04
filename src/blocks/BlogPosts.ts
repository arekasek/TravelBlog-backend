import { CollectionConfig } from "payload/types";

const BlogPosts: CollectionConfig = {
  slug: "blogPosts",
  labels: {
    singular: "Blog Post",
    plural: "Blog Posts",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "text",
      required: true,
    },
    {
      name: "text",
      label: "Text",
      type: "textarea",
      required: true,
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

export default BlogPosts;
