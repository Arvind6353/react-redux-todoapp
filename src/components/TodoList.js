import React, { Component } from 'react';

import {Button, ListGroup} from 'react-bootstrap';


import Todo from './Todo';

class TodoList extends Component {



		constructor(props){

				super(props);

				console.log("todolist---"+JSON.stringify(props));

               this.addToDo=this.addToDo.bind(this);
                this.removeToDo=this.removeToDo.bind(this);
                this.increment=this.increment.bind(this);
                this.decrement=this.decrement.bind(this);

		}


		addToDo(){

				const text=this.refs.todoText.value;

				this.props.addTodo(text);

				this.refs.todoText.value ="";

		}

		removeToDo(i){

			this.props.removeTodo(i);

		}


		increment(){

			this.props.increment(this.props.counter.counter);

		}

		decrement(){

			this.props.decrement(this.props.counter.counter);

		}

  render() {
    return (
      <div>
        
          <input type="text" ref="todoText"/><Button bsStyle="primary" onClick={this.addToDo}>Add To Do</Button>


          <Button bsStyle="info" onClick={this.increment}>Increment</Button>
          <Button bsStyle="danger" onClick={this.decrement}>Decrement</Button>
        

          <br/><br/>

          Counter-{this.props.counter.counter}


      	<ListGroup>
    
      		{this.props.todos.map((todo,i)=>

      			<span key={i}>	
      				<Todo  {...this.props} todo={todo}/>
      				<Button bsStyle="danger" onClick={this.removeToDo.bind(null,i)}> &times;</Button>
      			</span>	
      		)}
      	
      	</ListGroup>

      </div>
    );
  }
}

export default TodoList;
