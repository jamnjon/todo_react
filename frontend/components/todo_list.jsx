var React = require('react'),
    TodoStore = require('../stores/todo_store'),
    TodoItem = require('./todo_item');



var TodoList = React.createClass({
  getInitialState: function(){

    return {todoStores: []};
  },

  componentDidMount: function () {
    TodoStore.addChangedHandler(this.onChange);
    TodoStore.fetch();
  },

  componentWillUnmount: function() {
    TodoStore.removedChangedHandler(this.onChange);
  },

  onChange: function() {
    this.setState({todoStores: TodoStore.all()});
  },


  render: function(){


    return (
      <div>

        {this.state.todoStores.map(function(todoStore){
         return   <TodoItem key = {todoStore.id} todoItem = {todoStore} />;
        })}

      </div>
    );
  }
});


module.exports = TodoList;
