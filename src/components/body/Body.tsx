import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Collection from "../collection/Collection";
import MessageCard from "../messageCard/MessageCard";
import Paginator from "../paginator/Paginator";
import SearchForm from "../searchForm/SearchForm";
import "./Body.css";

const Body = () => {
	const collection = useSelector(
		(state: RootState) => state.searcher.collection
	);

	const error = useSelector((state: RootState) => state.searcher.error);

	const fetching = useSelector((state: RootState) => state.searcher.fetching);

	return (
		<div className="body">
			<div className="body__header">
				<SearchForm />
			</div>

			<div className="body__container">
				{fetching ? (
					<MessageCard>
						<CircularProgress className="body__progress" />
					</MessageCard>
				) : error ? (
					<MessageCard>
						<p>No data found...</p>
					</MessageCard>
				) : (
					<Collection collection={collection!} />
				)}
			</div>

			<div className="body__pagination">
				<Paginator />
			</div>
		</div>
	);
};

export default Body;
