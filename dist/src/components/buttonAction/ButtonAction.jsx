"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./ButtonAction.css");
var material_ui_theme_1 = require("../../material-ui-theme");
var styles_1 = require("@material-ui/styles");
var core_1 = require("@material-ui/core");
var ButtonAction = function (_a) {
    var children = _a.children, handleClick = _a.handleClick, otherProps = __rest(_a, ["children", "handleClick"]);
    return (<div>
            <styles_1.ThemeProvider theme={material_ui_theme_1.theme}>
                <core_1.IconButton variant='contained' color='primary' onClick={handleClick} {...otherProps}>
                    {children}
                </core_1.IconButton>
            </styles_1.ThemeProvider>
        </div>);
};
exports.default = ButtonAction;
