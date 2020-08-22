"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("@material-ui/core/Card"));
var CardContent_1 = __importDefault(require("@material-ui/core/CardContent"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Modal_1 = __importDefault(require("@material-ui/core/Modal"));
var ModalDetails_1 = __importDefault(require("../modalDetails/ModalDetails"));
require("./Card.css");
var CardItem = function (_a) {
    var item = _a.item, small = _a.small;
    var name = item.name, image = item.image, dimension = item.dimension, episode = item.episode;
    var _b = react_1.default.useState(false), open = _b[0], setOpen = _b[1];
    var handleOpen = function () {
        if (!small) {
            setOpen(true);
            return;
        }
        ;
    };
    var handleClose = function () {
        setOpen(false);
    };
    return (<div className='card'> 
            <Card_1.default className="card__card">
                <CardContent_1.default onClick={handleOpen}>
                {image ?
        <div className={(small && 'small') + " \"card__withImage\""}>
                        <img className="card__img" src={image} alt="foto card"/>
                        <Typography_1.default className="cardwithImage__p" variant="body2" component="p">
                            {name}
                        </Typography_1.default>
                    </div>
        :
            <div className="card__noImage">
                        <Typography_1.default variant="h5" component="h2">
                            {name}
                        </Typography_1.default>
                        <Typography_1.default variant="body2" component="p">
                           {dimension ? dimension
                : episode && episode}
                        </Typography_1.default>
                    </div>}
                
                </CardContent_1.default>
            </Card_1.default>

            <Modal_1.default open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
                <ModalDetails_1.default item={item}/>
            </Modal_1.default>
    </div>);
};
exports.default = CardItem;
