"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
exports.Header = {
    slug: "header",
    labels: {
        singular: "Header",
        plural: "Headers",
    },
    access: {
        read: function () { return true; },
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
