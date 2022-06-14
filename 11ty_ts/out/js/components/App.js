"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const LayoutDefault_1 = __importDefault(require("./LayoutDefault"));
const sections = {
// content: require('./SectionContent'),
// hero: require('./SectionHero'),
// teaser: require('./SectionTeaser'),
};
exports.default = ({ page }) => (react_1.default.createElement(LayoutDefault_1.default, null,
    react_1.default.createElement("div", { className: "App" }, page.sections.map(({ data, name }) => {
        const Component = sections[name];
        return react_1.default.createElement(Component, { data: data });
    }))));
