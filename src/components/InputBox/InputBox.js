import React from "react";
import "./InputBox.css";

const InputBox = ({ textType }) => {
	return (
		<div className="inputdiv" data-testid="test-inputbox">
			<input className="inputfield" type={textType} />
		</div>
	);
};

export default InputBox;
