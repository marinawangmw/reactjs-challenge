import React from "react";
import { ResultData } from "../../redux/reduxTypes";
import CardItem from "../cardItem/CardItem";
import "./Collection.css";

interface CollectionProps {
	collection: ResultData[];
	small?: boolean;
}

const Collection: React.FC<CollectionProps> = ({ collection = [], small }) => (
	<div className="collection">
		{collection.length >= 1 && !collection[0].name ? (
			<p className="collection__errorMessage"> None </p>
		) : (
			collection.map((item) => (
				<CardItem key={item.id} item={item} small={small!} />
			))
		)}
	</div>
);

export default Collection;
