import React from "react";
import "./Button.css";

const Button = ({ buttontext }) => {
	return (
		<div className="button-div" data-testid="test-button">
			<button className="button">{buttontext}</button>
		</div>
	);
};

export default Button;
