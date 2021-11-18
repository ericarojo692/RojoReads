import React, { useState } from "react";

function SearchBar({ searchBooks }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    searchBooks(search);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ width: "250px", float: "right" }} >
      <input 
        type="text"
        id="search"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
      </div>
    </form>
  );
}

export default SearchBar;