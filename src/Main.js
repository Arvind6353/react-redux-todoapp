import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/todoAction';
import * as counterAction from './actions/counterAction';

import App from './App';

function mapStateToProps(state) {
  return {
    todos: state.todos,
    counter:state.counters
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({},actionCreators,counterAction), dispatch);
}

const Main = connect(mapStateToProps, mapDispatchToProps)(App);

export default Main;