const initialData = {
  items: {
    'item-1': { id: 'item-1', content: 'Weather'},
    'item-2': { id: 'item-2', content: 'Top Local Stories'},
    'item-3': { id: 'item-3', content: 'Local Crime'},
    'item-4': { id: 'item-4', content: '2 Investigates'},
    'item-5': { id: 'item-5', content: 'Access Atlanta'},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Menu Items',
      itemIds: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
    },
  },
  columnOrder: ['column-1'],
};

export default initialData;