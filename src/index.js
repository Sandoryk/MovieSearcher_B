import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {CreateComponent, createElement, CreatePureComponent, createFuncComponent} from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(createElement, document.getElementById('createElement'));
ReactDOM.render(<CreateComponent/>, document.getElementById('createComponent'));
ReactDOM.render(<CreatePureComponent/>, document.getElementById('createPureComponent'));
ReactDOM.render(createFuncComponent(), document.getElementById('createFuncComponent'));
registerServiceWorker();
