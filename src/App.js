import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "Max", age:28 },
      { name: "Manu", age:29 },
      { name: "Stephaine", age:26 },
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // Don't Do this this.state.persons[0].name = "Maxi";
    this.setState({
      persons: [
        { name: "Maximilian", age:28 },
        { name: "Manu", age:29 },
        { name: "Stephaine", age:27 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies are racing </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );

    // The above return command gets converted to the below command hence we import react even though we don't use it
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
