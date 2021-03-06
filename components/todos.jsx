import React from 'react';
import {connect} from 'react-redux';
import TodoForm from './todo_form';
import { addTodo, deleteTodo } from '../actions/index';

const Todos = ({todos, dispatch}) => (
    <div className='container'>
    <h3>Todos</h3>
    <TodoForm onChange={event => {
        // keyCode 13 is enter key
        if(event.keyCode == 13){
          let todo = event.target.value;
          dispatch(addTodo(todo));
          event.target.value = ''; // once we submit the todo, set input to empty
        }
      }} />
      <ul>
        {todos.map((todo, index) =>
          (
            <li key={todo.index}>
              {todo} &nbsp;
              <button onClick={ e => {dispatch(deleteTodo(index))}}>DEL</button>
            </li>
          )
        )}
      </ul>
  </div>
)

function mapStateToProps(todos) {
  return {
    todos,
  }
}
export default connect(mapStateToProps)(Todos);
