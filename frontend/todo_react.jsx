var React = require('react'),
    ReactDOM = require('react-dom'),
    TodoStore = require('./stores/todo_store'),
    TodoList = require('./components/todo_list'),
    TodoItem = require('./components/todo_item'),
    TodoForm = require('./components/todo_form');


    document.addEventListener('DOMContentLoaded', function () {
      ReactDOM.render(
        <div>
          <TodoList />
          <TodoForm />
          </div>,
      document.getElementById('root'));
    });
