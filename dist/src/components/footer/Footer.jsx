"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Footer.css");
var Footer = function () {
    var date = new Date().toLocaleDateString();
    return (<div className="footer">
            <div className="footer__name">
                <p>Marina Wang</p>
            </div>
            <div className="footer__date">
                <p>{date}</p>
            </div>
        </div>);
};
exports.default = Footer;
