import { GlobalConfig } from "payload/types";

const Sidebar: GlobalConfig = {
  slug: "sidebar",
  label: {
    singular: "Sidebar Block",
    plural: "Sidebar Blocks",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "menuItems",
      label: "Menu Items",
      type: "array",
      fields: [
        {
          name: "icon",
          label: "Icon (square image)",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "link",
          label: "Link",
          type: "text",
        },
        {
          name: "text",
          label: "Text",
          type: "text",
        },
      ],
    },
  ],
};

export default Sidebar;
