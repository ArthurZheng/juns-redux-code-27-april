import React from 'react';

// const TodoForm = React.createClass({
//   render: function(){
//     return (
//         <input type='text' placeholder='your todo ...' onKeyUp={this.props.onChange} />
//     )
//   },
// });

const NewTodo = ({onChange}) => (
  <div>
    <input type='text' placeholder='new to do ...' onKeyUp={onChange} />
  </div>
)

export default NewTodo;
