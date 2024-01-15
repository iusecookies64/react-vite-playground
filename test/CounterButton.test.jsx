import { describe, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import CounterButton from "../src/CounterButton";

describe("Button Test", () => {
    it("testing increment of button", () => {
        // Render the CounterButton component
        const { getByText } = render(<CounterButton />);

        // Find the button element using text content
        const buttonElement = getByText("Click me! Counter: 0");

        // Simulate a button click
        fireEvent.click(buttonElement);

        // Assert that the counter has been incremented
        expect(getByText("Click me! Counter: 1")).toBeInTheDocument();
    });
});
