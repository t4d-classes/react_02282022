import { useState } from 'react';

import { useList } from './useList';

const sortColors = (colors, sortDir) => {
  return [...colors].sort((a, b) => {
    if (a.name < b.name) {
      return sortDir === 'asc' ? -1 : 1;
    } else if (a.name > b.name) {
      return sortDir === 'asc' ? 1 : -1;
    } else {
      return 0;
    }
  });
};


export const useColorToolStore = (initialColors) => {

  const [ colors, , , appendColor ] = useList([ ...initialColors ]);

  const [ sortDir, setSortDir ] = useState('asc');

  return {
    sortedColors: sortColors(colors, sortDir),
    addColor: appendColor,
    sortAsc: () => setSortDir('asc'),
    sortDesc: () => setSortDir('desc'),
  };
};