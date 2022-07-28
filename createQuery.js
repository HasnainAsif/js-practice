const arrObj = [
  {
    title: 'Status',
    values: [
      { title: 'Active', selected: false },
      { title: 'Pending', selected: true },
      { key: 20, title: 'Closed', selected: true },
    ],
  },
  {
    title: 'Priority',
    values: [
      { title: 'Medium', selected: false },
      { title: 'High', selected: true },
    ],
  },
  {
    title: 'Category',
    values: [{ title: 'asd', selected: true }],
  },
  {
    title: 'Assignee',
    values: [{ title: 'qwer', selected: true }],
  },
  {
    title: 'Group',
    values: [
      { title: 'fasdfsa', selected: true },
      { title: 'asdasda', selected: true },
    ],
  },
  {
    title: 'Ticket Type',
    values: [{ title: 'uyity', selected: true }],
  },
];

const title = {
  Assignee: 'Assignee/FullName',
  Group: 'SupportGroup/Name',
  'Ticket Type': 'TicketType/Value',
};
const customFilters = arrObj.reduce((acc, current) => {
  const titleKey = title[current.title] || `${current.title}/Value`;
  const selectedValue = current.values
    .filter((value) => value.selected)
    .map((value) => value.title);

  const customFilter = {
    [titleKey]: selectedValue,
  };
  acc = { ...acc, ...customFilter };
  return acc;
}, {});
// console.log(customFilters);

const filter = {
  0: { 'Status/Value': ['Active', 'Pending', 'Resolved'] },
  1: {
    'Status/Value': ['Active', 'Pending', 'Resolved'],
    'Assignee/FullName': ['asd'],
  },
};

const newCustomFilters = Object.entries(filter[1]).reduce(
  (acc, [key, filterValues]) => {
    let newCustomFilterValues = acc[key];
    const newFilterValues = [...filterValues];

    newCustomFilterValues.forEach((value) => {
      const idx = newFilterValues.indexOf(value);

      if (idx !== -1) {
        newFilterValues.splice(idx, 1);
      }
    });

    const uniqueValues = [...newFilterValues, ...newCustomFilterValues];
    acc[key] = uniqueValues;

    return acc;
  },
  { ...customFilters }
);

const getFilterQuery = (obj) => {
  let filterQuery =
    obj &&
    Object.entries(obj).reduce((acc, [key, filterArr], index) => {
      acc = index > 0 && filterArr.length > 0 ? `${acc} and (` : acc;

      for (let i = 0; i < filterArr.length; i++) {
        const arrayVal = filterArr[i] === null ? null : `'${filterArr[i]}'`;
        const queryFromArray = `${key} eq ${arrayVal}`;

        acc =
          acc && i === 0
            ? acc + queryFromArray
            : acc
            ? `${acc} or ${queryFromArray}`
            : `(${queryFromArray}`;

        acc = i === filterArr.length - 1 ? `${acc})` : `${acc}`;
      }
      return acc;
    }, '');
  return filterQuery;
};

console.log(getFilterQuery(newCustomFilters));
