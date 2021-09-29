import { render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import Async from "./Async";

describe("Async component", () => {
  test("renders post if request succeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: "t1",
          title: "Test post",
        },
      ],
    });
    // ARRANGE
    render(<Async />);

    // ACT
    //Nothing

    //ASSERT
    const listItemElements = await screen.findAllByRole("listitem", {
      exact: false,
    });
    expect(listItemElements).not.toHaveLength(0);
  });
});
