import { IconButton } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { theme } from "../../material-ui-theme";

interface ButtonActionPros {
	children: React.ReactNode;
	handleClick: (event: React.MouseEvent) => void;
	disabled?: boolean;
	type?: string;
}

const ButtonAction: React.FC<ButtonActionPros> = ({
	children,
	handleClick,
	...otherProps
}) => {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<IconButton color="primary" onClick={handleClick} {...otherProps}>
					{children}
				</IconButton>
			</ThemeProvider>
		</div>
	);
};

export default ButtonAction;
