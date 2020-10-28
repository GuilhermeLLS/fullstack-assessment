import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("<App />", () => {
    test("should render app", () => {
        const { getByText, getByPlaceholderText } = render(<App />);

        expect(getByText("🗑️").tagName).toBe("SPAN");
        expect(getByPlaceholderText("Name").tagName).toBe("INPUT");
        expect(getByPlaceholderText("Last Name").tagName).toBe("INPUT");
        expect(getByPlaceholderText("Participation").tagName).toBe("INPUT");
    });
});