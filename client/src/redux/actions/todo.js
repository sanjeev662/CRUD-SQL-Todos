import axios from 'axios';
import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  GET_TODO,
} from './actiontypes';

const baseUrl = 'http://localhost:3000';
const todoUrl = `${baseUrl}/todos`;

export const addTodo = (todo) => {
  return (dispatch) => {
    return axios
      .post(todoUrl, todo)
      .then((response) => {
        console.log('Todo added:', response.data);
        dispatch({
          type: ADD_TODO,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error('Error adding todo:', error);
      });
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    return axios
      .delete(`${todoUrl}/${id}`)
      .then((response) => {
        console.log('Todo deleted:', response.data);
        dispatch({
          type: DELETE_TODO,
          payload: id,
        });
      })
      .catch((error) => {
        console.error('Error deleting todo:', error);
      });
  };
};

export const updateTodo = (todo) => {
  const { id, ...data } = todo;
  return (dispatch) => {
    return axios
      .put(`${todoUrl}/${id}`, data)
      .then((response) => {
        console.log('Todo updated:', response.data);
        dispatch({
          type: UPDATE_TODO,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error('Error updating todo:', error);
      });
  };
};

export const getTodo = () => {
  return (dispatch) => {
    return axios
      .get(todoUrl)
      .then((response) => {
        console.log('Todo list:', response.data);
        dispatch({
          type: GET_TODO,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error('Error in getting todo:', error);
      });
  };
};

