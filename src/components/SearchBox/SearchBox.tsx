import React, { ReactElement,
    FormEventHandler,
    ChangeEventHandler,
 } from "react";

interface SearchBoxProps {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  searchText: string;
}

const SearchBox = ({
  handleSubmit,
  handleInputChange,
  searchText,
}: SearchBoxProps): ReactElement => (
  <form onSubmit={handleSubmit}>
    <input
      value={searchText}
      type="text"
      className="searchInput"
      placeholder="Search input"
      onChange={handleInputChange}
      data-testid="searchBox"
    />
  </form>
);
export default SearchBox;
