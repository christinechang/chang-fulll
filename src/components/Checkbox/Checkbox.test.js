import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";

const mockedHandler = jest.fn();

describe ("Checkbox has all expected sections", () => {
  it ("renders Checkbox section", () => {
    render(<Checkbox
        handleCheck={mockedHandler}
        idx={3}
        checked={false}
    />);
    const checkedElem = screen.getByTestId('checkbox');
    expect(checkedElem).toBeInTheDocument();
 
  });
});
