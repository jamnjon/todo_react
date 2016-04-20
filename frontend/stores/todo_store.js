var _todos =[];
var _callbacks = [];


var TodoStore = {
  changed: function(){
    for (var i = 0; i < _callbacks.length; i++) {
      _callbacks[i]();
    }
  },

  addChangedHandler: function(cb){
    _callbacks.push(cb);
  },

  removedChangedHandler: function(cb){
    var idx = _callbacks.indexOf(cb);
    if(idx !== -1){
      _callbacks.splice(idx, 1);
    }
  },

  all: function(){
    return _todos.slice();
  },

  resetTodos: function(todos){
    _todos = todos;
  },

  fetch: function () {
    var store = this;

    $.ajax({
      url: "/api/todos",
      method: "GET",
      success: function (todos) {

        store.resetTodos(todos);
        store.changed();
      }
    });
  },

  create: function(data){
    var store = this;
    console.log("HERE!!!!");
    $.ajax({
      url: "/api/todos",
      data: {todo: data},
      method: "POST",
      success: function (todo) {
        store.addTodo(todo);
        store.changed();
      }
    });
  },

  addTodo: function(todo){
    _todos.push(todo);
  },

  destroy: function(todoId){
    var store = this;

    for (var i = 0; i < _todos.length; i++) {
      if(_todos[i].id === todoId){
        $.ajax({
          url: "/api/todos/" + todoId,
          method: "DELETE",
          success: function () {
            _todos.splice(i, 1);
            store.changed();
          }
        });

        return;
      }
    }
  },
  toggleDone: function(todoId){
    var store = this;

    for (var i = 0; i < _todos.length; i++) {
      if(_todos[i].id === todoId){
        $.ajax({
          url: "./api/todos/" + todoId,
          data: {todo: {done: !_todos[i].done}},
          method: "PATCH",
          success: function(){
            _todos[i].done = !_todos[i].done;
            store.changed();
          }
        });

        return;
      }
    }
  }
};


module.exports = TodoStore;
