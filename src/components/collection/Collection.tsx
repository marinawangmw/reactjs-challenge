import React from "react";
import uniqid from "uniqid";
import { Data } from "../../redux/searcher/searcher.types";
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
			collection.map((item) => {
				return <CardItem key={uniqid()} small={small} {...item} />;
			})
		)}
	</div>
);

export default Collection;
