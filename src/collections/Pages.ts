import SimpleRichText from "../blocks/SimpleRichText";
import PricingBlock from "../blocks/PricingBlock";
import BlogPost from "../blocks/BlogPost";
import { CollectionConfig } from "payload/types";
import TwoColumnBlogBlock from "../blocks/TwoColumnBlogBlock";
import MainBlock from "../blocks/MainBlock";

const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Page",
    plural: "Pages",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: [
        PricingBlock,
        BlogPost,
        SimpleRichText,
        TwoColumnBlogBlock,
        MainBlock,
      ],
    },
  ],
};

export default Pages;
