
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheets.css';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import rootReducer from './redux/postReducer';
import {Provider} from 'react-redux';
import App from './components/App'

const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));