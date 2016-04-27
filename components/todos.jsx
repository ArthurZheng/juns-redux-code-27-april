import React from 'react';
import {connect} from 'react-redux';

const Todos = ({todos}) => (
    <div className='container'>
    <h3>Todos</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>)
          )
        }
      </ul>
  </div>
)

function mapStateToProps(todos) {
  return {
    todos,
  }
}
export default connect(mapStateToProps)(Todos);
