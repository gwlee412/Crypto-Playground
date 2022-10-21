import React, { useState } from 'react';
import '../styles/searchBar.css';
export default function SearchBar() {
  const [text, setText] = useState('');

  return (
    <form onsubmit="event.preventDefault();" role="search">
      <label for="search">Search</label>
      <input id="search" type="search" placeholder="Search..." autofocus required />
      <button type="submit">Go</button>    
    </form>

  )
};

