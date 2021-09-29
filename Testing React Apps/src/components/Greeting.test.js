import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello World as a test", () => {
    // Arrange
    render(<Greeting />);

    //Act
    //Nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });

    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button is NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    //Acting
    // Nothing

    // Asserting
    const paragraphElement = screen.getByText("good to see you", {
      exact: false,
    });

    expect(paragraphElement).toBeInTheDocument();
  });

  test('renders "Changed" when the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    //Acting
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Asserting
    const changedElement = screen.getByText("Changed", {
      exact: false,
    });

    expect(changedElement).toBeInTheDocument();
  });

  test('does NOT renders "its good to see you" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    //Acting
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Asserting
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });

    expect(outputElement).toBeNull();
  });
});
