import { createStore } from 'redux';
import todos_reducer from './reducers/todos_reducer';

export default createStore(todos_reducer);
