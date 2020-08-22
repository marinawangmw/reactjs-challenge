import React from 'react';
import Typography from '@material-ui/core/Typography';
import ModalDetailData from '../modalDetailData/ModalDetailData';
import Collection from '../collection/Collection';
import { makeStyles } from '@material-ui/core/styles';
import './ModalDetails.css'

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalDetails({ item }) {

  const { name, 
          image, 
          type, 
          gender, 
          species, 
          dimension, 
          residents, 
          episode, 
          characters, 
          created } = item

  const classes = useStyles()
  const [modalStyle] = React.useState(getModalStyle);
  
  return (
    <div style={modalStyle} className={`${classes.paper} modalDetails`} >

      { 
        image &&
          <img className="modalDetails__img" src={image} alt="foto detail"/>
      }

      <Typography className="modalDetails__name" variant="h5" component="h6">
          {name}
      </Typography>

      <div className="modalDetails__data">

        <ModalDetailData data={episode? created: type}>
          {created? 'Release date:': 'Type:' }
        </ModalDetailData>

        <ModalDetailData data={gender? gender: dimension? dimension: episode}>
          {gender? 'Gender:': dimension? 'Dimension:': 'Episode:'}
        </ModalDetailData>
        
        {
          residents || characters ?
          <div className="modalDetails__moreInfo">
            <p className="modalDetails__subtitle">
              {residents? 'Residents' :'Characters'}
            </p>
            
            <Collection 
                collection={residents?residents: characters} 
                small/>
          </div>

          : <ModalDetailData data={species}>Species:</ModalDetailData>
        }
      </div>
    </div>
  );
}