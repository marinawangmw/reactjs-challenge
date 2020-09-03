import Pagination from "@material-ui/lab/Pagination";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCollectionAction, setPageAction } from "../../redux/searcherDuck";
import { RootState } from "../../redux/store";

const Paginator = () => {
	const filter = useSelector((state: RootState) => state.searcher.activeFilter);

	const totalPages = useSelector((state: RootState) =>
		state.searcher[filter] ? state.searcher[filter].totalPages : 0
	);

	const currentPage = useSelector((state: RootState) =>
		state.searcher[filter] ? state.searcher[filter].page : 1
	);

	const dispatch = useDispatch();

	const handleChangePage = (event: any, value: number) => {
		dispatch(setPageAction(value));
		dispatch(getCollectionAction());
	};

	return (
		<div className="paginator">
			<Pagination
				page={currentPage || 1}
				count={totalPages || 0}
				shape="rounded"
				size="large"
				onChange={handleChangePage}
			/>
		</div>
	);
};

export default Paginator;
