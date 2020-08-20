import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Card.css';

const CardItem = ({ item }) => {
    console.log(item.image);
    return (
        <div className="card"> 
            <Card className="card__card">
                <CardContent >
                    {
                    item.image?
                        <div className="card__withImage">
                            <img className="card__img" src={item.image} alt="card image"/>
                            <Typography className="cardwithImage__p" variant="body2" component="p">
                                {item.name}
                            </Typography>
                        </div>
                    :  
                        <div className="card__noImage">
                            <Typography variant="h5" component="h2">
                                {item.name}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {item.dimension} {item.episode}
                            </Typography>
                        </div>
                    }
                   
                </CardContent>
            </Card>
            </div>
  );
}

export default CardItem;