"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sidebar = void 0;
exports.Sidebar = {
    slug: "sidebar",
    labels: {
        singular: "Sidebar Block",
        plural: "Sidebar Blocks",
    },
    access: {
        read: function () { return true; },
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
