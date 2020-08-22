"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./MessageCard.css");
var MessageCard = function (_a) {
    var children = _a.children;
    return (<div className='messageCard'>
            <p> {children} </p>
        </div>);
};
exports.default = MessageCard;
