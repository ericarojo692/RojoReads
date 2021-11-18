import React, { useState } from "react";

function GenreFilter({ filterBooks }) {
  const [filter, setFilter] = useState("");

 

  return (
    <div class="card" style={{marginRight: 'em'}}>
      <form onSubmit={(e) => {
        e.preventDefault();
        filterBooks(filter)
        }}>
        <label htmlFor="filter"> Filter by genre: </label>
        <select
          name="filter"
          id="filter"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="Biography">Biography</option>
          <option value="Fiction">Fiction</option>
        </select>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default GenreFilter;