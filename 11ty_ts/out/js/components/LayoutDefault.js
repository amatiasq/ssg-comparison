"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function BaseWrapper({ children }) {
    return children;
}
exports.default = ({ children }) => (react_1.default.createElement("div", { className: "LayoutDefault" },
    react_1.default.createElement("main", null, children),
    react_1.default.createElement("footer", { className: "LayoutDefault__footer" },
        react_1.default.createElement(BaseWrapper, null, " \u00A9 Markus Oberlehner "))));
