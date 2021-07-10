import React from "react";
import ReactDOM from "react-dom";
import InputBox from "./../InputBox";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);
it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<InputBox></InputBox>, div);
});

it("renders button correctly next", () => {
	const { getByTestId } = render(<InputBox>Testing</InputBox>);
	expect(getByTestId("test-inputbox")).toHaveTextContent("Testing");
});
