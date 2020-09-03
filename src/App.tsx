import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Homepage from "./pages/Home/Homepage";
import {
	setFilterAction,
	setTotalPagesAction,
} from "./redux/searcher/searcher.actions";
import { Filter } from "./redux/searcher/searcher.types";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setFilterAction(Filter.characters));
		dispatch(setTotalPagesAction(0));
	}, [dispatch]);

	return (
		<div className="App">
			<Homepage />
		</div>
	);
};

export default App;
