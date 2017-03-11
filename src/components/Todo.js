import React, { Component } from 'react';
import {ListGroupItem} from 'react-bootstrap';
class Todo extends Component {

		constructor(props){

				super(props);

				console.log(props);


		}

  render() {

  	console.log(this.props.todo.text);
    return (
      <span>
        

        <ListGroupItem>
			
				{this.props.todo.text} 

	</ListGroupItem>

      </span>
    );
  }
}

export default Todo;
