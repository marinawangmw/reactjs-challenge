import React from "react";
import { Data } from "../../redux/reduxTypes";
import CardItem from "../cardItem/CardItem";
import "./Collection.css";

interface CollectionProps {
	collection: Data[];
	small?: boolean;
}

const Collection: React.FC<CollectionProps> = ({ collection = [], small }) => (
	<div className="collection">
		{collection.length >= 1 && !collection[0].name ? (
			<p className="collection__errorMessage"> None </p>
		) : (
			collection.map((item) => (
				<CardItem key={item.id} small={small || false} {...item} />
			))
		)}
	</div>
);

export default Collection;
