import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'It's good to see you' when the button was not clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const outputElement = screen.getByText("It's good to see you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("not renders 'It's good to see you' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("It's good to see you", { exact: false });
    expect(outputElement).toBeNull();
  });
});
