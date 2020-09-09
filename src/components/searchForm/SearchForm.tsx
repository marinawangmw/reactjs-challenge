import SearchIcon from "@material-ui/icons/Search";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import {
	clearCollectionAction,
	clearInputAction,
	getCollectionAction,
	setInputNameAction,
	setInputTypeAction,
	setPageAction,
	setTotalPagesAction,
} from "../../redux/searcher/searcher.actions";
import ActionButton from "../actionButton/ActionButton";
import InputField from "../inputField/InputField";
import "./SearchForm.css";

const SearchForm = () => {
	// States
	const filter = useSelector((state: RootState) => state.searcher.activeFilter);

	const inputName = useSelector((state: RootState) =>
		state.searcher[filter] ? state.searcher[filter].inputName : ""
	);

	const inputType = useSelector((state: RootState) =>
		state.searcher[filter] ? state.searcher[filter].inputType : ""
	);

	// Dispatches
	const dispatch = useDispatch();

	const setName = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(setInputNameAction(event.target.value));
	};

	const setType = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(setInputTypeAction(event.target.value));
	};

	// Disable feature
	const [enableSearch, setEnableSearch] = useState(false);

	useEffect(() => {
		if (!inputName && !inputType) {
			setEnableSearch(false);
			return;
		}

		setEnableSearch(
			inputName
				? inputName.length > 2
				: inputType
				? inputType.length > 2
				: false
		);
	}, [inputName, inputType]);

	// Event Handlers
	const getCollection = (event: React.MouseEvent) => {
		event.preventDefault();
		dispatch(getCollectionAction());
	};

	const clearAll = (event: React.MouseEvent) => {
		event.preventDefault();
		dispatch(clearInputAction());
		dispatch(clearCollectionAction());
		dispatch(setPageAction(1));
		dispatch(setTotalPagesAction(0));
	};
	return (
		<div className="searchForm">
			<form className="searchForm__form">
				<InputField
					label="Search by name"
					value={inputName || ""}
					handleChange={setName}
				/>

				<InputField
					label="Search by type"
					value={inputType || ""}
					handleChange={setType}
					disabled={filter === "episodes"}
				/>

				<ActionButton
					disabled={!enableSearch}
					type="submit"
					handleClick={getCollection}
				>
					<SearchIcon />
				</ActionButton>

				<ActionButton handleClick={clearAll}>
					<p className="searchForm__clearButton">CLEAR ALL</p>
				</ActionButton>
			</form>
		</div>
	);
};

export default SearchForm;
