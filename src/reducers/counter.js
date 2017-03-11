const initialState = 
{
    counter:0
  }


const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
    return Object.assign({},state,{counter:action.id})
      /*return {
        ...state,
        counter:action.id++
      }*/
   
     case 'DECREMENT':
     	return Object.assign({},state,{counter:action.id})
      /*return {
        ...state,
        counter:action.id--
      }
*/

    default:
      return state
  }
}


export default counter