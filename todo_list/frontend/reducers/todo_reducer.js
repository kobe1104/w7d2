import {REQUEST_TODOS, RECEIVE_TODOS} from "../actions/todo_actions"
import merge from 'lodash/merge'

const TodosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    // case REQUEST_TODOS:
    //   console.log('hi');
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach(todo => newState[todo.id] = todo)
      return newState;
    default:
      return state;
  }
};

export default TodosReducer;
