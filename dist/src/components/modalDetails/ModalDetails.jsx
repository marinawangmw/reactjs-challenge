"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var ModalDetailData_1 = __importDefault(require("../modalDetailData/ModalDetailData"));
var Collection_1 = __importDefault(require("../collection/Collection"));
var material_ui_theme_1 = require("../../material-ui-theme");
require("./ModalDetails.css");
function ModalDetails(_a) {
    var item = _a.item;
    var name = item.name, image = item.image, type = item.type, gender = item.gender, species = item.species, dimension = item.dimension, residents = item.residents, episode = item.episode, characters = item.characters, air_date = item.air_date;
    var modalStyle = react_1.default.useState(material_ui_theme_1.getModalStyle)[0];
    var classes = material_ui_theme_1.useStyles();
    return (<div style={modalStyle} className={classes.paper + " modalDetails"}>

      {image &&
        <img className="modalDetails__img" src={image} alt="foto detail"/>}

      <Typography_1.default className="modalDetails__name" variant="h5" component="h6">
          {name}
      </Typography_1.default>

      <div className="modalDetails__data">

        <ModalDetailData_1.default data={episode ? air_date : type}>
          {air_date ? 'Release date:' : 'Type:'}
        </ModalDetailData_1.default>

        <ModalDetailData_1.default data={gender ? gender : dimension ? dimension : episode}>
          {gender ? 'Gender:' : dimension ? 'Dimension:' : 'Episode:'}
        </ModalDetailData_1.default>
        
        {residents || characters ?
        <div className="modalDetails__moreInfo">
            <p className="modalDetails__subtitle">
              {residents ? 'Residents' : 'Characters'}
            </p>
            
            <Collection_1.default collection={residents ? residents : characters} small/>
          </div>
        : <ModalDetailData_1.default data={species}>Species:</ModalDetailData_1.default>}
      </div>
    </div>);
}
exports.default = ModalDetails;
