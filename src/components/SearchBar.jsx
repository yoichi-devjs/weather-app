import "../styles/searchbar.css";

function SearchBar({ onCityChange }) {
  function handleInput(event) {
    onCityChange(event.target.value);
  }

  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Enter a city..."
        onChange={handleInput}
        className="searchbar-input"
      />
    </div>
  );
}

export default SearchBar;
