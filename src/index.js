
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import './styles/stylesheets.css';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import rootReducer from './redux/postReducer';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><BrowserRouter><Main /></BrowserRouter></Provider>, document.getElementById('root'));