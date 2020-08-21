import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import ModalDetails from '../modalDetails/ModalDetails';
import './Card.css';

const CardItem = ({ name, image, ...otherProps }) => {
    console.log(otherProps.dimension, otherProps.episode)

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
    setOpen(false);
    };

    return (
        <div className="card"> 
            <Card className="card__card">
                <CardContent onClick={handleOpen}>
                {
                image?
                    <div className="card__withImage">
                        <img className="card__img" src={image} alt="foto card"/>
                        <Typography className="cardwithImage__p" variant="body2" component="p">
                            {name}
                        </Typography>
                    </div>
                :  
                    <div className="card__noImage">
                        <Typography variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" component="p">
                           {otherProps.dimension? otherProps.dimension :
                            otherProps.episode && otherProps.episode}
                        </Typography>
                    </div>
                }
                
                </CardContent>
            </Card>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                <ModalDetails />
            </Modal>

            
                
            
        </div>
  );
}

export default CardItem;