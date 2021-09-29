import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders Hello World as a test", () => {
  // Arrange
  render(<Greeting />);

  //Act
  //Nothing

  //Assert
  const helloWorldElement = screen.getByText("Hello World", { exact: false });

  expect(helloWorldElement).toBeInTheDocument();
});
