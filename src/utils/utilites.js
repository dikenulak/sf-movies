const getMovieInfo = (data, attr) => Array.from(new Set(data.map(d => d[attr]))).map(info => ({
  label: info,
  value: attr === 'release_year' ? parseInt(info, 10) : info,
}));

// Willing to work for filter by year so added this function
const sortInDescendingOrder = (a, b) => {
  let comparison = 0;
  if (a.value > b.value) {
    comparison = 1;
  } else if (a.value < b.value) {
    comparison = -1;
  }
  return (comparison * -1);
};

const uniqueItems = (data, attr) => {
  const result = [];
  const map = new Map();
  for (const item of data) {
    if (!map.has(item[attr])) {
      map.set(item[attr], true);
      result.push(item);
    }
  }
  return result;
};

export { getMovieInfo, sortInDescendingOrder, uniqueItems };
