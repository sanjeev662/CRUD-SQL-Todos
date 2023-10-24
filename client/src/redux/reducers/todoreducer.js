import { ADD_TODO, DELETE_TODO, UPDATE_TODO, GET_TODO } from '../actions/actiontypes';

const initialState = [];

const todoreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    case GET_TODO:
      return action.payload;
    default:
      return state;
  }
};

export default todoreducer;

