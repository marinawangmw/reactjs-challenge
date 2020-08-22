"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Sidebar_1 = __importDefault(require("../../components/sidebar/Sidebar"));
var Body_1 = __importDefault(require("../../components/body/Body"));
var Footer_1 = __importDefault(require("../../components/footer/Footer"));
require("./Homepage.css");
var Homepage = function () {
    return (<div className='homepage'>
            <div className="homepage__body">
                <Sidebar_1.default />
                <Body_1.default />
            </div>
                <Footer_1.default />
        </div>);
};
exports.default = Homepage;
