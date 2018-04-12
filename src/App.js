import React, { Component, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export const createElement = React.createElement(
"h1",
{className: "App"},
"Hello, React.createElement!"
)
  
export class CreateComponent extends Component {
  render() {
  return <h1 className="App">Hello, React.Component!</h1>;
  }
}

export class CreatePureComponent extends PureComponent {
  render() {
  return <h1 className="App">Hello, React.PureComponent!</h1>;
  }
}

export const createFuncComponent = () => (<h1 className="App">Hello, Functional component!</h1>)

