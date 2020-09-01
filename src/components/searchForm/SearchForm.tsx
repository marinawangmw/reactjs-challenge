import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import SearchIcon from "@material-ui/icons/Search";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	clearInputAction,
	getCollectionAction,
	setInputNameAction,
	setInputTypeAction,
} from "../../redux/searcherDuck";
import { RootState } from "../../redux/store";
import ButtonAction from "../buttonAction/ButtonAction";
import InputField from "../inputField/InputField";
import "./SearchForm.css";

const SearchForm = () => {
	// States
	const filter = useSelector((state: RootState) => state.searcher.filter);

	const inputName = useSelector((state: RootState) => state.searcher.inputName);

	const inputType = useSelector((state: RootState) => state.searcher.inputType);

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

		setEnableSearch(inputName!.length > 2 || inputType!.length > 2);
	}, [inputName, inputType]);

	// Event Handlers
	const getCollection = (event: React.MouseEvent) => {
		event.preventDefault();
		dispatch(getCollectionAction());
	};

	const clearInput = (event: React.MouseEvent) => {
		event.preventDefault();
		dispatch(clearInputAction());
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

				<ButtonAction
					disabled={!enableSearch}
					type="submit"
					handleClick={getCollection}
				>
					<SearchIcon />
				</ButtonAction>

				<ButtonAction handleClick={clearInput}>
					<ClearRoundedIcon />
				</ButtonAction>
			</form>
		</div>
	);
};

export default SearchForm;
