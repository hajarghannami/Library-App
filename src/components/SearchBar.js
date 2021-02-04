import { SearchBarStyled } from "../styles";

const SearchBar = ({ setQuery }) => {
  return (
    <SearchBarStyled
      type="text"
      placeholder="Search for a Book"
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
