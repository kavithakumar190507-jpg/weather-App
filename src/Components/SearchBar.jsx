
import React from "react";

function SearchBar({ city, setCity, onSearch }) {

  return (
    <form className="search-bar" onSubmit={onSearch}>

      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit">
        Search
      </button>

    </form>
  );
}

export default SearchBar;
