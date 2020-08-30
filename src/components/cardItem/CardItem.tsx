import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { ResultData } from "../../redux/reduxTypes";
import ModalDetails from "../modalDetails/ModalDetails";
import "./CardItem.css";

interface CardItemProps {
	item: ResultData;
	small: boolean;
}

const CardItem: React.FC<CardItemProps> = ({ item, small }) => {
	const { name, image, dimension, episode } = item;
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		if (!small) {
			setOpen(true);
			return;
		}
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className="card">
			<Card className={`"card__card" ${small && "noTransition"}`}>
				<CardContent onClick={handleOpen}>
					{image ? (
						<div className={`${small && "small"} "card__withImage"`}>
							<img className="card__img" src={image} alt="foto card" />
							<Typography
								className="cardwithImage__p"
								variant="body2"
								component="p"
							>
								{name}
							</Typography>
						</div>
					) : (
						<div className="card__noImage">
							<Typography variant="h5" component="h2">
								{name}
							</Typography>
							<Typography variant="body2" component="p">
								{dimension ? dimension : episode && episode}
							</Typography>
						</div>
					)}
				</CardContent>
			</Card>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				<ModalDetails item={item} />
			</Modal>
		</div>
	);
};

export default CardItem;
