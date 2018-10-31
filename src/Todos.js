import React from 'react';
import { observer, inject } from 'mobx-react';
import todoStore from './todoStore.js';
import TodoList from './TodoList';

class Todos extends React.Component {
    render() {

        const { todoStore } = this.props;
        return(
            <section>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    todoStore.addTodo(this.refs.todo.value);
                    // console.log(this.refs.todo.value);
                    // console.log(todoStore);

                    this.refs.todo.value = "";
                }}>
                    <input type="text" ref="todo" placeholder="Add Todo"/>
                    <button type="submit">Add Todo</button>
                </form>

                <TodoList 
                    deleteTodo={todoStore.deleteTodo}
                    editTodo={todoStore.editTodo}
                    todos={todoStore.todos}
                />

            </section>
        );
    }
}

export default inject("todoStore")(observer(Todos));

