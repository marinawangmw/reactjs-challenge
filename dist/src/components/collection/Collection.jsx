"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("../card/Card"));
require("./Collection.css");
var Collection = function (_a) {
    var collection = _a.collection, small = _a.small;
    return (<div className='collection'>

        {collection.length >= 1 &&
        !collection[0].name ?
        <p className="collection__errorMessage"> None </p>
        : collection
            .filter(function (item, idx) {
            if (small) {
                return idx < 5;
            }
            return item;
        })
            .map(function (item) { return (<Card_1.default key={item.id} item={item} small={small}/>); })}
        </div>);
};
exports.default = Collection;
