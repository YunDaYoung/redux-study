import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increament, decreament } from './Counter'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.number}  
        </div>
        <button onClick = {() => this.props.increament()}>+</button>
        <button onClick = {() => this.props.decreament()}>-</button>
      </div>
    );
  }
  componentWillMount() {
    console.log(this.props);
  }
}

const mapStateToProps = ({counter}) => ({
  number : counter.number
});

const mapDispatchToProps = (dispatch) => ({
  increament : () => dispatch(increament()), 
  decreament : () => dispatch(decreament())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);