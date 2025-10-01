import SimpleRichText from "../blocks/SimpleRichText";
import PricingBlock from "../blocks/PricingBlock";
import BlogPost from "../blocks/BlogPost";
import { CollectionConfig } from "payload/types";
import MainBlock from "../blocks/MainBlock";
import BlogContainer from "../blocks/BlogContainer";
import BlogTemplate from "../blocks/BlogTemplate";

const Pages: CollectionConfig = {
  slug: "pages",
  labels: { singular: "Page", plural: "Pages" },
  access: { read: () => true },
  fields: [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "slug", label: "Slug", type: "text", required: true },
    {
      name: "pageType",
      label: "Page Type",
      type: "select",
      required: true,
      defaultValue: "standard",
      options: [
        { label: "Standard Page", value: "standard" },
        { label: "Blog Page", value: "blog" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: [
        PricingBlock,
        BlogPost,
        SimpleRichText,
        MainBlock,
        BlogContainer,
      ],
      admin: {
        condition: (data) => data.pageType === "standard",
      },
    },
    {
      name: "blogLayout",
      label: "Blog Layout",
      type: "blocks",
      blocks: [BlogTemplate],
      admin: {
        condition: (data) => data.pageType === "blog",
      },
    },
  ],
};

export default Pages;
