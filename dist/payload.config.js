"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var db_mongodb_1 = require("@payloadcms/db-mongodb");
var bundler_webpack_1 = require("@payloadcms/bundler-webpack");
var config_1 = require("payload/config");
var Users_1 = __importDefault(require("./collections/Users"));
var Media_1 = require("./collections/Media");
var Pages_1 = require("./collections/Pages");
var richtext_lexical_1 = require("@payloadcms/richtext-lexical");
var Footer_1 = require("./globals/Footer");
var Header_1 = require("./globals/Header");
var Sidebar_1 = require("./globals/Sidebar");
var mockModulePath = path_1.default.resolve(__dirname, "emptyFunction.js");
exports.default = (0, config_1.buildConfig)({
    serverURL: process.env.PAYLOAD_PUBLIC_BASE_DNS,
    admin: {
        user: Users_1.default.slug,
        bundler: (0, bundler_webpack_1.webpackBundler)(),
        webpack: function (config) { return (__assign(__assign({}, config), { resolve: __assign(__assign({}, config.resolve), { extensions: [".js", ".jsx", ".ts", ".tsx", ".json"], alias: __assign(__assign({}, config.resolve.alias), { fs: mockModulePath, stream: mockModulePath }) }) })); },
    },
    editor: (0, richtext_lexical_1.lexicalEditor)({}),
    collections: [Users_1.default, Media_1.Media, Pages_1.Pages],
    globals: [Header_1.Header, Footer_1.Footer, Sidebar_1.Sidebar],
    typescript: {
        outputFile: path_1.default.resolve(__dirname, "payload-types.ts"),
    },
    graphQL: {
        schemaOutputFile: path_1.default.resolve(__dirname, "generated-schema.graphql"),
    },
    plugins: [],
    db: (0, db_mongodb_1.mongooseAdapter)({
        url: process.env.DATABASE_URI,
    }),
});
