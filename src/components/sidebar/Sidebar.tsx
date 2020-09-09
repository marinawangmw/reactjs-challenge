import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FaceIcon from "@material-ui/icons/Face";
import MovieIcon from "@material-ui/icons/Movie";
import RoomIcon from "@material-ui/icons/Room";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/rick_and_morty.png";
import { RootState } from "../../redux/root-reducer";
import { setFilterAction } from "../../redux/searcher/searcher.actions";
import { Filter } from "../../redux/searcher/searcher.types";
import "./Sidebar.css";

const Sidebar = () => {
	const filter = useSelector((state: RootState) => state.searcher.activeFilter);

	const dispatch = useDispatch();

	const handleChange = (event: ChangeEvent<{}>, newValue: Filter) => {
		dispatch(setFilterAction(Filter[newValue]));
	};

	const handleLogoClick = () => {
		dispatch(setFilterAction(Filter.characters));
	};

	return (
		<div className="sidebar">
			<img
				className="sidebar__logo"
				src={logo}
				alt="logo"
				onClick={handleLogoClick}
			/>
			<p className="sidebar__title">Filters</p>
			<hr />
			<BottomNavigation
				className="sidebar__nav"
				value={filter}
				onChange={handleChange}
				showLabels
			>
				<BottomNavigationAction
					label="Characters"
					value={Filter.characters}
					icon={<FaceIcon className="sidebarnav__icon" />}
					className="sidebarnav__button"
				/>
				<BottomNavigationAction
					label="Locations"
					value={Filter.locations}
					icon={<RoomIcon className="sidebarnav__icon" />}
					className="sidebarnav__button"
				/>
				<BottomNavigationAction
					label="Episodes"
					value={Filter.episodes}
					icon={<MovieIcon className="sidebarnav__icon" />}
					className="sidebarnav__button"
				/>
			</BottomNavigation>
		</div>
	);
};

export default Sidebar;
