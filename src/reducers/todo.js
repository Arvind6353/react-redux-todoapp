const initialState = [
  {
    text: 'Use Redux',
    id: 2
  }
]
const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text
      }
   
    default:
      return state
  }
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
   

      case 'REMOVE_TODO':
      return [
        ...state.slice(0,action.id),
        ...state.slice(action.id+1)
      ]
   
    default:
      return state
  }
}


export default todos