import React from "react";
import "./labeltext.css";

const LabelText = ({ labeltext }) => {
	return (
		<div className="input-label">
			<label className="input-label-text">{labeltext}</label>
		</div>
	);
};

export default LabelText;
