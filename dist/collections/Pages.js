"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pages = void 0;
var SimpleRichText_1 = require("../blocks/SimpleRichText");
var PricingBlock_1 = require("../blocks/PricingBlock");
var BlogPost_1 = require("../blocks/BlogPost");
exports.Pages = {
    slug: "pages",
    labels: {
        singular: "Page",
        plural: "Pages",
    },
    access: {
        read: function () { return true; },
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
            blocks: [PricingBlock_1.PricingBlock, BlogPost_1.BlogPost, SimpleRichText_1.SimpleRichText],
        },
    ],
};
