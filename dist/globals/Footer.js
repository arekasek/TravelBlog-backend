"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
exports.Footer = {
    slug: "footer",
    labels: {
        singular: "Footer",
        plural: "Footers",
    },
    access: {
        read: function () { return true; },
    },
    fields: [
        {
            name: "bottomNavLinks",
            label: "Bottom Nav Links",
            type: "array",
            fields: [
                {
                    name: "category",
                    label: "Category",
                    type: "text",
                },
                {
                    name: "links",
                    label: "Links",
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
        },
    ],
};
