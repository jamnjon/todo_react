var React = require('react');
var TodoList = require('./todo_list');

module.exports = React.createClass({
  render: function(){
    return (
      <div>

        <div className = "listtitle">
          <b>{this.props.todoItem.title}</b>
        </div>

        <div className = "listbody">
          {this.props.todoItem.body}<br/><br/>
        </div>


      </div>
    );
  }
});
