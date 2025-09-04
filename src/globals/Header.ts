import { GlobalConfig } from "payload/types";

const Header: GlobalConfig = {
  slug: "header",
  label: {
    singular: "Header",
    plural: "Headers",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "logo",
      label: "Logo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "navLinks",
      label: "Nav Links",
      type: "array",
      fields: [
        {
          name: "label",
          label: "Label",
          type: "text",
        },
        {
          name: "link",
          label: "Link",
          type: "text",
        },
      ],
    },
  ],
};

export default Header;
