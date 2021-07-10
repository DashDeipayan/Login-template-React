import React from "react";
import ReactDOM from "react-dom";
import Button from "./../Button";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Button></Button>, div);
});

it("renders button correctly next", () => {
	const { getByTestId } = render(<Button buttontext="Next"></Button>);
	expect(getByTestId("test-button")).toHaveTextContent("Next");
});

it("renders button correctly submit", () => {
	const { getByTestId } = render(<Button buttontext="Submit"></Button>);
	expect(getByTestId("test-button")).toHaveTextContent("Submit");
});

it("matches snapshot", () => {
	const tree = renderer.create(<Button label="Submit"></Button>).toJSON();
	expect(tree).toMatchSnapshot();
});
