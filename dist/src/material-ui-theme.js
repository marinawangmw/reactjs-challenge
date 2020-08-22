"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = exports.getModalStyle = exports.theme = void 0;
var styles_1 = require("@material-ui/core/styles");
var styles_2 = require("@material-ui/core/styles");
exports.theme = styles_1.createMuiTheme({
    palette: {
        primary: {
            main: '#00a3a6',
        }
    },
});
function getModalStyle() {
    var top = 50;
    var left = 50;
    return {
        top: top + "%",
        left: left + "%",
        transform: "translate(-" + top + "%, -" + left + "%)",
    };
}
exports.getModalStyle = getModalStyle;
exports.useStyles = styles_2.makeStyles(function (theme) { return ({
    paper: {
        position: 'absolute',
        width: 'auto',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}); });
