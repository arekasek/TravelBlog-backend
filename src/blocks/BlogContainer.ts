import { Block } from "payload/types";

const BlogContainer: Block = {
  slug: "blogContainer",
  labels: {
    singular: "Blog Container",
    plural: "Blog Containers",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "items",
      type: "blocks",
      blocks: [
        {
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
              type: "text",
              label: "Heading",
            },
            {
              name: "text",
              type: "textarea",
              label: "Text",
            },
            {
              name: "sign",
              label: "Sign",
              type: "text",
            },
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
              label: "Image",
            },
            {
              name: "date",
              type: "date",
              label: "Date",
            },
          ],
        },
      ],
    },
  ],
};

export default BlogContainer;
