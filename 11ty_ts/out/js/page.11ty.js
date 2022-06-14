"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.data = void 0;
// src/page.11ty.js
const react_1 = __importDefault(require("react"));
const util_1 = require("./util");
exports.data = {
    title: 'Setting up Eleventy with Preact and htm',
    // layout: 'layout.njk',
    // pagination: {
    //   data: 'pages',
    //   size: 1,
    //   alias: 'page',
    //   addAllPagesToCollections: true,
    // },
    // permalink: ({ page }: any) => `/${page.slug}/index.html`,
};
exports.render = (0, util_1.page)(react_1.default.createElement(react_1.default.Fragment, null, "POTATO5"));
