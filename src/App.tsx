import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Homepage from "./pages/Home/Homepage";
import { Filter } from "./redux/reduxTypes";
import { setFilterAction } from "./redux/searcherDuck";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setFilterAction(Filter.characters));
	}, [dispatch]);

	return (
		<div className="App">
			<Homepage />
		</div>
	);
};

export default App;
