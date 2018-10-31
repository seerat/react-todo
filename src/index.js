import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { observer, Provider, inject } from 'mobx-react';
import Todos from './Todos.js';
import todoStore from './todoStore.js';

const App = observer(()=>{
    return(
        <Provider todoStore={todoStore}>
            <Todos />
        </Provider>
    );
});

ReactDOM.render(
    <App />, 
    document.getElementById('root'));
