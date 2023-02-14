
import React, { Component } from 'react';

class App extends Component {
  state = {
    counter: 0
  };

  handleClick()  {
    this.setState((prev, _props) => ({
      counter: prev.counter + 1
    }))
  }

  render() {
   // console.log(this.state);
   const { counter } = this.state;
    return (
      <> 
        <button onClick={ this.handleClick }>Contador</button>
        <h1>O contador esta em { counter }</h1>
      </>
    )
  }
}


export default App;
