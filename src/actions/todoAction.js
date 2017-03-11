	let nextTodoId = 3
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}


export const removeTodo = (indx) => {
  return {
    type: 'REMOVE_TODO',
    id: indx
   }
}