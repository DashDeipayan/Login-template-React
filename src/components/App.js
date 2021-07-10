import React from "react";
import InputBox from "./InputBox/InputBox";
import Button from "./Button/Button";
import LabelText from "./LabelText/LabelText";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<div className="App-content">
				<div className="App-content-email">
					<LabelText labeltext="Email ID: " />
					<InputBox textType="email" />
				</div>
				<div className="App-content-password">
					<LabelText labeltext="Password: " />
					<InputBox textType="password" />
				</div>
				<div className="App-content-conf-password">
					<LabelText labeltext="Confirm Password: " />
					<InputBox textType="password" />
				</div>
				<div className="App-content-button">
					<Button buttontext="Next" />
				</div>
			</div>
		</div>
	);
};

export default App;
