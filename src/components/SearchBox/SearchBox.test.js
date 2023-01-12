import { fireEvent, render, screen } from "@testing-library/react";
import SearchBox from "./SearchBox";

const mockedHandler = jest.fn();

describe("SearchBox has all expected sections", () => {
  it("renders SearchBox section", async () => {
    render(
      <SearchBox
        handleSubmit={mockedHandler}
        handleInputChange={mockedHandler}
        searchText="zzzz"
      />
    );
    const searchElem = screen.getByTestId("searchBox");
    expect(searchElem).toBeInTheDocument();
  });
});
