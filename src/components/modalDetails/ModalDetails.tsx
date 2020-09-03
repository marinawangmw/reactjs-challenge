import Typography from "@material-ui/core/Typography";
import React from "react";
import { getModalStyle, useStyles } from "../../material-ui-theme";
import { Characters } from "../../redux/searcher/searcher.types";
import Collection from "../collection/Collection";
import ModalDetailData from "../modalDetailData/ModalDetailData";
import "./ModalDetails.css";

interface ModalDetailsProps {
	name: string;
	type?: string;
	image?: string;
	gender?: string;
	dimension?: string;
	episode?: string;
	air_date?: Date;
	species?: string;
	residents?: Characters[];
	characters?: Characters[];
}

export const ModalDetails: React.FC<ModalDetailsProps> = ({ ...props }) => {
	const {
		name,
		image,
		gender,
		air_date,
		type,
		dimension,
		episode,
		residents,
		characters,
		species,
	} = props;
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
				<ModalDetailData data={air_date || type}>
					{air_date ? "Release date:" : "Type:"}
				</ModalDetailData>

				<ModalDetailData data={gender || dimension || episode}>
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
