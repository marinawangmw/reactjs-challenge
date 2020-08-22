"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Homepage_1 = __importDefault(require("./pages/Home/Homepage"));
require("./App.css");
function App() {
    return (<div className="App">
      <Homepage_1.default />
    </div>);
}
exports.default = App;
