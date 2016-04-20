var React = require('react');
var TodoList = require('./todo_list'),
    TodoStore = require('../stores/todo_store');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      title: "",
      body: ""
    };
  },
  setTitle: function(event){
    var title = event.currentTarget.value;
    this.setState({title: title});
  },

  setBody: function(event){
    var body = event.currentTarget.value;
    this.setState({body: body});
  },
  handleSubmit: function (event) {
    event.preventDefault();
    TodoStore.create(this.state);
    this.setState({
      title: "",
      body: ""
    });
  },
  render: function(){
    return (
      <div>
        <h3>Add Todo Item</h3>
        <form  onSubmit = {this.handleSubmit} >
          <label>Title
            <input type="text" onChange = {this.setTitle} value={this.state.title}/>
          </label><br/><br/>
          <label>Body
            <input type="text" onChange = {this.setBody} value={this.state.body}/>
          </label> <br/><br/>
        <input type="submit" value="Add Todo Item"/>
        </form>
      </div>
    );
  }
});
