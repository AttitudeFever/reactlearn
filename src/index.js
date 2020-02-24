import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App';
import '../src/static/style.css';

//Main render Parent that has only one child component: App
ReactDom.render(<HashRouter basename="/"> <App /> </HashRouter>, document.querySelector('#root'));