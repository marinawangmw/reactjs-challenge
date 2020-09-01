import Typography from "@material-ui/core/Typography";
import React from "react";
import { getModalStyle, useStyles } from "../../material-ui-theme";
import { ResultData } from "../../redux/reduxTypes";
import Collection from "../collection/Collection";
import ModalDetailData from "../modalDetailData/ModalDetailData";
import "./ModalDetails.css";

interface ModalDetailsProps {
	item: ResultData;
}

export const ModalDetails: React.FC<ModalDetailsProps> = ({ item }) => {
	const {
		name,
		image,
		type,
		gender,
		species,
		dimension,
		residents,
		episode,
		characters,
		air_date,
	} = item;

	const [modalStyle] = React.useState(getModalStyle);
	const classes = useStyles();
	const smallCollection = residents || characters;

	return (
		<div style={modalStyle} className={`${classes.paper} modalDetails`}>
			{image && (
				<img className="modalDetails__img" src={image} alt="foto detail" />
			)}

			<Typography className="modalDetails__name" variant="h5" component="h6">
				{name}
			</Typography>

			<div className="modalDetails__data">
				<ModalDetailData data={episode ? air_date : type}>
					{air_date ? "Release date:" : "Type:"}
				</ModalDetailData>

				<ModalDetailData
					data={gender ? gender : dimension ? dimension : episode}
				>
					{gender ? "Gender:" : dimension ? "Dimension:" : "Episode:"}
				</ModalDetailData>

				{smallCollection ? (
					<div className="modalDetails__moreInfo">
						<p className="modalDetails__subtitle">
							{residents ? "Residents" : "Characters"}
						</p>

						<div className="modalDetails__collection">
							{smallCollection && (
								<Collection
									collection={smallCollection.filter((item, idx) => idx < 5)}
									small
								/>
							)}
						</div>
					</div>
				) : (
					<ModalDetailData data={species}>Species:</ModalDetailData>
				)}
			</div>
		</div>
	);
};

export default ModalDetails;
