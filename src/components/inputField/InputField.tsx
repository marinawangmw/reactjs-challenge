import { TextField } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React, { ChangeEvent } from "react";
import { theme } from "../../material-ui-theme";
import "./InputField.css";

interface InputFieldProps {
	label: string;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
	value: string;
	disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
	label,
	handleChange,
	value,
	...otherProps
}) => {
	return (
		<div className="inputField">
			<ThemeProvider theme={theme}>
				<TextField
					onChange={handleChange}
					label={label}
					value={value}
					id="outlined-basic"
					variant="outlined"
					size="small"
					color="primary"
					{...otherProps}
				/>
			</ThemeProvider>
		</div>
	);
};

export default InputField;
