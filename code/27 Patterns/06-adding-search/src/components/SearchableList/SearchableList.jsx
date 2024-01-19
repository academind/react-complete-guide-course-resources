import { useState } from 'react';

export default function SearchableList({ items }) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>{item.toString()}</li>
        ))}
      </ul>
    </div>
  );
}
