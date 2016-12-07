export const getActiveUser = (users, id) => {
  if (!id && id !== 0) {
    return [...users][0] || {};
  }

  return users.filter(d => d.id === id)[0] || {};
};

export const filterByName = (data, term) => {
  return data.filter(d => d.name.toLowerCase().indexOf(term) >= 0);
};
