import React from 'react';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    window.props = this.props
  }

  componentDidMount() {
    this.props.requestTodos();
    console.log(this.props.todos);
  }

  render() {
    console.log(this.props);
    const todoList = this.props.todos.map((todo, idx) => (
      <li key={idx}>{todo.title}</li>
    ));
    return (
      <ul className='todo-list'>
        {todoList}
      </ul>
    );
  }

}

export default TodoList;
