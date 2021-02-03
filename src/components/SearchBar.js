const SearchBar = ({ setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search for a Book"
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
