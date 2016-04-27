import Immutable from 'immutable';

export default (state = Immutable.List(['Code Redux']), action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.push(action.todo)
    default:
      return state
  }
};
