import React, { useState } from 'react';
import { useEffect } from 'react';
import Search from '../Search/Search';

const Controls = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    onSearch(search);
  }, [search]);

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
    </div>
  );
};

export default Controls;
