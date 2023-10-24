import React from 'react';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import AddToDo from './components/AddToDo';
import DisplayToDos from './components/DisplayToDos';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <Container className='py-3'>
     <AddToDo/>
     <DisplayToDos/>
    </Container>
    </Provider>
  );
}

export default App;
