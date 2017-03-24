export default(state = {}, payload) => {
  switch (payload.type) {
    case 'login':
      return payload;
    default:
      return state;
  }
};
