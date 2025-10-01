import { Block } from "payload/types";

const BlogTemplate: Block = {
  slug: "blogTemplate",
  labels: {
    singular: "Blog website template",
    plural: "Blog website templates",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      label: "Content",
      type: "textarea",
      required: true,
    },
    {
      name: "author",
      label: "Author",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "publishedDate",
      label: "Published Date",
      type: "date",
      required: true,
    },
  ],
};

export default BlogTemplate;
