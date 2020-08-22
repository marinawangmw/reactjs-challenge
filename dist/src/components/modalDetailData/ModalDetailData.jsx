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
require("./ModalDetailData.css");
var ModalDetailData = function (_a) {
    var children = _a.children, otherProp = __rest(_a, ["children"]);
    console.log(otherProp);
    return (<div>
            <div className="modalDetailData">
                <p className="modalDetailData__subtitle">
                    {children} &#160;
                </p>
                
                <p className="modalDetailData__detail">     
                    {otherProp.data ?
        "" + otherProp.data
        : 'None'} 
                </p>
          </div>
        </div>);
};
exports.default = ModalDetailData;