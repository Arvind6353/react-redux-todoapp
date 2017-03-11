	
export const increment = (nextTodoId) => {
  return {
    type: 'INCREMENT',
    id: ++nextTodoId
    
  }
}


export const decrement = (nextTodoId) => {
  return {
    type: 'DECREMENT',
    id: --nextTodoId
   }
}