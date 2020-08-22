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
require("./InputField.css");
var material_ui_theme_1 = require("../../material-ui-theme");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/styles");
var InputField = function (_a) {
    var label = _a.label, handleChange = _a.handleChange, value = _a.value, otherProps = __rest(_a, ["label", "handleChange", "value"]);
    return (<div className='inputField'>
        <styles_1.ThemeProvider theme={material_ui_theme_1.theme}>
            <core_1.TextField onChange={handleChange} label={label} value={value} id="outlined-basic" variant="outlined" size="small" color='primary' {...otherProps}/>
        </styles_1.ThemeProvider>
        </div>);
};
exports.default = InputField;
