import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import {requestTodos} from './actions/todo_actions';
import allTodos from './reducers/selector.js'
import Root from './components/root';

window.requestTodos = requestTodos;
window.allTodos = allTodos;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById('content');

  ReactDOM.render(<Root store={store}/>, rootEl);
});
