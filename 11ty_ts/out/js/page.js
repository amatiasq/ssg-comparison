"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.page = void 0;
const server_1 = require("react-dom/server");
const page = (jsx) => () => (0, server_1.renderToStaticMarkup)(jsx);
exports.page = page;
